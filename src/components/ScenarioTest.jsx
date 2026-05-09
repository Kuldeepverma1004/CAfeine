import React, { useState } from 'react'
import { C } from '../constants'
import { PBtn, GBtn } from './Base'

export const ScenarioTest = ({ subject, chapter, onComplete, onBack }) => {
  const cases = chapter.cases || []
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [answers, setAnswers] = useState({})

  if (!cases.length) return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ fontSize: 14, color: C.t2, marginBottom: 16 }}>No cases for this chapter yet.</div>
      <GBtn onClick={onBack} style={{ maxWidth: 300 }}>← Back</GBtn>
    </div>
  )

  const c = cases[idx]
  const isLast = idx === cases.length - 1

  const pick = (v) => {
    if (answered) return
    setSelected(v)
    setAnswered(true)
    setAnswers(p => ({ ...p, [idx]: { sel: v, correct: v.toLowerCase() === c.answer.toLowerCase() } }))
  }

  const next = () => {
    if (isLast) {
      const finalAnswers = { ...answers, [idx]: { sel: selected, correct: selected?.toLowerCase() === c.answer.toLowerCase() } }
      const score = Object.values(finalAnswers).filter(a => a.correct).length
      onComplete({ score, total: cases.length, answers: finalAnswers })
    } else {
      setIdx(p => p + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>EXIT</button>
        <div style={{ flex: 1, height: 4, background: C.b1, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${((idx + 1) / cases.length) * 100}%`, background: C.pu, borderRadius: 2, transition: "width .3s" }}/>
        </div>
        <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, color: C.t3 }}>{idx + 1}/{cases.length}</span>
      </div>
      <div style={{ flex: 1, maxWidth: 640, margin: "0 auto", width: "100%", padding: "24px 20px", display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 12, display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 9, color: C.pu, background: `${C.pu}15`, border: `1px solid ${C.pu}30`, padding: "3px 9px", borderRadius: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1 }}>SCENARIO</span>
          {c.trap && <span style={{ fontSize: 9, color: C.rd, background: `${C.rd}12`, border: `1px solid ${C.rd}25`, padding: "3px 9px", borderRadius: 3, fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>{c.trap.toUpperCase()}</span>}
          <span style={{ marginLeft: "auto", fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono" }}>DIFF {c.diff}/5</span>
        </div>
        <div style={{ background: C.s1, border: `1px solid ${C.b2}`, borderRadius: 10, padding: "16px", marginBottom: 16 }}>
          <div style={{ fontSize: 9, color: C.t3, letterSpacing: 2, fontFamily: "'Space Mono',mono", marginBottom: 6 }}>SITUATION</div>
          <div style={{ fontSize: 14, color: C.t1, lineHeight: 1.6 }}>{c.scenario}</div>
        </div>
        <div style={{ fontSize: 15, color: C.t1, lineHeight: 1.6, marginBottom: 20, fontWeight: 500, flex: 1 }}>{c.question}</div>
        {!answered && (
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            {["Yes", "No"].map(v => (
              <button key={v} className="tap" onClick={() => pick(v)} style={{ flex: 1, padding: "16px", borderRadius: 10, border: `1px solid ${C.b2}`, background: "transparent", color: C.t1, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all .1s", fontFamily: "inherit" }}>{v}</button>
            ))}
          </div>
        )}
        {answered && (
          <div className="up">
            <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              {["Yes", "No"].map(v => {
                const isCorrect = v.toLowerCase() === c.answer.toLowerCase()
                const isSelected = selected === v
                return (
                  <div key={v} style={{ flex: 1, padding: "14px", borderRadius: 10, border: `1px solid ${isCorrect ? C.gr : isSelected && !isCorrect ? C.rd : C.b2}`, background: isCorrect ? `${C.gr}12` : isSelected && !isCorrect ? `${C.rd}12` : "transparent", textAlign: "center", fontSize: 15, fontWeight: 600, color: isCorrect ? C.gr : isSelected && !isCorrect ? C.rd : C.t3 }}>
                    {v} {isCorrect ? "✓" : isSelected && !isCorrect ? "✗" : ""}
                  </div>
                )
              })}
            </div>
            <div style={{ background: C.s2, border: `1px solid ${C.b2}`, borderRadius: 9, padding: "12px 14px", marginBottom: 14 }}>
              <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 4 }}>REASONING</div>
              <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.5 }}>{c.reasoning}</div>
            </div>
          </div>
        )}
        <PBtn onClick={next} disabled={!answered}>{isLast ? "See results →" : "Next scenario →"}</PBtn>
      </div>
    </div>
  )
}
