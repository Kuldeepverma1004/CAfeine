import React, { useState } from 'react'
import { C } from '../constants'

// ─── Outcome color detection by keywords ──────────────────────────────────────
function outcomeCol(label) {
  const l = (label || '').toLowerCase()
  if (/cannot|void|not valid|invalid|no liability|not recognized|rejected|prohibited|penalty|non-compliance|not allowed|disqualified|challenged|incorrect/.test(l)) return C.rd
  if (/expense|disclose|contingent|provision|defer/.test(l)) return C.am
  return C.gr
}

// ─── Outcome box component ─────────────────────────────────────────────────────
const OutcomeBox = ({ outcome, highlighted, dimmed, isBottom }) => {
  const col = outcomeCol(outcome.label)
  return (
    <div style={{
      background: `${col}${highlighted ? '20' : '10'}`,
      border: `1px solid ${col}${highlighted ? '70' : '35'}`,
      borderRadius: 7,
      padding: isBottom ? '10px 14px' : '7px 11px',
      opacity: dimmed ? 0.28 : 1,
      transition: 'opacity .2s, border-color .2s',
      maxWidth: 190,
      minWidth: 80
    }}>
      <div style={{ fontSize: isBottom ? 13 : 11, color: col, fontWeight: 700, lineHeight: 1.35 }}>
        {outcome.label}
      </div>
      {outcome.reference && (
        <div style={{ fontSize: 10, color: col, opacity: 0.6, fontFamily: "'Space Mono',mono", marginTop: 3 }}>
          {outcome.reference}
        </div>
      )}
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export const DecisionTree = ({ tree }) => {

  // ── Backward compat: old flat schema (has logic/outcome but no nodes[]) ──────
  if (!tree.nodes && (tree.logic !== undefined || tree.outcome !== undefined)) {
    const parts = (tree.outcome || '').split(';').map(s => s.trim()).filter(Boolean)
    return (
      <div style={{ background: C.s2, borderRadius: 8, padding: '12px 14px', marginBottom: 8, border: `1px solid ${C.b2}` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.bl, letterSpacing: 1.5, fontFamily: "'Space Mono',mono", marginBottom: 8 }}>
          {(tree.topic || '').toUpperCase()}
        </div>
        <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.5, marginBottom: 8, fontStyle: 'italic' }}>{tree.logic}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {parts.map((o, i) => (
            <div key={i} style={{ fontSize: 12, color: C.t1, padding: '5px 10px', background: C.b1, borderRadius: 5 }}>{o}</div>
          ))}
          {parts.length === 0 && (
            <div style={{ fontSize: 12, color: C.t1, padding: '5px 10px', background: C.b1, borderRadius: 5 }}>{tree.outcome}</div>
          )}
        </div>
      </div>
    )
  }

  // ── Build node/outcome maps ──────────────────────────────────────────────────
  const nodeMap = {}
  const outcomeMap = {}
  ;(tree.nodes || []).forEach(n => { nodeMap[n.id] = n })
  ;(tree.outcomes || []).forEach(o => { outcomeMap[o.id] = o })

  // ── Build main vertical path (chain of nodes → nodes) ───────────────────────
  const buildPath = () => {
    const path = []
    let cur = 'n1'
    const seen = new Set()
    while (nodeMap[cur] && !seen.has(cur)) {
      seen.add(cur)
      path.push(cur)
      const node = nodeMap[cur]
      const nxt = node.branches.find(b => nodeMap[b.target])
      if (nxt) { cur = nxt.target } else break
    }
    return path
  }
  const mainPath = buildPath()

  // ── Layout info for each node ────────────────────────────────────────────────
  const getLayout = (nodeId, i) => {
    const node = nodeMap[nodeId]
    if (!node) return null
    const isLast = i === mainPath.length - 1
    const continueBranch = isLast ? null : node.branches.find(b => nodeMap[b.target])
    const outcomeBranches = node.branches.filter(b => outcomeMap[b.target])

    let primaryBranch = null
    let exitBranches = outcomeBranches

    if (isLast && outcomeBranches.length > 0) {
      const yb = outcomeBranches.find(b => /^yes|show/i.test(b.label))
      primaryBranch = yb || outcomeBranches[0]
      exitBranches = outcomeBranches.filter(b => b !== primaryBranch)
    }

    return { node, isLast, continueBranch, primaryBranch, exitBranches }
  }

  // ── Generate traces ──────────────────────────────────────────────────────────
  const traces = (() => {
    if (mainPath.length === 0) return []
    const t = []
    const lastLayout = getLayout(mainPath[mainPath.length - 1], mainPath.length - 1)
    const primaryOid = lastLayout?.primaryBranch?.target

    if (primaryOid) {
      t.push({
        label: mainPath.length > 1 ? 'All Yes →' : `${lastLayout.primaryBranch.label} →`,
        nodes: [...mainPath],
        outcomeId: primaryOid
      })
    }

    mainPath.forEach((nodeId, i) => {
      if (t.length >= 4) return
      const layout = getLayout(nodeId, i)
      if (!layout) return
      layout.exitBranches.forEach(branch => {
        if (t.length >= 4) return
        if (branch.target === primaryOid) return
        t.push({
          label: mainPath.length > 1 ? `${branch.label} at Q${i + 1}` : `${branch.label} →`,
          nodes: mainPath.slice(0, i + 1),
          outcomeId: branch.target
        })
      })
    })
    return t
  })()

  const [activeTrace, setActiveTrace] = useState(null)
  const ct = activeTrace !== null ? traces[activeTrace] : null
  const activeSet = ct ? new Set(ct.nodes) : null
  const activeOid = ct?.outcomeId || null

  const lastLayout = mainPath.length > 0 ? getLayout(mainPath[mainPath.length - 1], mainPath.length - 1) : null
  const finalOid = lastLayout?.primaryBranch?.target

  return (
    <div style={{ background: C.b1, border: `1px solid ${C.b2}`, borderRadius: 10, padding: '16px', marginBottom: 10, overflow: 'hidden' }}>

      {/* Topic */}
      <div style={{ fontSize: 10, fontWeight: 700, color: C.bl, letterSpacing: 1.5, fontFamily: "'Space Mono',mono", marginBottom: 12 }}>
        {(tree.topic || '').toUpperCase()}
      </div>

      {/* Progress dots */}
      {mainPath.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 12 }}>
          {mainPath.map((nodeId, i) => {
            const onPath = activeSet && activeSet.has(nodeId)
            const isLast = activeSet && activeSet.has(nodeId) && ct?.nodes[ct.nodes.length - 1] === nodeId
            const isDone = onPath && !isLast
            return (
              <div key={nodeId} style={{
                width: isLast ? 18 : 7,
                height: 7,
                borderRadius: 4,
                background: isDone ? C.gr : isLast ? C.am : C.b2,
                transition: 'all .25s'
              }} />
            )
          })}
          {finalOid && (
            <div style={{
              width: activeOid === finalOid ? 18 : 7,
              height: 7,
              borderRadius: 4,
              background: activeOid === finalOid ? C.gr : C.b2,
              transition: 'all .25s'
            }} />
          )}
        </div>
      )}

      {/* Breadcrumb */}
      {ct && (
        <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", marginBottom: 12, letterSpacing: 0.3, flexWrap: 'wrap', display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ marginRight: 4 }}>PATH:</span>
          {ct.nodes.map((nid, i) => {
            const node = nodeMap[nid]
            if (!node) return null
            const nextNid = ct.nodes[i + 1]
            const chosenBranch = nextNid
              ? node.branches.find(b => b.target === nextNid)
              : node.branches.find(b => b.target === ct.outcomeId)
            return (
              <span key={nid} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {i > 0 && <span style={{ color: C.bl }}>→</span>}
                <span style={{ color: C.t2 }}>Q{i + 1}</span>
                {chosenBranch && <span style={{ color: C.am, fontWeight: 700 }}> {chosenBranch.label}</span>}
              </span>
            )
          })}
        </div>
      )}

      {/* ── Vertical flowchart ─────────────────────────────────────────────── */}
      <div>
        {mainPath.map((nodeId, i) => {
          const layout = getLayout(nodeId, i)
          if (!layout) return null
          const { node, isLast, continueBranch, primaryBranch, exitBranches } = layout
          const onPath = !activeSet || activeSet.has(nodeId)
          const nodeActive = activeSet && activeSet.has(nodeId)
          const nodeDimmed = activeSet && !activeSet.has(nodeId)

          return (
            <div key={nodeId}>
              {/* Step label */}
              <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1.5, fontWeight: 700, marginBottom: 5 }}>
                STEP {i + 1}
              </div>

              {/* Row: question node + NO outcomes */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflow: 'visible' }}>

                {/* Question node */}
                <div style={{
                  background: nodeActive ? `${C.bl}10` : C.s2,
                  border: `1px solid ${nodeActive ? C.bl : C.bl + '35'}`,
                  borderRadius: 8,
                  padding: '10px 14px',
                  opacity: nodeDimmed ? 0.35 : 1,
                  transition: 'all .2s',
                  flexShrink: 0,
                  width: 'min(195px, 40vw)',
                  minWidth: 110
                }}>
                  <div style={{ fontSize: 13, color: C.t1, lineHeight: 1.5 }}>{node.label}</div>
                </div>

                {/* Exit branches → right */}
                {exitBranches.map((branch) => {
                  const outcome = outcomeMap[branch.target]
                  if (!outcome) return null
                  const highlighted = activeOid === branch.target
                  const isDimmed = !!activeOid && activeOid !== branch.target
                  return (
                    <div key={branch.target} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      {/* Connector label + line */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 6px', flexShrink: 0 }}>
                        <div style={{ fontSize: 9, color: C.rd, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1, marginBottom: 2, whiteSpace: 'nowrap' }}>
                          {branch.label.toUpperCase()}
                        </div>
                        <div style={{ width: 24, height: 1, background: `${C.rd}60` }} />
                      </div>
                      <OutcomeBox outcome={outcome} highlighted={highlighted} dimmed={isDimmed && !highlighted} />
                    </div>
                  )
                })}
              </div>

              {/* YES ↓ connector (to next node or final outcome) */}
              {(() => {
                const cb = continueBranch || (isLast ? primaryBranch : null)
                if (!cb) return null
                return (
                  <div style={{ paddingLeft: 20, margin: '3px 0' }}>
                    <div style={{ fontSize: 9, color: C.gr, fontFamily: "'Space Mono',mono", fontWeight: 700, letterSpacing: 1, marginBottom: 2 }}>
                      {cb.label.toUpperCase()} ↓
                    </div>
                    <div style={{ width: 1, height: 14, background: `${C.gr}60`, marginLeft: 4 }} />
                  </div>
                )
              })()}
            </div>
          )
        })}

        {/* Final YES outcome at bottom */}
        {lastLayout?.primaryBranch && (() => {
          const outcome = outcomeMap[lastLayout.primaryBranch.target]
          if (!outcome) return null
          const highlighted = activeOid === lastLayout.primaryBranch.target
          const isDimmed = !!activeOid && activeOid !== lastLayout.primaryBranch.target
          return (
            <OutcomeBox
              outcome={outcome}
              highlighted={highlighted}
              dimmed={isDimmed && !highlighted}
              isBottom
            />
          )
        })()}
      </div>

      {/* ── Trace buttons ──────────────────────────────────────────────────── */}
      {traces.length > 0 && (
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.b2}` }}>
          <div style={{ fontSize: 9, color: C.t3, fontFamily: "'Space Mono',mono", letterSpacing: 1.5, marginBottom: 8, fontWeight: 700 }}>
            TRACE A PATH
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            {traces.map((trace, i) => (
              <button
                key={i}
                onClick={() => setActiveTrace(activeTrace === i ? null : i)}
                style={{
                  padding: '5px 11px',
                  borderRadius: 6,
                  border: `1px solid ${activeTrace === i ? C.am + '70' : C.b2}`,
                  background: activeTrace === i ? `${C.am}12` : 'transparent',
                  color: activeTrace === i ? C.am : C.t3,
                  fontSize: 10,
                  cursor: 'pointer',
                  fontFamily: "'Space Mono',mono",
                  letterSpacing: 0.5,
                  transition: 'all .15s',
                  whiteSpace: 'nowrap'
                }}
              >
                {trace.label}
              </button>
            ))}
            {activeTrace !== null && (
              <button
                onClick={() => setActiveTrace(null)}
                style={{ padding: '5px 10px', borderRadius: 6, border: `1px solid ${C.b2}`, background: 'transparent', color: C.t3, fontSize: 10, cursor: 'pointer', fontFamily: "'Space Mono',mono" }}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
