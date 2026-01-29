'use client'

import { useRef } from 'react'
import { useFormSubmit } from '@/lib/useFormSubmit'
import styles from './page.module.css'

export default function AuditForm() {
  const formRef = useRef(null)
  const { status, error, submit } = useFormSubmit()

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const success = await submit({
      formType: 'audit',
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      agency: fd.get('agency'),
      agents: fd.get('agents'),
      spend: fd.get('spend'),
    })
    if (success) formRef.current?.reset()
  }

  if (status === 'success') {
    return (
      <div className={styles.bookingCard}>
        <h2>Request Received</h2>
        <p>Thanks for your interest. We will be in touch within 24 hours to schedule your discovery call.</p>
      </div>
    )
  }

  return (
    <div className={styles.bookingCard}>
      <h2>Book Your Discovery Call</h2>
      <p>Fill out the form below to schedule your discovery call.</p>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="agency">Agency Name</label>
            <input type="text" id="agency" name="agency" required />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="agents">Number of Agents</label>
            <select id="agents" name="agents" required>
              <option value="">Select...</option>
              <option value="1-10">1-10</option>
              <option value="11-20">11-20</option>
              <option value="21-50">21-50</option>
              <option value="50+">50+</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="spend">Monthly Marketing Spend</label>
            <select id="spend" name="spend" required>
              <option value="">Select...</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-20k">$10,000 - $20,000</option>
              <option value="20k+">$20,000+</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: '#dc2626', marginBottom: '1rem' }}>{error}</p>}
        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Request Discovery Call'}
          {status !== 'loading' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
        </button>
      </form>
    </div>
  )
}
