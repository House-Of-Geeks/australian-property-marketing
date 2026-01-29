'use client'

import { useRef } from 'react'
import { useFormSubmit } from '@/lib/useFormSubmit'
import styles from './page.module.css'

export default function ContactForm() {
  const formRef = useRef(null)
  const { status, error, submit } = useFormSubmit()

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const success = await submit({
      formType: 'contact',
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      agency: fd.get('agency'),
      subject: fd.get('subject'),
      message: fd.get('message'),
    })
    if (success) formRef.current?.reset()
  }

  if (status === 'success') {
    return (
      <div className={styles.formWrap}>
        <h2>Message Sent</h2>
        <p>Thanks for reaching out. We will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className={styles.formWrap}>
      <h2>Send Us a Message</h2>
      <p>Fill out the form below and we will get back to you within 24 hours.</p>
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
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="agency">Agency Name</label>
            <input type="text" id="agency" name="agency" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">What can we help with?</label>
          <select id="subject" name="subject" required>
            <option value="">Select...</option>
            <option value="discovery">Discovery Call</option>
            <option value="retainer">Full Service Retainer</option>
            <option value="creative">Creative Services</option>
            <option value="other">General Enquiry</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        {error && <p className={styles.error} style={{ color: '#dc2626', marginBottom: '1rem' }}>{error}</p>}
        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
          {status !== 'loading' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
        </button>
      </form>
    </div>
  )
}
