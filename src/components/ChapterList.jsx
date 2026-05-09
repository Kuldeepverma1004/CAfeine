import React from 'react'
import { C, SUBJECTS, STATUSES } from '../constants'
import { SPill } from './Base'
import { subReady, covPct } from '../utils'

export const ChapterList = ({ subjectId, cd, onSelect, onBack }) => {
  const sub = SUBJECTS.find(s => s.id === subjectId)
  if (!sub) return null
  const coverage = covPct(subjectId, cd)

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.b1}`, position: "sticky", top: 0, background: C.bg, zIndex: 10 }}>
        <button className="tap" onClick={onBack} style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 12, cursor: "pointer", fontFamily: "'Space Mono',mono" }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: sub.color, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 2 }}>{sub.code}</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700 }}>{sub.name}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "'Space Mono',mono", fontSize: 13, fontWeight: 700, color: sub.color }}>{subReady(subjectId, cd)}%</div>
          <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono" }}>READY</div>
        </div>
      </div>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "16px 20px" }}>
        <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 10, padding: "12px 16px", marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 10, color: C.t3, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>
            <span>COVERAGE (R1+)</span><span style={{ color: C.am }}>{coverage}%</span>
          </div>
          <div style={{ height: 4, background: C.b1, borderRadius: 2, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ height: "100%", width: `${coverage}%`, background: sub.color, borderRadius: 2, transition: "width .5s" }}/>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {STATUSES.map(s => {
              const count = sub.chapters.filter(ch => (cd?.[subjectId]?.[ch.id]?.status || 0) === s.val).length
              return (
                <div key={s.val} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.color }}/>
                  <span style={{ fontSize: 10, color: C.t2, fontFamily: "'Space Mono',mono" }}>{s.code} · {count}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ fontSize: 11, color: C.t3, marginBottom: 10, lineHeight: 1.5 }}>
          Click a chapter to view tricky points{sub.hasCase ? ", decision trees, and cases" : ""} before testing. <span style={{ color: C.am }}>Test unlocks at R1+.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {sub.chapters.map((ch, i) => {
            const d = cd?.[subjectId]?.[ch.id]
            const status = d?.status || 0
            const lastTest = d?.lastTest
            const stale = status >= 2 && d?.markedAt && Math.floor((Date.now() - new Date(d.markedAt)) / 86400000) > 30
            const tc = lastTest ? (lastTest.score / lastTest.total >= 0.75 ? C.gr : lastTest.score / lastTest.total >= 0.5 ? C.am : C.rd) : null
            const trapCount = ch.mcqs?.filter(q => q.type === "Trap").length || 0
            return (
              <div key={ch.id} className="tap" onClick={() => onSelect(ch.id)}
                style={{ background: C.s1, border: `1px solid ${stale ? C.am + "40" : C.b1}`, borderRadius: 9, padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: STATUSES[status]?.color || C.b2 }}/>
                <div style={{ fontFamily: "'Space Mono',mono", fontSize: 10, color: C.t3, width: 18, flexShrink: 0, fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.t1, marginBottom: 3, lineHeight: 1.3 }}>{ch.name}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {trapCount > 0 && <span style={{ fontSize: 9, color: C.rd, fontFamily: "'Space Mono',mono" }}>{trapCount} TRAPS</span>}
                    {ch.cases?.length > 0 && <span style={{ fontSize: 9, color: C.pu, fontFamily: "'Space Mono',mono" }}>{ch.cases.length} CASES</span>}
                    {ch.trees?.length > 0 && <span style={{ fontSize: 9, color: C.te, fontFamily: "'Space Mono',mono" }}>{ch.trees.length} TREES</span>}
                    {stale && <span style={{ fontSize: 9, color: C.am, fontFamily: "'Space Mono',mono", animation: "pulse 2s infinite" }}>DECAYING</span>}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
                  {lastTest && <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, fontWeight: 700, color: tc, background: `${tc}15`, border: `1px solid ${tc}30`, padding: "2px 7px", borderRadius: 4 }}>{lastTest.score}/{lastTest.total}</span>}
                  <SPill status={status}/>
                  <div style={{ display: "flex", gap: 2 }}>
                    {STATUSES.map(st => (
                      <button key={st.val} onClick={e => { e.stopPropagation(); onSelect(ch.id, "updateStatus", st.val) }}
                        style={{ width: 28, height: 22, borderRadius: 4, border: `1px solid ${status === st.val ? st.color : C.b2}`, background: status === st.val ? `${st.color}25` : "transparent", color: status === st.val ? st.color : C.t3, fontSize: 8, cursor: "pointer", fontWeight: 700, fontFamily: "'Space Mono',mono" }}>{st.code}</button>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
