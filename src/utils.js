import { SUBJECTS, EXAM_DATES } from './constants'

// ── localStorage helpers ──────────────────────────────────────────
export const ls = (k, v) => {
  if (v !== undefined) { localStorage.setItem(k, JSON.stringify(v)); return v }
  try { return JSON.parse(localStorage.getItem(k)) } catch { return null }
}

// ── Exam countdown ────────────────────────────────────────────────
export const daysTo = (attempt) =>
  Math.max(0, Math.ceil(((EXAM_DATES[attempt] || new Date("2027-01-11")) - new Date()) / 86400000))

// ── Readiness scoring (FIXED) ─────────────────────────────────────
// Old logic: test scores decayed after 30 days, causing trustworthy
// scores to drop even when the student was still actively revising.
// Fix: decay only kicks in after 60 days, and is capped at 30% loss
// (not 50%). Status weight is also raised so studying without testing
// still shows meaningful progress.
export const chReady = (status, testResult, markedAt, lastTestedAt) => {
  // Base score from revision status (max 55 — enough to show progress without testing)
  const base = status === 3 ? 55 : status === 2 ? 40 : status === 1 ? 18 : 0

  // Test score contribution (max 45)
  let testScore = 0
  if (testResult) {
    const raw = (testResult.score / testResult.total) * 45
    // Decay starts at 60 days (not 30), capped at 30% reduction
    const daysSinceTest = lastTestedAt
      ? Math.floor((Date.now() - new Date(lastTestedAt)) / 86400000)
      : 0
    const decayDays = Math.max(0, daysSinceTest - 60)
    const decay = Math.max(0.7, 1 - (decayDays / 200))
    testScore = raw * decay
  }

  return Math.min(100, Math.round(base + testScore))
}

export const subReady = (subId, cd) => {
  const sub = SUBJECTS.find(s => s.id === subId)
  if (!sub || !sub.chapters.length) return 0
  const scores = sub.chapters.map(ch => {
    const d = cd?.[subId]?.[ch.id]
    return chReady(d?.status || 0, d?.lastTest, d?.markedAt, d?.lastTestedAt)
  })
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

export const covPct = (subId, cd) => {
  const sub = SUBJECTS.find(s => s.id === subId)
  if (!sub || !sub.chapters.length) return 0
  return Math.round(
    sub.chapters.filter(ch => (cd?.[subId]?.[ch.id]?.status || 0) >= 2).length
    / sub.chapters.length * 100
  )
}
