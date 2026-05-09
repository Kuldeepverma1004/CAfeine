import React, { useState } from 'react'
import { C } from '../constants'
import { PBtn } from './Base'
import { DecisionTree } from './DecisionTree'

// ─── Status constants ─────────────────────────────────────────────────────────
// NS=0, S1=1, R1=2, R2+=3
const STATUS_LABELS = ['NS', 'S1', 'R1', 'R2+']
const STATUS_COLORS = [C.t3, C.bl, C.am, C.gr]

// ─── Nudge dialog ─────────────────────────────────────────────────────────────
const NudgeDialog = ({ onProceed, onCancel }) => (
  <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
    <div style={{ background: C.s1, border: `1px solid ${C.b2}`, borderRadius: 14, padding: '24px 20px', maxWidth: 340, width: '100%' }}>
      <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 10 }}>NOT REVISED YET</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: C.t1, marginBottom: 8, lineHeight: 1.4 }}>You haven't revised this chapter yet.</div>
      <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.5, marginBottom: 20 }}>Taking the test before revision usually hurts more than it helps. Attempt anyway?</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onCancel} style={{ flex: 1, padding: '12px', borderRadius: 9, border: `1px solid ${C.b2}`, background: 'transparent', color: C.t2, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
        <button onClick={onProceed} style={{ flex: 1, padding: '12px', borderRadius: 9, border: `1px solid ${C.am}40`, background: `${C.am}12`, color: C.am, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Attempt anyway →</button>
      </div>
    </div>
  </div>
)

// ─── Status picker modal ──────────────────────────────────────────────────────
const StatusPicker = ({ current, onPick, onClose }) => (
  <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 999, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 20 }}>
    <div style={{ background: C.s1, border: `1px solid ${C.b2}`, borderRadius: 16, padding: '20px 20px 28px', width: '100%', maxWidth: 420 }}>
      <div style={{ fontSize: 9, color: C.t3, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 14, textAlign: 'center' }}>UPDATE REVISION STATUS</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[1,2,3].map(val => (
          <button
            key={val}
            onClick={() => { onPick(val); onClose() }}
            style={{
              padding: '13px 16px',
              borderRadius: 10,
              border: `1px solid ${val === current ? STATUS_COLORS[val] + '60' : C.b2}`,
              background: val === current ? `${STATUS_COLORS[val]}12` : 'transparent',
              color: val === current ? STATUS_COLORS[val] : C.t2,
              fontSize: 13,
              fontWeight: val === current ? 700 : 400,
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }}
          >
            <span style={{ fontFamily: "'Space Mono',mono", fontSize: 11, fontWeight: 700, minWidth: 28 }}>{STATUS_LABELS[val]}</span>
            <span style={{ flex: 1 }}>{val === 1 ? 'Studied once' : val === 2 ? 'Revised once (R1)' : 'Revised twice or more (R2+)'}</span>
            {val === current && <span>✓</span>}
          </button>
        ))}
      </div>
      <button onClick={onClose} style={{ width: '100%', marginTop: 12, padding: '11px', borderRadius: 9, border: 'none', background: C.b1, color: C.t3, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
    </div>
  </div>
)

// ─── Amendment card (upgraded) ────────────────────────────────────────────────
const AmendmentCard = ({ a }) => {
  const isRisk = a.pdfStatus === 'risk'
  const [showTooltip, setShowTooltip] = useState(false)
  const isHighPriority = a.priority === 'Very High' || a.priority === 'High'
  const badgeColor = isHighPriority ? C.rd : C.am

  return (
    <div style={{
      background: C.s1,
      border: `1px solid ${isRisk ? C.rd + '45' : C.gr + '25'}`,
      borderRadius: 8,
      padding: '11px 14px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      position: 'relative'
    }}>
      {/* Priority badge */}
      <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 99, background: `${badgeColor}15`, border: `1px solid ${badgeColor}30`, color: badgeColor, fontFamily: "'Space Mono',mono", fontWeight: 700, flexShrink: 0, marginTop: 2, letterSpacing: 1 }}>
        {a.priority?.toUpperCase()}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Topic + risk badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 3 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.t1 }}>{a.topic}</span>
          {isRisk && (
            <span
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(v => !v)}
              style={{ fontSize: 9, padding: '2px 7px', borderRadius: 99, background: `${C.rd}20`, border: `1px solid ${C.rd}50`, color: C.rd, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1, cursor: 'help' }}
            >
              ⚠ RISK
            </span>
          )}
          {showTooltip && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, background: `${C.rd}18`, border: `1px solid ${C.rd}40`, borderRadius: 7, padding: '8px 12px', zIndex: 10 }}>
              <span style={{ fontSize: 11, color: C.rd, lineHeight: 1.5 }}>Your study material may show the old position</span>
            </div>
          )}
        </div>

        {/* effectiveFrom */}
        {a.effectiveFrom && (
          <div style={{ fontSize: 10, color: C.t3, fontFamily: "'Space Mono',mono", marginBottom: 5 }}>
            Effective from: {a.effectiveFrom}
          </div>
        )}

        {/* Old → New positions */}
        {a.oldPosition && (
          <div style={{ fontSize: 12, color: C.t3, textDecoration: 'line-through', marginBottom: 2 }}>{a.oldPosition}</div>
        )}
        {a.newPosition && (
          <div style={{ fontSize: 12, color: C.gr, fontWeight: 600, marginBottom: a.what ? 4 : 0 }}>{a.newPosition}</div>
        )}

        {/* Fallback to 'what' field */}
        {a.what && !a.newPosition && (
          <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.5 }}>{a.what}</div>
        )}
      </div>
    </div>
  )
}

