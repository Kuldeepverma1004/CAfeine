import React from 'react'
import { C, STATUSES } from '../constants'

export const Logo = ({ size = 24 }) => (
  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: size, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1 }}>
    <span style={{ color: C.am }}>CA</span><span style={{ color: C.t1 }}>feine</span>
  </span>
)

export const PBtn = ({ children, onClick, disabled, style = {} }) => (
  <button onClick={disabled ? null : onClick} style={{
    width: "100%", padding: "13px", borderRadius: 10,
    background: disabled ? C.s3 : C.am, color: disabled ? C.t3 : "#000",
    fontSize: 14, fontWeight: 700, cursor: disabled ? "default" : "pointer",
    border: "none", fontFamily: "inherit", ...style
  }}>{children}</button>
)

export const GBtn = ({ children, onClick, style = {} }) => (
  <button onClick={onClick} style={{
    width: "100%", padding: "12px", borderRadius: 10, background: "transparent",
    border: `1px solid ${C.b2}`, color: C.t2, fontSize: 13, cursor: "pointer",
    fontFamily: "inherit", ...style
  }}>{children}</button>
)

export const SPill = ({ status }) => {
  const s = STATUSES[status] || STATUSES[0]
  return (
    <span style={{
      fontSize: 9, color: s.color, background: `${s.color}18`,
      border: `1px solid ${s.color}35`, padding: "2px 7px", borderRadius: 3,
      fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1
    }}>{s.code}</span>
  )
}

export const ScoreRing = ({ value, size = 160, stroke = 7 }) => {
  const r = (size - stroke * 2) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  const col = value >= 75 ? C.gr : value >= 50 ? "#84CC16" : value >= 30 ? C.am : value > 0 ? C.rd : C.b2
  return (
    <div style={{ position: "relative", width: size, height: size, display: "inline-block" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.b1} strokeWidth={stroke}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={col} strokeWidth={stroke}
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(.34,1.56,.64,1)" }}/>
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: "'Space Mono',mono", fontSize: size * .3, fontWeight: 700, color: col, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: size * .065, color: C.t3, fontFamily: "'Space Mono',mono", marginTop: 2 }}>/100</div>
      </div>
    </div>
  )
}
