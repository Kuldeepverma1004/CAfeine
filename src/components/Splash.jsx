import React, { useState, useEffect } from 'react'
import { C } from '../constants'
import { Logo } from './Base'

export const Splash = ({ onDone }) => {
  const [p, setP] = useState(0)
  useEffect(() => {
    const t1 = setTimeout(() => setP(1), 400)
    const t2 = setTimeout(() => setP(2), 1000)
    const t3 = setTimeout(onDone, 1900)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])
  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
      <div style={{ fontSize: 52, opacity: p >= 1 ? 1 : 0, transition: "opacity .4s" }}>☕</div>
      <div style={{ opacity: p >= 1 ? 1 : 0, transition: "opacity .5s .1s" }}><Logo size={34}/></div>
      <div style={{ fontSize: 10, color: C.am, letterSpacing: 5, fontFamily: "'Space Mono',mono", fontWeight: 700, opacity: p >= 2 ? 1 : 0, transition: "opacity .4s" }}>THE PAINKILLER</div>
    </div>
  )
}
