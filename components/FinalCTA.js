'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.finalCta} ref={sectionRef}>
      <div className={styles.bg}><div className={styles.pattern}></div></div>
      <div className={`${styles.content} container ${isVisible ? styles.visible : ''}`}>
        <p className={styles.lead}>Every month you wait is another month of leads leaking out of your pipeline.</p>
        <h2 className={styles.headline}>
          Book your audit.<br/>
          <span className={styles.headlineAccent}>Find the leaks. Fix them.</span>
        </h2>
        <Link href="/audit" className={styles.button}>
          Book Your Profitability Audit
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
        <div className={styles.details}>
          <span className={styles.detail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            $5,000 + GST
          </span>
          <span className={styles.detail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            14 days delivery
          </span>
          <span className={styles.detail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            Credited on retainer
          </span>
        </div>
      </div>
    </section>
  )
}
