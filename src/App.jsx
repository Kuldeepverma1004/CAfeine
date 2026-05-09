import React, { useState, useEffect, useRef } from 'react'
import { SUBJECTS } from './constants'
import { ls } from './utils'
import { sbGet, sbUpsert } from './supabase'

import { Splash } from './components/Splash'
import { Auth } from './components/Auth'
import { Onboarding } from './components/Onboarding'
import { Home } from './components/Home'
import { ChapterList } from './components/ChapterList'
import { ChapterMirror } from './components/ChapterMirror'
import { MCQTest } from './components/MCQTest'
import { ScenarioTest } from './components/ScenarioTest'
import { Result } from './components/Result'
import { Ledger } from './components/Ledger'
import { FlashcardScreen } from './components/FlashcardScreen'
import { PracticeProblems } from './components/PracticeProblems'

export default function App() {
  const [phase, setPhase] = useState("splash")
  const [auth, setAuth] = useState(null)
  const [profile, setProfile] = useState(null)
  const [cd, setCd] = useState({})
  const [screen, setScreen] = useState({ name: "home" })
  const saveTimer = useRef(null)

  useEffect(() => {
    const a = ls("caf_auth")
    if (a?.userId) {
      setAuth(a)
      const p = ls("caf_profile_" + a.userId)
      if (p) {
        setProfile(p)
        const d = ls("caf_progress_" + a.userId) || {}
        setCd(d)
        setPhase("app")
      } else {
        setPhase("auth")
      }
    }
  }, [])

  const handleAuth = async (a) => {
    ls("caf_auth", a)
    setAuth(a)
    if (!a.isNew) {
      const rows = await sbGet(`/rest/v1/user_profiles?user_id=eq.${a.userId}&select=*`, a.token)
      if (rows?.length) {
        const p = { attempt: rows[0].attempt, group: rows[0].group_selection }
        ls("caf_profile_" + a.userId, p)
        setProfile(p)
        const prows = await sbGet(`/rest/v1/user_progress?user_id=eq.${a.userId}&select=*`, a.token)
        if (prows?.length && prows[0].progress_data) {
          const d = JSON.parse(prows[0].progress_data || "{}")
          setCd(d)
          ls("caf_progress_" + a.userId, d)
        }
        setPhase("app")
        return
      }
    }
    setPhase("onboarding")
  }

  const persist = (newData) => {
    setCd(newData)
    if (!auth?.userId) return
    ls("caf_progress_" + auth.userId, newData)
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(async () => {
      await sbUpsert("user_progress", {
        user_id: auth.userId,
        progress_data: JSON.stringify(newData),
        updated_at: new Date().toISOString()
      }, auth.token)
    }, 1500)
  }

  const updateStatus = (subId, chId, val) => {
    const nd = { ...cd }
    if (!nd[subId]) nd[subId] = {}
    if (!nd[subId][chId]) nd[subId][chId] = {}
    nd[subId][chId] = { ...nd[subId][chId], status: val, ...(val >= 2 ? { markedAt: new Date().toISOString() } : {}) }
    persist(nd)
  }

  const saveTest = (subId, chId, result, testType) => {
    const nd = { ...cd }
    if (!nd[subId]) nd[subId] = {}
    if (!nd[subId][chId]) nd[subId][chId] = {}
    if (testType === "scenario") {
      nd[subId][chId] = { ...nd[subId][chId], lastScenarioTest: result }
    } else {
      nd[subId][chId] = { ...nd[subId][chId], lastTest: result, lastTestedAt: new Date().toISOString() }
    }
    persist(nd)
  }

  const savePractice = (subId, chId, problemId, status) => {
    const nd = { ...cd }
    if (!nd[subId]) nd[subId] = {}
    if (!nd[subId][chId]) nd[subId][chId] = {}
    if (!nd[subId][chId].practiceStatus) nd[subId][chId].practiceStatus = {}
    nd[subId][chId].practiceStatus[problemId] = status
    persist(nd)
  }

  const nav = (name, extra = {}) => setScreen({ name, ...extra })
  const sc = screen

  if (phase === "splash") return <Splash onDone={() => {
    const a = ls("caf_auth")
    const p = a?.userId && ls("caf_profile_" + a.userId)
    setPhase(p ? "app" : "auth")
  }}/>

  if (phase === "auth") return <Auth onAuth={handleAuth}/>
  if (phase === "onboarding") return <Onboarding auth={auth} onDone={d => { setProfile(d); setPhase("app") }}/>

  const sub = sc.subId ? SUBJECTS.find(s => s.id === sc.subId) : null
  const ch = sc.chId && sub ? sub.chapters.find(c => c.id === sc.chId) : null

  if (sc.name === "mcq" && sub && ch) {
    const prevTest = cd?.[sc.subId]?.[sc.chId]?.lastTest
    return <MCQTest subject={sub} chapter={ch} mode="mcq" mistakesOnly={sc.mistakesOnly} mistakeIds={sc.mistakeIds}
      onComplete={result => { saveTest(sc.subId, sc.chId, result, "mcq"); nav("result", { subId: sc.subId, chId: sc.chId, result, prevResult: prevTest, resultType: "mcq" }) }}
      onBack={() => nav("mirror", { subId: sc.subId, chId: sc.chId })}/>
  }

  if (sc.name === "casemcq" && sub && ch) {
    const prevTest = cd?.[sc.subId]?.[sc.chId]?.lastTest
    return <MCQTest subject={sub} chapter={ch} mode="casemcq"
      onComplete={result => { saveTest(sc.subId, sc.chId, result, "mcq"); nav("result", { subId: sc.subId, chId: sc.chId, result, prevResult: prevTest, resultType: "mcq" }) }}
      onBack={() => nav("mirror", { subId: sc.subId, chId: sc.chId })}/>
  }

  if (sc.name === "scenario" && sub && ch) {
    return <ScenarioTest subject={sub} chapter={ch}
      onComplete={result => { saveTest(sc.subId, sc.chId, result, "scenario"); nav("result", { subId: sc.subId, chId: sc.chId, result, prevResult: cd?.[sc.subId]?.[sc.chId]?.lastScenarioTest, resultType: "scenario" }) }}
      onBack={() => nav("mirror", { subId: sc.subId, chId: sc.chId })}/>
  }

  if (sc.name === "result" && sub && ch) {
    return <Result subject={sub} chapter={ch} result={sc.result} prevResult={sc.prevResult} resultType={sc.resultType}
      onRetry={() => nav(sc.resultType === "scenario" ? "scenario" : "mcq", { subId: sc.subId, chId: sc.chId })}
      onRetryMistakes={() => { const ids = sc.result.mistakes?.map(m => ch.mcqs.findIndex(q => q.id === m.id)).filter(i => i >= 0); nav("mcq", { subId: sc.subId, chId: sc.chId, mistakesOnly: true, mistakeIds: ids }) }}
      onCases={() => nav("scenario", { subId: sc.subId, chId: sc.chId })}
      onBack={() => nav("mirror", { subId: sc.subId, chId: sc.chId })}
      onFeedback={(t, d) => console.log("feedback", t, d)}/>
  }

  if (sc.name === "flashcards" && sub && ch) {
    return <FlashcardScreen subject={sub} chapter={ch}
      onBack={() => nav("mirror", { subId: sc.subId, chId: sc.chId })}/>
  }

  if (sc.name === "practice" && sub && ch) {
    return <PracticeProblems
      subject={sub}
      chapter={ch}
      practiceData={cd?.[sc.subId]?.[sc.chId]?.practiceStatus || {}}
      onSave={(problemId, status) => savePractice(sc.subId, sc.chId, problemId, status)}
      onBack={() => nav("mirror", { subId: sc.subId, chId: sc.chId })}/>
  }

  return (
    <div>
      {sc.name === "home" && <Home auth={auth} profile={profile} cd={cd} onNavigate={(n, extra) => nav(n, typeof extra === "string" ? { subId: extra } : extra)}/>}
      {sc.name === "chapters" && <ChapterList subjectId={sc.subId} cd={cd}
        onSelect={(chId, action, val) => { if (action === "updateStatus") { updateStatus(sc.subId, chId, val) } else nav("mirror", { subId: sc.subId, chId }) }}
        onBack={() => nav("home")}/>}
      {sc.name === "mirror" && sub && ch && <ChapterMirror subject={sub} chapter={ch} chapterData={cd}
        onStart={type => nav(type, { subId: sc.subId, chId: sc.chId })}
        onUpdateStatus={val => updateStatus(sc.subId, sc.chId, val)}
        onBack={() => nav("chapters", { subId: sc.subId })}/>}
      {sc.name === "ledger" && <Ledger cd={cd} onBack={() => nav("home")}/>}
    </div>
  )
}
