import React from 'react'
import { C } from '../constants'
import { PBtn } from './Base'
import { DecisionTree } from './DecisionTree'

export const ChapterMirror = ({ subject, chapter, chapterData, onStart, onBack }) => {
  const d = chapterData?.[subject.id]?.[chapter.id]
  const status = d?.status || 0
  const lastTest = d?.lastTest
  const testable = status >= 2
  const allTricky = chapter.tricky || []
  const amendments = chapter.amendments || []
  const trees = chapter.trees || []
  const testColor = lastTest ? (lastTest.score / lastTest.total >= 0.75 ? C.gr : lastTest.score / lastTest.total >= 0.5 ? C.am : C.rd) : null
  const trapCount = chapter.mcqs?.filter(q => q.type === "Trap").length || 0

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.b1}` }}>
        <button className="tap" onClick={onBack} style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.b2}`, color: C.t2, fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',mono" }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: subject.color, letterSpacing: 2, fontFamily: "'Space Mono',mono", fontWeight: 700, marginBottom: 2 }}>{subject.code}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.t1, lineHeight: 1.3 }}>{chapter.name}</div>
        </div>
        {lastTest && <div style={{ fontFamily: "'Space Mono',mono", fontSize: 13, fontWeight: 700, color: testColor }}>{lastTest.score}/{lastTest.total}</div>}
      </div>

      <div className="up" style={{ maxWidth: 680, margin: "0 auto", padding: "16px 20px" }}>
        {/* WHERE STUDENTS LOSE MARKS */}
        <div style={{ background: `${C.rd}10`, border: `1px solid ${C.rd}30`, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
          <div style={{ padding: "10px 16px", background: `${C.rd}18`, borderBottom: `1px solid ${C.rd}30` }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.rd, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>WHERE STUDENTS LOSE MARKS · {trapCount} TRAP QUESTIONS</div>
          </div>
          <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            {allTricky.map((t, i) => (
              <div key={i} style={{ background: C.s1, border: `1px solid ${C.rd}25`, borderRadius: 8, padding: "11px 14px" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.rd, marginBottom: 4 }}>{t.point}</div>
                <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.5, marginBottom: 4 }}><span style={{ color: C.t3 }}>Common mistake: </span>{t.mistake}</div>
                <div style={{ fontSize: 11, color: C.t3, lineHeight: 1.4 }}><span style={{ color: C.t4 }}>Why ICAI tests it: </span>{t.why}</div>
              </div>
            ))}
            {allTricky.length === 0 && <div style={{ fontSize: 12, color: C.t3, padding: "8px 0" }}>Tricky points being updated by content team.</div>}
          </div>
        </div>

        {/* AMENDMENTS */}
        {amendments.length > 0 && (
          <div style={{ background: `${C.gr}08`, border: `1px solid ${C.gr}25`, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
            <div style={{ padding: "10px 16px", background: `${C.gr}12`, borderBottom: `1px solid ${C.gr}25` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.gr, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>AMENDMENTS · WHAT CHANGED</div>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
              {amendments.map((a, i) => (
                <div key={i} style={{ background: C.s1, border: `1px solid ${C.gr}25`, borderRadius: 8, padding: "11px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 99, background: `${(a.priority === "Very High" || a.priority === "High") ? C.rd : C.am}15`, border: `1px solid ${(a.priority === "Very High" || a.priority === "High") ? C.rd : C.am}30`, color: (a.priority === "Very High" || a.priority === "High") ? C.rd : C.am, fontFamily: "'Space Mono',mono", fontWeight: 700, flexShrink: 0, marginTop: 2, letterSpacing: 1 }}>{a.priority?.toUpperCase()}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.t1, marginBottom: 3 }}>{a.topic}</div>
                    <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.5 }}>{a.what}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DECISION TREES */}
        {trees.length > 0 && (
          <div style={{ background: `${C.bl}08`, border: `1px solid ${C.bl}25`, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
            <div style={{ padding: "10px 16px", background: `${C.bl}12`, borderBottom: `1px solid ${C.bl}25` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.bl, letterSpacing: 2, fontFamily: "'Space Mono',mono" }}>HOW TO APPLY THE LAW · DECISION TREES</div>
            </div>
            <div style={{ padding: "12px 16px" }}>
              {trees.map((t, i) => <DecisionTree key={i} tree={t}/>)}
            </div>
          </div>
        )}

        {/* Stats bar */}
        <div style={{ background: C.s1, border: `1px solid ${C.b1}`, borderRadius: 10, padding: "12px 16px", marginBottom: 16, display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[
            { v: chapter.mcqs?.length || 0, l: "MCQs", c: C.t1 },
            { v: trapCount, l: "Traps", c: C.rd },
            { v: chapter.mcqs?.filter(q => q.type === "Concept").length || 0, l: "Concept", c: C.bl },
            { v: chapter.mcqs?.filter(q => q.type === "Amendment").length || 0, l: "Amend", c: C.gr },
            { v: chapter.cases?.length || 0, l: "Cases", c: C.pu },
            { v: trees.length, l: "Trees", c: C.te }
          ].filter(x => x.v > 0 || !["Cases","Trees"].includes(x.l)).map(({ v, l, c }) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Mono',mono", fontSize: 15, fontWeight: 700, color: c }}>{v}</div>
              <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1, marginTop: 1 }}>{l.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, color: C.t3, textAlign: "center", marginBottom: 14 }}>Read this. Then test yourself.</div>

        {testable ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <PBtn onClick={() => onStart("mcq")}>{lastTest ? "Retake test →" : "Start test →"}</PBtn>
            {chapter.cases?.length > 0 && (
              <button onClick={() => onStart("scenario")} style={{ width: "100%", padding: "12px", borderRadius: 10, background: "transparent", border: `1px solid ${C.pu}40`, color: C.pu, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                Try scenario test → ({chapter.cases.length} cases)
              </button>
            )}
          </div>
        ) : (
          <div style={{ padding: "14px", borderRadius: 10, background: C.s2, border: `1px solid ${C.b2}`, textAlign: "center", fontSize: 13, color: C.t3 }}>
            Mark chapter as <strong style={{ color: C.am }}>R1 or R2+</strong> in the chapter list to unlock the test
          </div>
        )}
      </div>
    </div>
  )
}
