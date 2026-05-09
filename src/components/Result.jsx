import React, { useState } from 'react'
import { C } from '../constants'
import { PBtn, GBtn } from './Base'

export const Result = ({ subject, chapter, result, prevResult, resultType, onRetry, onRetryMistakes, onCases, onBack, onFeedback }) => {
  const [showFb, setShowFb] = useState(false)
  const [fbDone, setFbDone] = useState(false)
  const [reportType, setReportType] = useState("")
  const pct = Math.round(result.score / result.total * 100)
  const ready = pct >= 75 ? "STRONG" : pct >= 50 ? "BORDERLINE" : "WEAK"
  const rColor = pct >= 75 ? C.gr : pct >= 50 ? C.am : C.rd
  const prevPct = prevResult ? Math.round(prevResult.score / prevResult.total * 100) : null
  const delta = prevPct !== null ? pct - prevPct : null
  const isScenario = resultType === "scenario"

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>← BACK</button>
        <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: C.t1 }}>{chapter?.name}</div>
        {!fbDone && <button onClick={() => setShowFb(p => !p)} style={{ padding: "5px 8px", borderRadius: 6, border: `1px solid ${C.b2}`, background: "transparent", color: C.t3, fontSize: 13, cursor: "pointer" }}>🚩</button>}
      </div>
      <div className="up" style={{ maxWidth: 640, margin: "0 auto", padding: "20px" }}>
        <div style={{ background: C.s1, border: `1px solid ${rColor}40`, borderRadius: 14, padding: "24px", marginBottom: 12, textAlign: "center" }}>
          <div style={{ fontSize: 9, color: rColor, letterSpacing: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 8 }}>{isScenario ? "SCENARIO TEST" : "MCQ TEST"}</div>
          <div style={{ fontFamily: "'Space Mono',mono", fontSize: 56, fontWeight: 700, color: rColor, lineHeight: 1 }}>
            {result.score}<span style={{ fontSize: 28, color: C.t3 }}>/{result.total}</span>
          </div>
          <div style={{ fontSize: 10, color: rColor, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginTop: 8 }}>{ready}</div>
          {delta !== null && <div style={{ fontSize: 12, color: delta > 0 ? C.gr : delta < 0 ? C.rd : C.t3, fontFamily: "'Space Mono',mono", marginTop: 6 }}>{delta > 0 ? `↑ +${delta}%` : delta < 0 ? `↓ ${delta}%` : "= Same as last time"}</div>}
          <div style={{ height: 4, background: C.b1, borderRadius: 2, marginTop: 14, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: rColor, borderRadius: 2 }}/>
          </div>
        </div>

        {!isScenario && result.byType && (
          <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 11, padding: "14px 16px", marginBottom: 12 }}>
            <div style={{ fontSize: 10, color: C.t3, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>BREAKDOWN BY TYPE</div>
            <div style={{ display: "flex", gap: 8 }}>
              {Object.entries(result.byType).map(([type, data]) => {
                const tPct = data.total ? Math.round(data.correct / data.total * 100) : 0
                const tc = type === "Trap" ? C.rd : type === "Amendment" ? C.gr : C.bl
                return (
                  <div key={type} style={{ flex: 1, padding: "12px 8px", background: C.s2, borderRadius: 8, textAlign: "center" }}>
                    <div style={{ fontFamily: "'Space Mono',mono", fontSize: 18, fontWeight: 700, color: tc }}>{tPct}%</div>
                    <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1, marginTop: 2 }}>{type.toUpperCase()}</div>
                    <div style={{ fontSize: 10, color: C.t4, fontFamily: "'Space Mono',mono", marginTop: 1 }}>{data.correct}/{data.total}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {!isScenario && result.mistakes?.length > 0 && (
          <div style={{ background: C.s1, border: `1px solid ${C.rd}20`, borderRadius: 11, padding: "14px 16px", marginBottom: 12 }}>
            <div style={{ fontSize: 10, color: C.rd, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>MISTAKES · {result.mistakes.length}</div>
            {result.mistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: i < result.mistakes.length - 1 ? 12 : 0, paddingBottom: i < result.mistakes.length - 1 ? 12 : 0, borderBottom: i < result.mistakes.length - 1 ? `1px solid ${C.b1}` : "none" }}>
                <div style={{ fontSize: 12, color: C.t2, marginBottom: 4, lineHeight: 1.4 }}>{m.q}</div>
                <div style={{ fontSize: 11, color: C.gr }}>✓ {m.opts[m.ans]}</div>
                <div style={{ fontSize: 10, color: C.t3, marginTop: 2 }}>{m.exp}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
          {!isScenario && result.mistakes?.length > 0 && <PBtn onClick={onRetryMistakes}>Retry {result.mistakes.length} mistakes only</PBtn>}
          {!isScenario && chapter?.cases?.length > 0 && <GBtn onClick={onCases}>Try scenario test → ({chapter.cases.length} cases)</GBtn>}
          <GBtn onClick={onRetry}>Retake {isScenario ? "scenarios" : "test"}</GBtn>
        </div>

        {showFb && !fbDone && (
          <div className="up" style={{ background: C.s1, border: `1px solid ${C.b2}`, borderRadius: 10, padding: "14px" }}>
            <div style={{ fontSize: 11, color: C.t2, marginBottom: 10 }}>Was this chapter useful?</div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[["👍 Yes","yes",C.gr],["👎 No","no",C.rd],["🚩 Report","report",C.am]].map(([l, v, c]) => (
                <button key={v} onClick={() => { if (v !== "report") { setFbDone(true); setShowFb(false); onFeedback(v) } else setReportType("show") }}
                  style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${c}40`, background: `${c}12`, color: c, cursor: "pointer", fontSize: 13 }}>{l}</button>
              ))}
            </div>
            {reportType === "show" && (
              <div className="up">
                {["Bad question","Wrong explanation","Wrong answer","Score issue"].map(r => (
                  <button key={r} onClick={() => setReportType(r)} style={{ display: "block", width: "100%", padding: "9px 12px", borderRadius: 7, border: `1px solid ${reportType === r ? C.am : C.b2}`, background: reportType === r ? `${C.am}15` : "transparent", color: reportType === r ? C.am : C.t2, cursor: "pointer", fontSize: 12, textAlign: "left", marginBottom: 6, fontFamily: "inherit" }}>{r}</button>
                ))}
                {reportType !== "show" && <PBtn onClick={() => { setFbDone(true); setShowFb(false); onFeedback("report", reportType) }} style={{ marginTop: 4 }}>Submit</PBtn>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
