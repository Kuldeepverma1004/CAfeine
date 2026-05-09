import React, { useState } from 'react'
import { C } from '../constants'

export const FlashcardScreen = ({ subject, chapter, onBack }) => {
  const cards = chapter.flashcards || []
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = cards[idx]

  const goNext = () => {
    if (idx < cards.length - 1) {
      setIdx(idx + 1)
      setFlipped(false)
    }
  }

  const goPrev = () => {
    if (idx > 0) {
      setIdx(idx - 1)
      setFlipped(false)
    }
  }

  if (cards.length === 0) {
    return (
      <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.b1}` }}>
          <button className="tap" onClick={onBack} style={{ padding: '6px 14px', borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: 'pointer', fontFamily: "'Space Mono',mono" }}>←</button>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>{chapter.name}</div>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, padding: 40 }}>
          <div style={{ fontSize: 32 }}>📚</div>
          <div style={{ fontSize: 14, color: C.t2, textAlign: 'center' }}>Flashcards coming soon for this chapter</div>
          <div style={{ fontSize: 12, color: C.t3, textAlign: 'center' }}>Content team is working on it</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: '6px 14px', borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: 'pointer', fontFamily: "'Space Mono',mono" }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: subject.color, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 2 }}>{subject.code}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.t1, lineHeight: 1.3 }}>{chapter.name}</div>
        </div>
        <div style={{ fontFamily: "'Space Mono',mono", fontSize: 11, color: C.t3 }}>{idx + 1} / {cards.length}</div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: C.b1 }}>
        <div style={{ height: '100%', width: `${((idx + 1) / cards.length) * 100}%`, background: subject.color, transition: 'width .3s' }} />
      </div>

      {/* Card area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 20px', maxWidth: 640, margin: '0 auto', width: '100%' }}>
        {/* Tap hint */}
        <div style={{ textAlign: 'center', fontSize: 10, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1, marginBottom: 16 }}>
          {flipped ? 'SHOWING BACK — TAP TO FLIP' : 'SHOWING FRONT — TAP TO REVEAL'}
        </div>

        {/* 3D Flip card */}
        <div
          onClick={() => setFlipped(f => !f)}
          style={{ flex: 1, cursor: 'pointer', perspective: '1000px', minHeight: 320 }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: 320,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}>
            {/* FRONT */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              background: C.s1,
              border: `1px solid ${C.b2}`,
              borderRadius: 16,
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: 12
            }}>
              <div style={{ fontSize: 9, color: C.am, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 4 }}>
                {card.section || 'PROVISION'}
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.t1, lineHeight: 1.35, fontFamily: "'Syne', sans-serif" }}>
                {card.front}
              </div>
              <div style={{ marginTop: 16, padding: '6px 14px', borderRadius: 99, background: `${C.am}12`, border: `1px solid ${C.am}25` }}>
                <span style={{ fontSize: 10, color: C.am, fontFamily: "'Space Mono',mono", letterSpacing: 1 }}>TAP TO SEE PROVISION</span>
              </div>
            </div>

            {/* BACK */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: C.s2,
              border: `1px solid ${C.bl}30`,
              borderRadius: 16,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              overflowY: 'auto'
            }}>
              <div style={{ fontSize: 9, color: C.bl, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700 }}>
                {card.section || 'PROVISION'}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.t1, lineHeight: 1.35 }}>
                {card.front}
              </div>
              <div style={{ width: 32, height: 2, background: `${C.bl}40`, borderRadius: 1 }} />
              <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.65 }}>
                {card.back}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, gap: 12 }}>
          <button
            className="tap"
            onClick={goPrev}
            disabled={idx === 0}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: `1px solid ${idx === 0 ? C.b1 : C.b2}`,
              background: 'transparent',
              color: idx === 0 ? C.t3 : C.t1,
              fontSize: 13,
              cursor: idx === 0 ? 'default' : 'pointer',
              fontFamily: 'inherit',
              opacity: idx === 0 ? 0.4 : 1
            }}
          >
            ← Prev
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); setFlipped(false) }}
                style={{
                  width: i === idx ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === idx ? subject.color : C.b2,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all .2s'
                }}
              />
            ))}
          </div>

          <button
            className="tap"
            onClick={goNext}
            disabled={idx === cards.length - 1}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: `1px solid ${idx === cards.length - 1 ? C.b1 : C.b2}`,
              background: 'transparent',
              color: idx === cards.length - 1 ? C.t3 : C.t1,
              fontSize: 13,
              cursor: idx === cards.length - 1 ? 'default' : 'pointer',
              fontFamily: 'inherit',
              opacity: idx === cards.length - 1 ? 0.4 : 1
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
