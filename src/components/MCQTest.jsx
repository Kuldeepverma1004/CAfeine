import React, { useState } from 'react'
import { C } from '../constants'
import { PBtn } from './Base'

export const MCQTest = ({ subject, chapter, mistakesOnly, mistakeIds, onComplete, onBack }) => {
  const mcqs = mistakesOnly && mistakeIds ? chapter.mcqs.filter((_, i) => mistakeIds.includes(i)) : chapter.mcqs
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [answers, setAnswers] = useState({})
  const q = mcqs[idx]
  const isLast = idx === mcqs.length - 1

  const pick = (i) => {
    if (answered) return
    setSelected(i)
    setAnswered(true)
    setAnswers(p => ({ ...p, [idx]: { sel: i, correct: i === q.ans } }))
  }

  const next = () => {
    if (isLast) {
      const finalAnswers = { ...answers, [idx]: { sel: selected, correct: selected === q.ans } }
      const finalScore = Object.values(finalAnswers).filter(a => a.correct).length
      const byType = {}
      mcqs.forEach((qq, i) => {
        if (!byType[qq.type]) byType[qq.type] = { correct: 0, total: 0 }
        byType[qq.type].total++
        if (finalAnswers[i]?.correct) byType[qq.type].correct++
      })
      const mistakes = mcqs.map((qq, i) => ({ ...qq, _idx: i })).filter((_, i) => !finalAnswers[i]?.correct)
      onComplete({ score: finalScore, total: mcqs.length, byType, mistakes })
    } else {
      setIdx(p => p + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const tc = t => t === "Trap" ? C.rd : t === "Amendment" ? C.gr : C.bl
  const oc = (i) => {
    if (!answered) return { bg: "transparent", bdr: C.b2, col: C.t2 }
    if (i === q.ans) return { bg: `${C.gr}12`, bdr: C.gr, col: C.gr }
    if (i === selected && i !== q.ans) return { bg: `${C.rd}12`, bdr: C.rd, col: C.rd }
    return { bg: "transparent", bdr: C.b2, col: C.t3 }
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>EXIT</button>
        <div style={{ flex: 1, height: 4, background: C.b1, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${((idx + 1) / mcqs.length) * 100}%`, background: subject.color, borderRadius: 2, transition: "width .3s" }}/>
        </div>
        <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, color: C.t3, flexShrink: 0 }}>{idx + 1}/{mcqs.length}</span>
      </div>
      <div style={{ flex: 1, maxWidth: 640, margin: "0 auto", width: "100%", padding: "24px 20px", display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 9, color: tc(q.type), background: `${tc(q.type)}15`, border: `1px solid ${tc(q.type)}30`, padding: "3px 9px", borderRadius: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1 }}>{q.type.toUpperCase()}</span>
        </div>
        <div style={{ fontSize: 16, color: C.t1, lineHeight: 1.65, marginBottom: 24, fontWeight: 500, flex: 1 }}>{q.q}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
          {q.opts.map((opt, i) => {
            const o = oc(i)
            return (
              <button key={i} className="tap" onClick={() => pick(i)} style={{ padding: "13px 16px", borderRadius: 9, border: `1px solid ${o.bdr}`, background: o.bg, color: o.col, textAlign: "left", fontSize: 14, cursor: answered ? "default" : "pointer", display: "flex", gap: 10, alignItems: "center", transition: "all .1s", fontFamily: "inherit" }}>
                <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{["A","B","C","D"][i]}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {answered && i === q.ans && <span style={{ fontSize: 13, color: C.gr }}>✓</span>}
                {answered && i === selected && i !== q.ans && <span style={{ fontSize: 13, color: C.rd }}>✗</span>}
              </button>
            )
          })}
        </div>
        {answered && (
          <div className="up" style={{ background: C.s2, border: `1px solid ${C.b2}`, borderRadius: 9, padding: "12px 14px", marginBottom: 14 }}>
            <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 4 }}>EXPLANATION</div>
            <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.5 }}>{q.exp}</div>
          </div>
        )}
        <PBtn onClick={next} disabled={!answered}>{isLast ? "See results →" : "Next →"}</PBtn>
      </div>
    </div>
  )
}
