'use client'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.gradient}></div>
        <div className={styles.pattern}></div>
      </div>

      <div className={`${styles.content} container`}>
        <div className={`${styles.badge} animate-fade-up`}>
          <span className={styles.badgeDot}></span>
          For independent agencies doing $2M+ in annual GCI
        </div>

        <h1 className={`${styles.headline} animate-fade-up animate-delay-1`}>
          Your Marketing Is Generating Leads.
          <span className={styles.headlineAccent}> Why Isn't It Generating Listings?</span>
        </h1>

        <p className={`${styles.subhead} lead animate-fade-up animate-delay-2`}>
          The average real estate agency converts 1.8% of their leads into listings.
          The other 98.2% disappear somewhere between the first enquiry and the appraisal.
          <strong> We find where they go. Then we fix it.</strong>
        </p>

        <div className={`${styles.actions} animate-fade-up animate-delay-3`}>
          <Link href="/audit" className={`${styles.cta} ${styles.ctaPrimary}`}>
            Book Your Profitability Audit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/results" className={`${styles.cta} ${styles.ctaSecondary}`}>
            See Client Results
          </Link>
        </div>

        <div className={`${styles.stats} animate-fade-up animate-delay-4`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>40%</span>
            <span className={styles.statLabel}>Avg. increase in appraisals</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>$5K</span>
            <span className={styles.statLabel}>Audit investment</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>14</span>
            <span className={styles.statLabel}>Days to delivery</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2"/>
          <circle className={styles.scrollDot} cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}
