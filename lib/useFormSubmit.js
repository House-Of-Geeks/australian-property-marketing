'use client'

import { useState } from 'react'

export function useFormSubmit() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState(null)

  async function submit(data) {
    setStatus('loading')
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Something went wrong')
      setStatus('success')
      return true
    } catch (err) {
      setError(err.message)
      setStatus('error')
      return false
    }
  }

  return { status, error, submit }
}