// ─── Action button ─────────────────────────────────────────────────────────────
const ActionBtn = ({ label, sub, active, color, onClick, comingSoon, locked }) => {
  const col = active ? (color || C.am) : C.t3
  return (
    <button
      className={active ? 'tap' : ''}
      onClick={active ? onClick : undefined}
      style={{
        flex: 1,
        padding: '14px 12px',
        borderRadius: 10,
        border: `1px solid ${active ? col + '40' : C.b1}`,
        background: active ? `${col}08` : C.s1,
        color: col,
        cursor: active ? 'pointer' : 'default',
        textAlign: 'left',
        fontFamily: 'inherit',
        opacity: active ? 1 : 0.55
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 10, color: locked ? C.am : comingSoon ? C.t3 : col + 'cc', fontFamily: "'Space Mono',mono" }}>
        {locked ? 'Unlock at R1+' : comingSoon ? 'Coming soon' : sub}
      </div>
    </button>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export const ChapterMirror = ({ subject, chapter, chapterData, onStart, onUpdateStatus, onBack }) => {
  const d = chapterData?.[subject.id]?.[chapter.id]
  const status = d?.status || 0
  const lastTest = d?.lastTest

  const [nudgeTarget, setNudgeTarget] = useState(null)
  const [showStatusPicker, setShowStatusPicker] = useState(false)

  const allTricky = chapter.tricky || []
  const amendments = chapter.amendments || []
  const trees = chapter.trees || []
  const trapCount = chapter.mcqs?.filter(q => q.type === 'Trap').length || 0

  const testColor = lastTest
    ? lastTest.score / lastTest.total >= 0.75 ? C.gr
      : lastTest.score / lastTest.total >= 0.5 ? C.am
      : C.rd
    : null

  // Label for formula guide / decision trees section
  const treeLabel = subject.id === 'p2' ? 'DECISION TREES' : 'FORMULA GUIDE'

  const handleStart = (type) => {
    if ((type === 'mcq' || type === 'casemcq') && status < 2) {
      setNudgeTarget(type)
    } else {
      onStart(type)
    }
  }

  // Button availability
  const hasFlashcards = (chapter.flashcards?.length || 0) > 0
  const hasPractice = (chapter.practiceProblems?.length || 0) > 0
  const hasCaseMCQ = (chapter.caseMCQs?.questions?.length || 0) > 0
  const hasMCQ = (chapter.mcqs?.length || 0) > 0

  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      {/* Header */}
      <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: '6px 14px', borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: 'pointer', fontFamily: "'Space Mono',mono" }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: subject.color, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 2 }}>{subject.code}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.t1, lineHeight: 1.3 }}>{chapter.name}</div>
        </div>
        {/* Status badge */}
        <button
          onClick={() => setShowStatusPicker(true)}
          style={{ padding: '5px 10px', borderRadius: 7, border: `1px solid ${STATUS_COLORS[status]}40`, background: `${STATUS_COLORS[status]}12`, color: STATUS_COLORS[status], fontSize: 10, fontWeight: 700, cursor: 'pointer', fontFamily: "'Space Mono',mono", letterSpacing: 1 }}
        >
          {STATUS_LABELS[status]}
        </button>
        {lastTest && (
          <div style={{ fontFamily: "'Space Mono',mono", fontSize: 13, fontWeight: 700, color: testColor }}>{lastTest.score}/{lastTest.total}</div>
        )}
      </div>

      <div className="up" style={{ maxWidth: 680, margin: '0 auto', padding: '16px 20px' }}>

        {/* ── DANGER ZONES (always shown) ──────────────────────────────────── */}
        <div style={{ background: `${C.rd}10`, border: `1px solid ${C.rd}30`, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
          <div style={{ padding: '10px 16px', background: `${C.rd}18`, borderBottom: `1px solid ${C.rd}30` }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.rd, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>
              DANGER ZONES · {trapCount} TRAP QUESTIONS
            </div>
          </div>
          <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {allTricky.map((t, i) => (
              <div key={i} style={{ background: C.s1, border: `1px solid ${C.rd}25`, borderRadius: 8, padding: '11px 14px' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.rd, marginBottom: 4 }}>{t.point}</div>
                <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.5, marginBottom: 4 }}><span style={{ color: C.t3 }}>Common mistake: </span>{t.mistake}</div>
                <div style={{ fontSize: 11, color: C.t3, lineHeight: 1.4 }}><span style={{ color: C.t3 }}>Why ICAI tests it: </span>{t.why}</div>
              </div>
            ))}
            {allTricky.length === 0 && (
              <div style={{ fontSize: 12, color: C.t3, padding: '8px 0' }}>Tricky points being updated by content team.</div>
            )}
          </div>
        </div>

        {/* ── AMENDMENTS (always shown) ─────────────────────────────────────── */}
        {amendments.length > 0 && (
          <div style={{ background: `${C.gr}08`, border: `1px solid ${C.gr}25`, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ padding: '10px 16px', background: `${C.gr}12`, borderBottom: `1px solid ${C.gr}25` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.gr, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>AMENDMENTS · WHAT CHANGED</div>
            </div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {amendments.map((a, i) => <AmendmentCard key={i} a={a} />)}
            </div>
          </div>
        )}

        {/* ── NS / S1: CTA to unlock more ──────────────────────────────────── */}
        {status < 2 && (
          <div style={{ marginTop: 4, marginBottom: 8 }}>
            <button
              onClick={() => setShowStatusPicker(true)}
              style={{ width: '100%', padding: '14px 20px', borderRadius: 10, border: `1px solid ${C.am}40`, background: `${C.am}08`, color: C.am, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'center' }}
            >
              Mark as Revised to unlock more →
            </button>
            <div style={{ fontSize: 11, color: C.t3, textAlign: 'center', marginTop: 8 }}>
              Formula Guide, Practice Problems and Tests unlock at R1
            </div>
          </div>
        )}

        {/* ── R1+ : FORMULA GUIDE / DECISION TREES ─────────────────────────── */}
        {status >= 2 && trees.length > 0 && (
          <div style={{ background: `${C.bl}08`, border: `1px solid ${C.bl}25`, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ padding: '10px 16px', background: `${C.bl}12`, borderBottom: `1px solid ${C.bl}25` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.bl, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>
                {treeLabel}
              </div>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {trees.map((t, i) => <DecisionTree key={i} tree={t} />)}
            </div>
          </div>
        )}

        {/* ── R1 : Stats bar ───────────────────────────────────────────────── */}
        {status >= 2 && (
          <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 10, padding: '12px 16px', marginBottom: 14, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { v: chapter.mcqs?.length || 0, l: 'MCQs', c: C.t1 },
              { v: trapCount, l: 'Traps', c: C.rd },
              { v: chapter.mcqs?.filter(q => q.type === 'Concept').length || 0, l: 'Concept', c: C.bl },
              { v: chapter.mcqs?.filter(q => q.type === 'Amendment').length || 0, l: 'Amend', c: C.gr },
              { v: trees.length, l: 'Trees', c: C.am }
            ].filter(x => x.v > 0).map(({ v, l, c }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Mono',mono", fontSize: 15, fontWeight: 700, color: c }}>{v}</div>
                <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1, marginTop: 1 }}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        )}

        {/* ── R1 : Action row (Practice + Quick MCQs) ──────────────────────── */}
        {status === 2 && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <ActionBtn
              label="Practice Problems"
              sub={hasPractice ? `${chapter.practiceProblems.length} problems` : undefined}
              active={hasPractice}
              color={C.pu}
              onClick={() => onStart('practice')}
              comingSoon={!hasPractice}
            />
            <ActionBtn
              label="Quick MCQs"
              sub={hasMCQ ? `${chapter.mcqs.length} questions` : undefined}
              active={hasMCQ}
              color={C.bl}
              onClick={() => handleStart('mcq')}
              comingSoon={!hasMCQ}
            />
          </div>
        )}

        {/* ── R2+ : Flashcard count row + 2×2 grid ─────────────────────────── */}
        {status >= 3 && (
          <>
            {/* Flashcards section teaser */}
            {hasFlashcards && (
              <div style={{ background: `${C.am}08`, border: `1px solid ${C.am}25`, borderRadius: 10, padding: '10px 16px', marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.am, letterSpacing: 1.5, fontFamily: "'Space Mono',mono", marginBottom: 2 }}>FLASHCARDS</div>
                  <div style={{ fontSize: 12, color: C.t2 }}>{chapter.flashcards.length} provision cards ready</div>
                </div>
                <button onClick={() => onStart('flashcards')} style={{ padding: '8px 16px', borderRadius: 8, border: `1px solid ${C.am}40`, background: `${C.am}12`, color: C.am, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}>
                  Study →
                </button>
              </div>
            )}

            {/* 2×2 Action grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
              <ActionBtn
                label="Flashcards"
                sub={hasFlashcards ? `${chapter.flashcards.length} cards` : undefined}
                active={hasFlashcards}
                color={C.am}
                onClick={() => onStart('flashcards')}
                comingSoon={!hasFlashcards}
              />
              <ActionBtn
                label="Practice"
                sub={hasPractice ? `${chapter.practiceProblems.length} problems` : undefined}
                active={hasPractice}
                color={C.pu}
                onClick={() => onStart('practice')}
                comingSoon={!hasPractice}
              />
              <ActionBtn
                label="Case Test"
                sub={hasCaseMCQ ? `${chapter.caseMCQs.questions.length} questions` : undefined}
                active={hasCaseMCQ}
                color={C.gr}
                onClick={() => handleStart('casemcq')}
                comingSoon={!hasCaseMCQ}
              />
              <ActionBtn
                label="Quick MCQs"
                sub={hasMCQ ? `${chapter.mcqs.length} questions` : undefined}
                active={hasMCQ}
                color={C.bl}
                onClick={() => handleStart('mcq')}
                comingSoon={!hasMCQ}
              />
            </div>
          </>
        )}

        <div style={{ height: 32 }} />
      </div>

      {/* Nudge dialog */}
      {nudgeTarget && (
        <NudgeDialog
          onProceed={() => { onStart(nudgeTarget); setNudgeTarget(null) }}
          onCancel={() => setNudgeTarget(null)}
        />
      )}

      {/* Status picker */}
      {showStatusPicker && (
        <StatusPicker
          current={status}
          onPick={val => onUpdateStatus && onUpdateStatus(val)}
          onClose={() => setShowStatusPicker(false)}
        />
      )}
    </div>
  )
}
