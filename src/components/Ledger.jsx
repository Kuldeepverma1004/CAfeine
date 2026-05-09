import React from 'react'
import { C, SUBJECTS } from '../constants'

export const Ledger = ({ cd, onBack }) => {
  const all = []
  SUBJECTS.forEach(s => {
    s.chapters.forEach(ch => {
      const d = cd?.[s.id]?.[ch.id]
      if (d?.lastTest?.mistakes?.length)
        d.lastTest.mistakes.forEach(m => all.push({ ...m, chName: ch.name, sCode: s.code, sColor: s.color }))
    })
  })

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',mono" }}>←</button>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700 }}>Mistake Ledger</div>
          <div style={{ fontSize: 11, color: C.t3 }}>{all.length} mistakes recorded</div>
        </div>
      </div>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "16px 20px" }}>
        {all.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.t3 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
            <div style={{ fontSize: 14 }}>No mistakes yet.</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {all.map((m, i) => (
              <div key={i} style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 9, padding: "13px 15px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 9, color: m.sColor, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1 }}>{m.sCode}</span>
                  <span style={{ fontSize: 10, color: C.t3 }}>{m.chName}</span>
                  <span style={{ marginLeft: "auto", fontSize: 9, color: m.type === "Trap" ? C.rd : m.type === "Amendment" ? C.gr : C.bl, fontFamily: "'Space Mono',mono", fontWeight: 700 }}>{m.type?.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: 13, color: C.t2, marginBottom: 5, lineHeight: 1.4 }}>{m.q}</div>
                <div style={{ fontSize: 11, color: C.gr }}>✓ {m.opts?.[m.ans]}</div>
                <div style={{ fontSize: 10, color: C.t3, marginTop: 2 }}>{m.exp}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
