// Keys are read from environment variables — never hardcoded.
// In development: create a .env file (copy .env.example and fill in your values).
// In Vercel: add these as Environment Variables in Project Settings → Environment Variables.
const SB = import.meta.env.VITE_SUPABASE_URL
const SK = import.meta.env.VITE_SUPABASE_ANON_KEY

const sbPost = async (path, body, token) => {
  try {
    const r = await fetch(`${SB}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SK,
        ...(token ? { "Authorization": `Bearer ${token}` } : {})
      },
      body: JSON.stringify(body)
    })
    return r.json()
  } catch (e) { return { error: { message: "Network error" } } }
}

const sbGet = async (path, token) => {
  try {
    const r = await fetch(`${SB}${path}`, {
      headers: { "apikey": SK, "Authorization": `Bearer ${token}` }
    })
    return r.json()
  } catch (e) { return null }
}

export const sbUpsert = async (table, data, token) => {
  try {
    await fetch(`${SB}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SK,
        "Authorization": `Bearer ${token}`,
        "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify(data)
    })
  } catch (e) {}
}

export const signUp = (b) => sbPost("/auth/v1/signup", b)
export const signIn = (b) => sbPost("/auth/v1/token?grant_type=password", b)
export { sbGet }
