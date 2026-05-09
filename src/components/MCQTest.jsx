import React, { useState } from 'react'
import { C } from '../constants'
import { PBtn } from './Base'

export const MCQTest = ({ subject, chapter, mode, mistakesOnly, mistakeIds, onComplete, onBack }) => {
  // Determine which question set to use
  const isCaseMode = mode === 'casemcq' && chapter.caseMCQs?.questions?.length > 0
  const mcqs = isCaseMode
    ? chapter.caseMCQs.questions
    : mistakesOnly && mistakeIds
      ? chapter.mcqs.filter((_, i) => mistakeIds.includes(i))
      : chapter.mcqs || []

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [answers, setAnswers] = useState({})
  const [scenarioCollapsed, setScenarioCollapsed] = useState(false)

  const q = mcqs[idx]
  const isLast = idx === mcqs.length - 1

  if (!q) {
    return (
      <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ fontSize: 14, color: C.t2 }}>No questions available</div>
          <button onClick={onBack} style={{ marginTop: 16, padding: '10px 20px', borderRadius: 8, border: `1px solid ${C.b2}`, color: C.t1, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>Go back</button>
        </div>
      </div>
    )
  }

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

  const tc = t => t === 'Trap' ? C.rd : t === 'Amendment' ? C.gr : C.bl
  const oc = (i) => {
    if (!answered) return { bg: 'transparent', bdr: C.b2, col: C.t2 }
    if (i === q.ans) return { bg: `${C.gr}12`, bdr: C.gr, col: C.gr }
    if (i === selected && i !== q.ans) return { bg: `${C.rd}12`, bdr: C.rd, col: C.rd }
    return { bg: 'transparent', bdr: C.b2, col: C.t3 }
  }

  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* Nav bar */}
      <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: '6px 14px', borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: 'pointer', fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>EXIT</button>
        <div style={{ flex: 1, height: 4, background: C.b1, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${((idx + 1) / mcqs.length) * 100}%`, background: subject.color, borderRadius: 2, transition: 'width .3s' }}/>
        </div>
        <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, color: C.t3, flexShrink: 0 }}>{idx + 1}/{mcqs.length}</span>
      </div>

      {/* Scenario panel (case MCQ mode only) */}
      {isCaseMode && chapter.caseMCQs.scenario && (
        <div style={{ margin: '12px 20px 0', borderRadius: 10, overflow: 'hidden', border: `1px solid ${C.am}30`, background: C.s1 }}>
          {/* Collapsible header */}
          <button
            onClick={() => setScenarioCollapsed(c => !c)}
            style={{
              width: '100%',
              padding: '10px 16px',
              background: `${C.am}12`,
              borderBottom: scenarioCollapsed ? 'none' : `1px solid ${C.am}20`,
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'inherit'
            }}
          >
            <span style={{ fontSize: 9, fontWeight: 700, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>
              CASE SCENARIO
            </span>
            <span style={{ fontSize: 11, color: C.am, fontFamily: "'Space Mono',mono" }}>
              {scenarioCollapsed ? '▼ expand' : '▲ collapse'}
            </span>
          </button>
          {!scenarioCollapsed && (
            <div style={{ padding: '12px 16px', borderLeft: `3px solid ${C.am}` }}>
              <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.65 }}>{chapter.caseMCQs.scenario}</div>
            </div>
          )}
        </div>
      )}

      {/* Question area */}
      <div style={{ flex: 1, maxWidth: 640, margin: '0 auto', width: '100%', padding: '20px 20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 9, color: tc(q.type), background: `${tc(q.type)}15`, border: `1px solid ${tc(q.type)}30`, padding: '3px 9px', borderRadius: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1 }}>{q.type?.toUpperCase()}</span>
        </div>
        <div style={{ fontSize: 16, color: C.t1, lineHeight: 1.65, marginBottom: 24, fontWeight: 500, flex: 1 }}>{q.q}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
          {q.opts.map((opt, i) => {
            const o = oc(i)
            return (
              <button key={i} className="tap" onClick={() => pick(i)} style={{ padding: '13px 16px', borderRadius: 9, border: `1px solid ${o.bdr}`, background: o.bg, color: o.col, textAlign: 'left', fontSize: 14, cursor: answered ? 'default' : 'pointer', display: 'flex', gap: 10, alignItems: 'center', transition: 'all .1s', fontFamily: 'inherit' }}>
                <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{['A','B','C','D'][i]}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {answered && i === q.ans && <span style={{ fontSize: 13, color: C.gr }}>✓</span>}
                {answered && i === selected && i !== q.ans && <span style={{ fontSize: 13, color: C.rd }}>✗</span>}
              </button>
            )
          })}
        </div>
        {answered && (
          <div className="up" style={{ background: C.s2, border: `1px solid ${C.b2}`, borderRadius: 9, padding: '12px 14px', marginBottom: 14 }}>
            <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 4 }}>EXPLANATION</div>
            <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.5 }}>{q.exp}</div>
          </div>
        )}
        <PBtn onClick={next} disabled={!answered}>{isLast ? 'See results →' : 'Next →'}</PBtn>
      </div>
    </div>
  )
}
