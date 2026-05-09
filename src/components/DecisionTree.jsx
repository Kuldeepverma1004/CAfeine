import React from 'react'
import { C } from '../constants'

export const DecisionTree = ({ tree }) => {
  const outcomes = tree.outcome.split(';').map(o => o.trim())
  const yesOut = outcomes.find(o => o.toLowerCase().startsWith('yes'))
  const noOut = outcomes.find(o => o.toLowerCase().startsWith('no'))
  const yesText = yesOut ? yesOut.replace(/^yes\s*[→:>-]*/i, '').trim() : ''
  const noText = noOut ? noOut.replace(/^no\s*[→:>-]*/i, '').trim() : ''

  const Arrow = () => (
    <div style={{ display: "flex", alignItems: "center", padding: "0 4px", color: C.t3 }}>
      <div style={{ width: 24, height: 1, background: C.t3 }}/>
      <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: `5px solid ${C.t3}` }}/>
    </div>
  )

  return (
    <div style={{ background: C.s2, borderRadius: 8, padding: "12px 14px", marginBottom: 8 }}>
      <div style={{ fontSize: 11, fontWeight: 500, color: C.t1, marginBottom: 12 }}>{tree.topic}</div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", rowGap: 8 }}>
        <div style={{ background: C.s3, border: `1px solid ${C.b3}`, borderRadius: 7, padding: "7px 10px", fontSize: 11, color: C.bl, minWidth: 100, textAlign: "center", lineHeight: 1.4 }}>{tree.logic}</div>
        <Arrow />
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {yesText && (
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 9, color: C.gr, fontFamily: "'Space Mono',mono", fontWeight: 700, minWidth: 24 }}>YES</span>
              <Arrow />
              <div style={{ background: `${C.gr}12`, border: `1px solid ${C.gr}30`, borderRadius: 7, padding: "6px 10px", fontSize: 11, color: C.gr, lineHeight: 1.4 }}>{yesText}</div>
            </div>
          )}
          {noText && (
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 9, color: C.rd, fontFamily: "'Space Mono',mono", fontWeight: 700, minWidth: 24 }}>NO</span>
              <Arrow />
              <div style={{ background: `${C.rd}12`, border: `1px solid ${C.rd}30`, borderRadius: 7, padding: "6px 10px", fontSize: 11, color: C.rd, lineHeight: 1.4 }}>{noText}</div>
            </div>
          )}
          {!yesText && !noText && (
            <div style={{ background: `${C.am}12`, border: `1px solid ${C.am}30`, borderRadius: 7, padding: "6px 10px", fontSize: 11, color: C.am, lineHeight: 1.4 }}>{tree.outcome}</div>
          )}
        </div>
      </div>
    </div>
  )
}
