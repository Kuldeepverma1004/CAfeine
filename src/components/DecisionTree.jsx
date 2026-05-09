import React, { useState } from 'react'
import { C } from '../constants'

export const DecisionTree = ({ tree }) => {
  const [currentId, setCurrentId] = useState('n1')
  const [history, setHistory] = useState([])
  const [result, setResult] = useState(null)

  const nodeMap = {}
  const outcomeMap = {}
  ;(tree.nodes || []).forEach(n => { nodeMap[n.id] = n })
  ;(tree.outcomes || []).forEach(o => { outcomeMap[o.id] = o })

  const currentNode = nodeMap[currentId]

  const pick = (branch) => {
    const newHistory = [...history, { question: currentNode.label, choice: branch.label }]
    setHistory(newHistory)
    if (outcomeMap[branch.target]) {
      setResult(outcomeMap[branch.target])
    } else if (nodeMap[branch.target]) {
      setCurrentId(branch.target)
    }
  }

  const reset = () => {
    setCurrentId('n1')
    setHistory([])
    setResult(null)
  }

  const branchColor = (label) => {
    if (/^yes$/i.test(label.trim())) return C.gr
    if (/^no$/i.test(label.trim())) return C.rd
    return C.am
  }

  return (
    <div style={{ background: C.b1, borderRadius: 10, padding: '14px 16px', marginBottom: 10, border: `1px solid ${C.b2}` }}>
      {/* Topic */}
      <div style={{ fontSize: 10, fontWeight: 700, color: C.bl, letterSpacing: 1.5, fontFamily: "'Space Mono',mono", marginBottom: 10 }}>
        {tree.topic.toUpperCase()}
      </div>

      {/* Breadcrumb trail */}
      {history.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3, marginBottom: 10, padding: '6px 10px', background: C.s2, borderRadius: 6 }}>
          {history.map((h, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {i > 0 && <span style={{ color: C.t3, fontSize: 9 }}>→</span>}
              <span style={{ fontSize: 9, color: C.t2, fontStyle: 'italic' }}>
                {h.question.length > 24 ? h.question.slice(0, 22) + '…' : h.question}
              </span>
              <span style={{ fontSize: 9, color: C.t3 }}>→</span>
              <span style={{ fontSize: 9, color: C.am, fontWeight: 700, fontFamily: "'Space Mono',mono" }}>{h.choice}</span>
            </span>
          ))}
        </div>
      )}

      {/* Outcome */}
      {result ? (
        <div>
          <div style={{ background: `${C.gr}12`, border: `1px solid ${C.gr}35`, borderRadius: 8, padding: '12px 14px', marginBottom: 10 }}>
            <div style={{ fontSize: 9, color: C.gr, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 5 }}>OUTCOME</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.gr, lineHeight: 1.4 }}>{result.label}</div>
            {result.reference && (
              <div style={{ fontSize: 10, color: C.t3, fontFamily: "'Space Mono',mono", marginTop: 4 }}>{result.reference}</div>
            )}
          </div>
          <button onClick={reset} style={{ fontSize: 10, color: C.am, background: 'transparent', border: `1px solid ${C.am}30`, borderRadius: 6, padding: '5px 12px', cursor: 'pointer', fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>
            ↺ Start over
          </button>
        </div>
      ) : currentNode ? (
        <div>
          {/* Question box */}
          <div style={{ background: C.s2, border: `1px solid ${C.bl}20`, borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
            <div style={{ fontSize: 13, color: C.t1, lineHeight: 1.55, fontWeight: 500 }}>{currentNode.label}</div>
          </div>

          {/* Branch buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {(currentNode.branches || []).map((branch, i) => {
              const col = branchColor(branch.label)
              return (
                <button
                  key={i}
                  className="tap"
                  onClick={() => pick(branch)}
                  style={{
                    padding: '9px 14px',
                    borderRadius: 7,
                    border: `1px solid ${col}35`,
                    background: `${col}08`,
                    color: col,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background .15s'
                  }}
                >
                  <span style={{ fontFamily: "'Space Mono',mono", fontSize: 10, letterSpacing: 0.5 }}>{branch.label}</span>
                  <span style={{ opacity: 0.4, fontSize: 11 }}>→</span>
                </button>
              )
            })}
          </div>

          {history.length > 0 && (
            <button onClick={reset} style={{ marginTop: 8, fontSize: 10, color: C.t3, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Space Mono',mono", letterSpacing: 1, padding: '3px 0', display: 'block' }}>
              ↺ restart
            </button>
          )}
        </div>
      ) : (
        <div style={{ fontSize: 12, color: C.t3 }}>No tree data</div>
      )}
    </div>
  )
}
