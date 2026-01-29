import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Services | Australian Property Marketing',
  description: 'Marketing services for independent real estate agencies. Lead generation, conversion systems, and creative production.',
}

const services = [
  {
    title: 'Profitability Audit',
    price: '$5,000',
    description: 'Before we work together, we show you exactly where your marketing money is going. And where it is leaking.',
    features: ['Marketing spend analysis', 'Lead source audit', 'Conversion rate breakdown', 'Profit leak identification', '90-day action plan', 'Strategy session'],
    href: '/audit',
    cta: 'Book Your Audit'
  },
  {
    title: 'Full Service Retainer',
    price: 'From $10,000/mo',
    description: 'We take full ownership of your agency\'s marketing. Lead generation. Conversion optimisation. Creative production.',
    features: ['Lead generation campaigns', 'Conversion systems', 'Creative production', 'Monthly reporting', 'Dedicated strategist', 'Quarterly reviews'],
    href: '/services/retainer',
    cta: 'Learn More'
  },
  {
    title: 'Creative Services',
    price: 'Project-based',
    description: 'Professional creative for real estate. Produced in-house. Delivered fast.',
    features: ['Agent photography', 'Property photography', 'Video production', 'Drone and aerial', 'Content creation', 'Brand design'],
    href: '/services/creative',
    cta: 'Get a Quote'
  }
]

export default function ServicesPage() {
  return (
    <div className={styles.services}>
      <section className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <span className={styles.label}>Our Services</span>
          <h1 className={styles.headline}>Marketing That Generates Listings</h1>
          <p className={styles.subhead}>Everything you need to attract, convert, and win more listings. All measured. All accountable.</p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className="container">
          <div className={styles.serviceCards}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <h2>{service.title}</h2>
                  <span className={styles.price}>{service.price}</span>
                </div>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className={styles.cardCta}>{service.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span className={styles.processNum}>01</span>
              <h3>Outcomes over activity</h3>
              <p>Listings won. Revenue generated. Return on investment. These are the numbers that matter.</p>
            </div>
            <div className={styles.processItem}>
              <span className={styles.processNum}>02</span>
              <h3>Transparency</h3>
              <p>You will always know where your money is going. No hidden fees. No inflated reports. No surprises.</p>
            </div>
            <div className={styles.processItem}>
              <span className={styles.processNum}>03</span>
              <h3>Partnership</h3>
              <p>We work with you, not for you. Your success is our success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
