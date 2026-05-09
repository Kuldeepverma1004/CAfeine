import React, { useState } from 'react'
import { C, ATTEMPTS } from '../constants'
import { Logo, PBtn, GBtn } from './Base'
import { sbUpsert } from '../supabase'
import { ls } from '../utils'

export const Onboarding = ({ auth, onDone }) => {
  const [step, setStep] = useState(1)
  const [attempt, setAttempt] = useState("")
  const [group, setGroup] = useState("")
  const [loading, setLoading] = useState(false)

  const finish = async () => {
    if (!group) return
    setLoading(true)
    const data = { attempt, group }
    ls("caf_profile_" + auth.userId, data)
    await sbUpsert("user_profiles", { user_id: auth.userId, attempt, group_selection: group, updated_at: new Date().toISOString() }, auth.token)
    onDone(data)
  }

  const OB = ({ l, sel, onClick }) => (
    <button onClick={onClick} style={{
      padding: "13px 16px", borderRadius: 9, border: `1px solid ${sel ? C.am : C.b2}`,
      background: sel ? `${C.am}15` : "transparent", color: sel ? C.am : C.t2,
      fontSize: 14, fontWeight: sel ? 600 : 400, cursor: "pointer", textAlign: "left",
      transition: "all .12s", width: "100%"
    }}>{l}</button>
  )

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className="up" style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <Logo size={22}/>
          <div style={{ display: "flex", gap: 6 }}>
            {[1, 2].map(i => <div key={i} style={{ width: 24, height: 3, borderRadius: 2, background: step >= i ? C.am : C.b1, transition: "background .3s" }}/>)}
          </div>
        </div>
        <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 14, padding: "28px 24px" }}>
          {step === 1 && (
            <div className="fade">
              <div style={{ fontSize: 10, color: C.am, letterSpacing: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>STEP 1 OF 2</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>When are you appearing?</div>
              <div style={{ fontSize: 13, color: C.t2, marginBottom: 20 }}>Select your upcoming attempt.</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                {ATTEMPTS.map(a => <OB key={a} l={a} sel={attempt === a} onClick={() => setAttempt(a)}/>)}
              </div>
              <PBtn onClick={() => attempt && setStep(2)} disabled={!attempt}>Continue →</PBtn>
            </div>
          )}
          {step === 2 && (
            <div className="fade">
              <div style={{ fontSize: 10, color: C.am, letterSpacing: 3, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>STEP 2 OF 2</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>How many groups?</div>
              <div style={{ fontSize: 13, color: C.t2, marginBottom: 20 }}>Select what you're appearing for.</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {[["Group 1","g1"],["Group 2","g2"],["Both","both"]].map(([l, v]) => (
                  <button key={v} onClick={() => setGroup(v)} style={{
                    flex: 1, padding: "14px 8px", borderRadius: 9,
                    border: `1px solid ${group === v ? C.am : C.b2}`,
                    background: group === v ? `${C.am}15` : "transparent",
                    color: group === v ? C.am : C.t2,
                    fontSize: 13, fontWeight: group === v ? 600 : 400, cursor: "pointer", transition: "all .12s"
                  }}>{l}</button>
                ))}
              </div>
              <PBtn onClick={finish} disabled={!group || loading}>{loading ? "Setting up..." : "Start →"}</PBtn>
              <GBtn onClick={() => setStep(1)} style={{ marginTop: 8 }}>← Back</GBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
