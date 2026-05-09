import React from 'react'
import { C, SUBJECTS } from '../constants'
import { Logo, ScoreRing } from './Base'
import { daysTo, subReady, covPct } from '../utils'

export const Home = ({ auth, profile, cd, onNavigate }) => {
  const visibleSubjects = SUBJECTS.filter(s =>
    profile.group === "both" || (profile.group === "g1" && s.group === 1) || (profile.group === "g2" && s.group === 2)
  )
  const days = daysTo(profile.attempt)
  const dColor = days < 30 ? C.rd : days < 60 ? "#FB923C" : days < 90 ? C.am : C.gr
  const p1Ready = subReady("p1", cd)
  const readyLabel = p1Ready >= 75 ? "EXAM READY" : p1Ready >= 55 ? "ON TRACK" : p1Ready >= 30 ? "NEEDS ATTENTION" : p1Ready > 0 ? "HIGH RISK" : "START STUDYING"
  const readyColor = p1Ready >= 75 ? C.gr : p1Ready >= 55 ? "#84CC16" : p1Ready >= 30 ? C.am : p1Ready > 0 ? C.rd : C.t3
  const doneChapters = visibleSubjects.reduce((a, s) => a + s.chapters.filter(ch => (cd?.[s.id]?.[ch.id]?.status || 0) >= 2).length, 0)
  const totalChapters = visibleSubjects.reduce((a, s) => a + s.chapters.length, 0)

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${C.b1}`, position: "sticky", top: 0, background: C.bg, zIndex: 10 }}>
        <Logo size={22}/>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>{profile.attempt}</span>
          <button onClick={() => onNavigate("ledger")} style={{ padding: "5px 12px", borderRadius: 6, border: `1px solid ${C.b2}`, background: "transparent", color: C.t2, fontSize: 11, cursor: "pointer", letterSpacing: 1, fontFamily: "'Space Mono',mono" }}>LEDGER</button>
        </div>
      </div>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px" }}>
        <div className="fade" style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 14, padding: "24px 20px", marginBottom: 14, position: "relative", overflow: "hidden" }}>
          <svg style={{ position: "absolute", inset: 0, opacity: .04, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="mol" x="0" y="0" width="70" height="60" patternUnits="userSpaceOnUse"><polygon points="35,6 56,18 56,42 35,54 14,42 14,18" fill="none" stroke="#E8A020" strokeWidth=".7"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#mol)"/>
          </svg>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 10, color: C.t3, letterSpacing: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 14, textAlign: "center" }}>OVERALL READINESS</div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}><ScoreRing value={p1Ready} size={176}/></div>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 10, color: readyColor, background: `${readyColor}15`, border: `1px solid ${readyColor}30`, padding: "4px 14px", borderRadius: 20, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 2 }}>{readyLabel}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
              {[
                { v: `${days}d`, l: "TO EXAM", c: dColor },
                { v: `${covPct("p1", cd)}%`, l: "P1 COV", c: C.am },
                { v: `${doneChapters}/${totalChapters}`, l: "REVISED", c: C.bl },
                { v: visibleSubjects.reduce((a, s) => a + s.chapters.filter(ch => cd?.[s.id]?.[ch.id]?.lastTest).length, 0), l: "TESTED", c: C.gr }
              ].map(({ v, l, c }) => (
                <div key={l} style={{ textAlign: "center", padding: "10px 4px", background: C.s2, borderRadius: 7 }}>
                  <div style={{ fontFamily: "'Space Mono',mono", fontSize: 14, fontWeight: 700, color: c }}>{v}</div>
                  <div style={{ fontSize: 8, color: C.t3, letterSpacing: 1.5, fontFamily: "'Space Mono',mono", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ fontSize: 10, color: C.t3, letterSpacing: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>SUBJECTS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {visibleSubjects.map(s => {
            const ready = s.chapters.length ? subReady(s.id, cd) : 0
            const coverage = s.chapters.length ? covPct(s.id, cd) : 0
            const has = s.chapters.length > 0
            return (
              <div key={s.id} className="tap" onClick={() => has && onNavigate("chapters", { subId: s.id })}
                style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 11, padding: "14px 16px", cursor: has ? "pointer" : "default", opacity: has ? 1 : .5, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: `${coverage}%`, height: 2, background: s.color, transition: "width .6s" }}/>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono',mono", fontSize: 11, color: s.color, fontWeight: 700, flexShrink: 0, letterSpacing: 1 }}>{s.code}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.t1, marginBottom: 2 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: C.t3, display: "flex", gap: 8 }}>
                    {has ? `${s.chapters.length} chapters` : "Coming soon"}
                    {s.hasCase && has && <span style={{ color: C.pu }}>· Cases + Trees</span>}
                  </div>
                </div>
                {has && <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Space Mono',mono", fontSize: 14, fontWeight: 700, color: ready > 0 ? s.color : C.t3 }}>{ready}%</div>
                  <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono" }}>READY</div>
                </div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
