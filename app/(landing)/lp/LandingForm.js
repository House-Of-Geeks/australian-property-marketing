'use client'

import { useRef } from 'react'
import { useFormSubmit } from '@/lib/useFormSubmit'
import styles from './landing.module.css'

export default function LandingForm({ location, note }) {
  const formRef = useRef(null)
  const { status, error, submit } = useFormSubmit()

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const success = await submit({
      formType: 'landing',
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      agency: fd.get('agency'),
      agents: fd.get('agents'),
      spend: fd.get('spend'),
      location: location || '',
    })
    if (success) formRef.current?.reset()
  }

  if (status === 'success') {
    return (
      <div className={styles.formContent}>
        <h2>Request Received</h2>
        <p>Thanks for your interest. We will be in touch within 24 hours to schedule your discovery call.</p>
      </div>
    )
  }

  return (
    <div className={styles.formContent}>
      <h2>Book Your Discovery Call</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formRow}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className={styles.formRow}>
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="text" name="agency" placeholder="Agency Name" required />
        </div>
        <div className={styles.formRow}>
          <select name="agents" required>
            <option value="">Number of Agents</option>
            <option value="1-10">1-10</option>
            <option value="11-20">11-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </select>
          <select name="spend" required>
            <option value="">Monthly Marketing Spend</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value="20k+">$20,000+</option>
          </select>
        </div>
        {error && <p style={{ color: '#dc2626', marginBottom: '0.5rem', fontSize: '14px' }}>{error}</p>}
        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Book Your Discovery Call'}
        </button>
      </form>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  )
}
