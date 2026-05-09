import React, { useState } from 'react'
import { C } from '../constants'

const DiffDots = ({ n }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {[1,2,3,4,5].map(i => (
      <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i <= n ? C.am : C.b2 }} />
    ))}
  </div>
)

export const PracticeProblems = ({ subject, chapter, practiceData = {}, onSave, onBack }) => {
  const problems = chapter.practiceProblems || []
  const [selected, setSelected] = useState(null)
  const [revealedSteps, setRevealedSteps] = useState([])
  const [showAnswer, setShowAnswer] = useState(false)

  const doneCount = problems.filter(p => practiceData[p.id] === 'done').length

  const openProblem = (p) => {
    setSelected(p)
    setRevealedSteps([])
    setShowAnswer(false)
  }

  const revealStep = (i) => {
    if (!revealedSteps.includes(i)) {
      setRevealedSteps(prev => [...prev, i])
    }
  }

  const allRevealed = selected && revealedSteps.length >= (selected.steps?.length || 0)
  const markedStatus = selected ? practiceData[selected.id] : null

  // PROBLEM DETAIL VIEW
  if (selected) {
    return (
      <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.b1}` }}>
          <button className="tap" onClick={() => setSelected(null)} style={{ padding: '6px 14px', borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: 'pointer', fontFamily: "'Space Mono',mono" }}>←</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 2, textTransform: 'uppercase' }}>
              {selected.topic || 'Practice'}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.t1, lineHeight: 1.3 }}>{selected.title}</div>
          </div>
          <DiffDots n={selected.difficulty || 3} />
        </div>

        <div style={{ flex: 1, maxWidth: 640, margin: '0 auto', width: '100%', padding: '20px 20px 40px' }}>

          {/* Problem statement */}
          <div style={{ background: C.s1, border: `1px solid ${C.b2}`, borderRadius: 12, padding: '16px 18px', marginBottom: 16 }}>
            <div style={{ fontSize: 9, color: C.bl, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>PROBLEM STATEMENT</div>
            <div style={{ fontSize: 14, color: C.t1, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{selected.problem}</div>
          </div>

          <div style={{ fontSize: 11, color: C.t3, marginBottom: 14, textAlign: 'center', fontFamily: "'Space Mono',mono" }}>
            ↓ Attempt this problem, then reveal steps
          </div>

          {/* Step reveals */}
          {(selected.steps || []).map((step, i) => {
            const isRevealed = revealedSteps.includes(i)
            return (
              <div key={i} style={{ marginBottom: 8 }}>
                {isRevealed ? (
                  <div className="up" style={{ background: C.s2, border: `1px solid ${C.b2}`, borderRadius: 10, padding: '12px 16px' }}>
                    <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 6 }}>
                      STEP {i + 1}
                    </div>
                    <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.6 }}>{step}</div>
                  </div>
                ) : (
                  <button
                    className="tap"
                    onClick={() => revealStep(i)}
                    disabled={i > 0 && !revealedSteps.includes(i - 1)}
                    style={{
                      width: '100%',
                      padding: '11px 16px',
                      borderRadius: 10,
                      border: `1px solid ${C.am}30`,
                      background: `${C.am}06`,
                      color: i > 0 && !revealedSteps.includes(i - 1) ? C.t3 : C.am,
                      fontSize: 12,
                      cursor: i > 0 && !revealedSteps.includes(i - 1) ? 'default' : 'pointer',
                      fontFamily: 'inherit',
                      textAlign: 'left',
                      opacity: i > 0 && !revealedSteps.includes(i - 1) ? 0.4 : 1
                    }}
                  >
                    Reveal Step {i + 1} →
                  </button>
                )}
              </div>
            )
          })}

          {/* Show full answer */}
          {allRevealed && !showAnswer && (
            <button
              className="tap"
              onClick={() => setShowAnswer(true)}
              style={{ width: '100%', padding: '11px 16px', borderRadius: 10, border: `1px solid ${C.pu}30`, background: `${C.pu}08`, color: C.pu, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', marginTop: 4 }}
            >
              Show Full Answer →
            </button>
          )}

          {showAnswer && (
            <div className="up" style={{ background: `${C.pu}10`, border: `1px solid ${C.pu}30`, borderRadius: 10, padding: '14px 16px', marginTop: 4 }}>
              <div style={{ fontSize: 9, color: C.pu, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 8 }}>FULL ANSWER</div>
              <div style={{ fontSize: 13, color: C.t1, lineHeight: 1.7 }}>{selected.answer}</div>
            </div>
          )}

          {/* Mark buttons — show after all steps revealed */}
          {allRevealed && (
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              {markedStatus === 'done' ? (
                <div style={{ flex: 1, padding: '12px', borderRadius: 10, border: `1px solid ${C.gr}40`, background: `${C.gr}10`, color: C.gr, fontSize: 13, textAlign: 'center', fontWeight: 700 }}>
                  ✓ Got it
                </div>
              ) : markedStatus === 'review' ? (
                <div style={{ flex: 1, padding: '12px', borderRadius: 10, border: `1px solid ${C.am}40`, background: `${C.am}10`, color: C.am, fontSize: 13, textAlign: 'center', fontWeight: 700 }}>
                  ↻ Still tricky
                </div>
              ) : (
                <>
                  <button
                    className="tap"
                    onClick={() => onSave && onSave(selected.id, 'done')}
                    style={{ flex: 1, padding: '12px', borderRadius: 10, border: `1px solid ${C.gr}35`, background: `${C.gr}08`, color: C.gr, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
                  >
                    ✓ Got it
                  </button>
                  <button
                    className="tap"
                    onClick={() => onSave && onSave(selected.id, 'review')}
                    style={{ flex: 1, padding: '12px', borderRadius: 10, border: `1px solid ${C.am}35`, background: `${C.am}08`, color: C.am, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
                  >
                    ↻ Still tricky
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  // LIST VIEW
  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: '6px 14px', borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: 'pointer', fontFamily: "'Space Mono',mono" }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: subject.color, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 2 }}>{subject.code}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>Practice Problems</div>
        </div>
        <div style={{ fontFamily: "'Space Mono',mono", fontSize: 11, color: C.t3 }}>{doneCount}/{problems.length}</div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: C.b1 }}>
        <div style={{ height: '100%', width: problems.length > 0 ? `${(doneCount / problems.length) * 100}%` : '0%', background: C.gr, transition: 'width .3s' }} />
      </div>

      <div style={{ flex: 1, maxWidth: 640, margin: '0 auto', width: '100%', padding: '16px 20px' }}>
        {problems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📝</div>
            <div style={{ fontSize: 14, color: C.t2 }}>Practice problems coming soon</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Summary bar */}
            <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 10, padding: '10px 16px', marginBottom: 4, display: 'flex', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Mono',mono", fontSize: 15, fontWeight: 700, color: C.t1 }}>{problems.length}</div>
                <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>TOTAL</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Mono',mono", fontSize: 15, fontWeight: 700, color: C.gr }}>{doneCount}</div>
                <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>DONE</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Mono',mono", fontSize: 15, fontWeight: 700, color: C.am }}>
                  {problems.filter(p => practiceData[p.id] === 'review').length}
                </div>
                <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>REVIEW</div>
              </div>
            </div>

            {problems.map((p) => {
              const status = practiceData[p.id]
              return (
                <button
                  key={p.id}
                  className="tap"
                  onClick={() => openProblem(p)}
                  style={{
                    background: C.s1,
                    border: `1px solid ${status === 'done' ? C.gr + '30' : status === 'review' ? C.am + '30' : C.b2}`,
                    borderRadius: 10,
                    padding: '13px 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontFamily: 'inherit'
                  }}
                >
                  {/* Status icon */}
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: status === 'done' ? `${C.gr}15` : status === 'review' ? `${C.am}15` : C.b2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13 }}>
                    {status === 'done' ? <span style={{ color: C.gr }}>✓</span> : status === 'review' ? <span style={{ color: C.am }}>↻</span> : <span style={{ color: C.t3, fontSize: 11 }}>{problems.indexOf(p) + 1}</span>}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: C.t1, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 10, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 0.5 }}>{p.topic || chapter.name}</div>
                  </div>
                  <DiffDots n={p.difficulty || 3} />
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
