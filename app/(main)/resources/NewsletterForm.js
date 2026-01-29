'use client'

import { useRef } from 'react'
import { useFormSubmit } from '@/lib/useFormSubmit'
import styles from './page.module.css'

export default function NewsletterForm() {
  const formRef = useRef(null)
  const { status, error, submit } = useFormSubmit()

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const success = await submit({
      formType: 'newsletter',
      email: fd.get('email'),
    })
    if (success) formRef.current?.reset()
  }

  if (status === 'success') {
    return (
      <div className={styles.newsletterCard}>
        <h2>You're Subscribed</h2>
        <p>Thanks for subscribing. You will receive our next issue in your inbox.</p>
      </div>
    )
  }

  return (
    <div className={styles.newsletterCard}>
      <h2>Get Insights Delivered</h2>
      <p>Practical marketing strategies for agency principals. No spam. Unsubscribe anytime.</p>
      <form className={styles.newsletterForm} onSubmit={handleSubmit} ref={formRef}>
        <input type="email" name="email" placeholder="Your email address" required />
        {error && <p style={{ color: '#dc2626', fontSize: '14px', margin: '0' }}>{error}</p>}
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}
