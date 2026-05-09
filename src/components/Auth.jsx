import React, { useState } from 'react'
import { C } from '../constants'
import { Logo, PBtn, GBtn } from './Base'
import { signUp, signIn } from '../supabase'

export const Auth = ({ onAuth }) => {
  const [mode, setMode] = useState("choose")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!email.trim() || !pwd.trim()) { setErr("All fields required"); return }
    if (pwd.length < 6) { setErr("Password min 6 characters"); return }
    setErr(""); setLoading(true)
    const d = await (mode === "login" ? signIn : signUp)({ email: email.trim().toLowerCase(), password: pwd })
    setLoading(false)
    if (d.error || d.msg) { setErr(d.error?.message || d.msg || "Something went wrong"); return }
    onAuth({ token: d.access_token, userId: d.user?.id, email: email.trim().toLowerCase(), isNew: mode === "signup" })
  }

  const SI = { width: "100%", background: C.s2, border: `1px solid ${C.b2}`, color: C.t1, padding: "13px 16px", borderRadius: 9, fontSize: 14, boxSizing: "border-box" }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className="up" style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <Logo size={30}/>
          <div style={{ fontSize: 10, color: C.t3, letterSpacing: 3, fontFamily: "'Space Mono',mono", marginTop: 8 }}>CA INTER · READINESS TRACKER</div>
        </div>
        <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 14, padding: "28px 24px" }}>
          {mode === "choose" && (
            <div className="fade">
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Welcome.</div>
              <div style={{ fontSize: 13, color: C.t2, marginBottom: 24, lineHeight: 1.6 }}>Your readiness data syncs across all devices.</div>
              <PBtn onClick={() => setMode("signup")} style={{ marginBottom: 8 }}>Create account →</PBtn>
              <GBtn onClick={() => setMode("login")}>Log in</GBtn>
            </div>
          )}
          {(mode === "login" || mode === "signup") && (
            <div className="fade">
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>{mode === "login" ? "Welcome back." : "Create account."}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" type="email" autoFocus style={SI}/>
                <input value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Password (min 6 chars)" type="password" style={SI} onKeyDown={e => e.key === "Enter" && submit()}/>
              </div>
              {err && <div style={{ fontSize: 12, color: C.rd, marginBottom: 12 }}>{err}</div>}
              <PBtn onClick={submit} disabled={loading}>{loading ? "Please wait..." : (mode === "login" ? "Log in →" : "Create account →")}</PBtn>
              <GBtn onClick={() => { setMode("choose"); setErr("") }} style={{ marginTop: 8 }}>← Back</GBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
