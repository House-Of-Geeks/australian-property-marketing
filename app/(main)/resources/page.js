import Link from 'next/link'
import NewsletterForm from './NewsletterForm'
import styles from './page.module.css'

export const metadata = {
  title: 'Resources | Australian Property Marketing',
  description: 'Insights and resources for independent real estate agency principals. Marketing strategies, conversion tips, and industry analysis.',
}

const articles = [
  {
    title: 'Why Your Marketing Agency Cannot Tell You How Many Listings They Generated',
    excerpt: 'Most agencies measure impressions, clicks, and leads. None of that pays your bills. Here is why the disconnect exists and what to do about it.',
    category: 'Strategy',
    date: 'January 2026'
  },
  {
    title: 'The Real Cost of a Lead in Australian Real Estate: 2026 Benchmarks',
    excerpt: 'Cost per lead has increased 131% in the last decade. We break down the numbers by channel, location, and agency size.',
    category: 'Data',
    date: 'January 2026'
  },
  {
    title: 'Three Follow-Up Blind Spots That Are Costing You Listings',
    excerpt: 'After auditing dozens of agencies, we keep finding the same three gaps in follow-up systems. Here is what they are and how to fix them.',
    category: 'Conversion',
    date: 'December 2025'
  },
  {
    title: 'Independent vs Franchise: Marketing Flexibility and What It Means for ROI',
    excerpt: 'Independents have more marketing freedom than franchises. Here is how to use that flexibility to win more listings.',
    category: 'Strategy',
    date: 'December 2025'
  },
  {
    title: 'How to Calculate Your True Cost Per Listing',
    excerpt: 'Cost per lead is meaningless without conversion data. Here is the formula we use to calculate actual cost per signed agency agreement.',
    category: 'Data',
    date: 'November 2025'
  },
  {
    title: 'The Appraisal-to-Listing Ratio: Why It Matters More Than Lead Volume',
    excerpt: 'You can double your listings without generating a single extra lead. Here is how to focus on conversion instead of volume.',
    category: 'Conversion',
    date: 'November 2025'
  }
]

export default function ResourcesPage() {
  return (
    <div className={styles.resources}>
      <section className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <span className={styles.label}>Resources</span>
          <h1 className={styles.headline}>Insights for Agency Principals</h1>
          <p className={styles.subhead}>Practical strategies for generating and converting more listings. No fluff. No generic advice.</p>
        </div>
      </section>

      <section className={styles.articles}>
        <div className="container">
          <div className={styles.articleGrid}>
            {articles.map((article, index) => (
              <article key={index} className={styles.article}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <span className={styles.readMore}>Read Article →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className="container">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
