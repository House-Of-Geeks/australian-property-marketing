'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useFormSubmit } from '@/lib/useFormSubmit'
import styles from './postcode-takeover.module.css'

/* ===== Scroll reveal hook ===== */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

/* ===== Check icon ===== */
function Check() {
  return (
    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/* ===== X icon ===== */
function XMark() {
  return (
    <svg className={styles.xIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

/* ===== Arrow icon for CTAs ===== */
function Arrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

/* ===== Shield icon ===== */
function Shield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

/* ===== FAQ Data ===== */
const faqs = [
  {
    q: 'Why only $99? What is the catch?',
    a: 'No catch. This is a low-ticket offer designed to help agents get started with local area marketing properly. We make our real money when you come back for full campaign management or lead generation services. Consider this a taste of how we work.',
  },
  {
    q: 'Do I need any technical skills?',
    a: 'If you can post to Instagram, you can run these ads. We set everything up. You just need to check in occasionally and swap creative when we tell you to.',
  },
  {
    q: 'How is this different from boosting posts?',
    a: 'Boosted posts are lazy targeting and wasted money. This is proper campaign architecture with custom audiences, optimised placements, and strategic objectives. Same budget, completely different results.',
  },
  {
    q: 'Will this get me listings?',
    a: 'Not directly. This builds recognition and trust over time. When someone in your local area decides to sell, you will be the familiar face they think of first. That is the game. If you want direct listing leads, we offer that too, but it is a different service at a different price.',
  },
  {
    q: 'What if I already run Facebook ads?',
    a: 'Perfect. We will audit what you have and either improve it or build fresh. Either way, you will end up with a properly structured local awareness system.',
  },
  {
    q: 'Can I target multiple suburbs?',
    a: 'You can, but we recommend dominating one first. Spread too thin and you become background noise everywhere instead of the obvious choice somewhere. Start with your primary local area. Expand later.',
  },
  {
    q: 'What results should I expect?',
    a: 'Within 30 days, you should see your ads reaching 70\u201380% of homeowners in your target suburb at least once per week. Within 90 days, you will have shown up in their feeds dozens of times. That is when the \u201COh, I see you everywhere\u201D comments start at open homes.',
  },
]

/* ===== Deliverables Data ===== */
const deliverables = [
  {
    title: 'Custom Audience Targeting',
    desc: 'We set up hyper-local targeting for your specific postcode or suburb. Homeowners only. No renters. No tyre-kickers.',
  },
  {
    title: 'Ad Creative Templates',
    desc: 'Three scroll-stopping ad templates designed specifically for local area marketing. Not generic \u201Creal estate\u201D ads. These are built to establish local authority.',
  },
  {
    title: 'Campaign Architecture',
    desc: 'The complete campaign structure in your Meta Ads Manager, ready to run. Objectives, placements, budgets \u2014 all configured correctly.',
  },
  {
    title: 'The $10/Day Playbook',
    desc: 'A simple guide showing you exactly how to keep this running. What metrics matter. When to refresh creative. How to scale when you are ready.',
  },
  {
    title: '30-Minute Setup Call',
    desc: 'We walk through everything together. You will understand exactly what is running and why. No black-box nonsense.',
  },
]

/* ===== Main Component ===== */
export default function PostcodeTakeoverClient() {
  const [openFaq, setOpenFaq] = useState(null)

  // Section reveal refs
  const [problemRef, problemVisible] = useReveal(0.12)
  const [solutionRef, solutionVisible] = useReveal(0.12)
  const [deliverablesRef, deliverablesVisible] = useReveal(0.08)
  const [audienceRef, audienceVisible] = useReveal(0.1)
  const [pricingRef, pricingVisible] = useReveal(0.15)
  const [faqRef, faqVisible] = useReveal(0.08)
  const [guaranteeRef, guaranteeVisible] = useReveal(0.2)
  const [finalRef, finalVisible] = useReveal(0.15)
  const [formRef, formVisible] = useReveal(0.1)

  const scrollToOrder = useCallback((e) => {
    e.preventDefault()
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <Image src="/logo.png" alt="Australian Property Marketing" width={160} height={40} />
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroPin} />
        <div className={styles.heroPin} />
        <div className={styles.heroPin} />
        <div className={styles.heroPin} />
        <div className={styles.heroPin} />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Local area marketing
          </div>

          <h1 className={styles.heroHeadline}>
            Own Your Local Area<br />
            for <span className={styles.heroAccent}>$10 a Day</span>
          </h1>

          <p className={styles.heroSub}>
            We build your Instagram ad system. You become the agent everyone in your suburb recognises.
          </p>

          <a href="#order" onClick={scrollToOrder} className={styles.ctaBtn}>
            Get Your Postcode Takeover — $99
            <Arrow />
          </a>

          <p className={styles.heroMicro}>Setup completed within 5 business days</p>
        </div>
      </section>

      {/* Problem */}
      <section className={styles.problem} ref={problemRef}>
        <div className={`${styles.problemContent} ${styles.stagger}`}>
          <div className={`${styles.reveal} ${problemVisible ? styles.visible : ''}`}>
            <span className={styles.sectionLabel}>The problem</span>
          </div>
          <div className={`${styles.reveal} ${problemVisible ? styles.visible : ''}`}>
            <h2 className={styles.problemHeadline}>You&rsquo;re invisible in your own backyard.</h2>
          </div>
          <div className={`${styles.reveal} ${problemVisible ? styles.visible : ''} ${styles.problemBody}`}>
            <p>You door knock. You letterbox drop. You sponsor the local footy team.</p>
            <p>And when Mrs Henderson at number 42 finally decides to sell?</p>
            <p className={styles.problemCallout}>She calls the agent she saw on Instagram last week. Not you.</p>
            <p>The problem is not your skills. It is not your track record. It is not even your marketing budget.</p>
            <p><strong>The problem is that the agents who show up consistently in people&rsquo;s feeds become the &ldquo;default choice&rdquo; when selling time comes.</strong></p>
            <p>And right now, that is not you.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className={styles.solution} ref={solutionRef}>
        <div className={`${styles.solutionContent} ${styles.stagger}`}>
          <div className={`${styles.reveal} ${solutionVisible ? styles.visible : ''}`}>
            <span className={styles.sectionLabel}>The solution</span>
          </div>
          <div className={`${styles.reveal} ${solutionVisible ? styles.visible : ''}`}>
            <h2 className={styles.solutionHeadline}>What if your face appeared in every homeowner&rsquo;s feed, every single day?</h2>
          </div>
          <div className={`${styles.reveal} ${solutionVisible ? styles.visible : ''} ${styles.solutionBody}`}>
            <p>Not in an annoying way. Not with desperate &ldquo;JUST LISTED&rdquo; spam.</p>
            <p>But as a familiar, trusted presence. The local expert. The agent who clearly knows this area.</p>
            <p><span className={styles.solutionEmphasis}>That is what a Postcode Takeover does.</span></p>
            <p>For roughly what you spend on coffee each week, you can systematically build recognition with every homeowner in your target suburb.</p>
            <p>No algorithm games. No hoping your posts get seen. Just consistent, targeted visibility to the people who actually matter: future sellers in your local area.</p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className={styles.whatYouGet} ref={deliverablesRef}>
        <div className={`${styles.whatYouGetInner} ${styles.stagger}`}>
          <div className={`${styles.reveal} ${deliverablesVisible ? styles.visible : ''}`}>
            <span className={styles.sectionLabel}>What you get</span>
            <h2 className={styles.whatYouGetHeadline}>Here is exactly what we build for you</h2>
          </div>

          {deliverables.map((item, i) => (
            <div
              key={i}
              className={`${styles.deliverable} ${styles.reveal} ${deliverablesVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className={styles.deliverableNumber}>{i + 1}</div>
              <div>
                <div className={styles.deliverableTitle}>{item.title}</div>
                <p className={styles.deliverableDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className={styles.audience} ref={audienceRef}>
        <div className={styles.audienceInner}>
          <div className={`${styles.reveal} ${audienceVisible ? styles.visible : ''}`} style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <span className={styles.sectionLabel}>Is this for you?</span>
          </div>

          <div className={`${styles.audienceColumns} ${styles.reveal} ${audienceVisible ? styles.visible : ''}`}>
            <div className={styles.audienceCol}>
              <h3>This is for you if:</h3>
              <ul className={styles.audienceList}>
                <li><Check /> You have a specific local area you want to dominate</li>
                <li><Check /> You are tired of inconsistent visibility</li>
                <li><Check /> You understand that marketing is a long game, not a lottery ticket</li>
                <li><Check /> You can commit $70 per week to building local recognition</li>
                <li><Check /> You want to do the ongoing work yourself (we just set it up right)</li>
              </ul>
            </div>

            <div className={styles.audienceCol}>
              <h3>This is NOT for you if:</h3>
              <ul className={styles.audienceList}>
                <li><XMark /> You want instant leads tomorrow</li>
                <li><XMark /> You are not willing to show your face in ads</li>
                <li><XMark /> You expect us to manage everything ongoing</li>
                <li><XMark /> You are chasing every suburb instead of owning one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing} ref={pricingRef}>
        <div className={`${styles.pricingInner} ${styles.reveal} ${pricingVisible ? styles.visible : ''}`}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingLabel}>One-time setup</div>
            <div className={styles.pricingAmount}>$99</div>
            <div className={styles.pricingPeriod}>One-time payment. No subscriptions.</div>

            <ul className={styles.pricingPerks}>
              <li><Check /> Custom audience targeting</li>
              <li><Check /> 3 ad creative templates</li>
              <li><Check /> Full campaign architecture</li>
              <li><Check /> The $10/day playbook</li>
              <li><Check /> 30-minute setup call</li>
            </ul>

            <div className={styles.pricingDivider} />

            <p className={styles.pricingNote}>
              The only ongoing cost is your ad spend: $10 a day ($70 a week) paid directly to Meta. That money goes to Facebook/Instagram, not to us.
            </p>

            <a href="#order" onClick={scrollToOrder} className={styles.ctaBtn}>
              Get Your Postcode Takeover — $99
              <Arrow />
            </a>
            <p className={styles.pricingMicro}>Setup completed within 5 business days</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} ref={faqRef}>
        <div className={styles.faqInner}>
          <div className={`${styles.reveal} ${faqVisible ? styles.visible : ''}`}>
            <span className={styles.sectionLabel} style={{ display: 'block', textAlign: 'center' }}>FAQ</span>
            <h2 className={styles.faqHeadline}>Questions you probably have</h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''} ${styles.reveal} ${faqVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${0.08 + i * 0.06}s` }}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <div className={styles.faqAnswerInner}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className={styles.guarantee} ref={guaranteeRef}>
        <div className={`${styles.guaranteeInner} ${styles.reveal} ${guaranteeVisible ? styles.visible : ''}`}>
          <div className={styles.guaranteeIcon}><Shield /></div>
          <h2 className={styles.guaranteeHeadline}>Not happy? We&rsquo;ll fix it or refund it.</h2>
          <p className={styles.guaranteeBody}>
            If we set up your campaign and you are genuinely not satisfied with the work, tell us within 14 days. We will either fix whatever is wrong or refund your $99. No arguments. We are betting that once you see a properly built local awareness campaign, you will never go back to random posting and hoping for the best.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta} ref={finalRef}>
        <div className={`${styles.finalCtaInner} ${styles.reveal} ${finalVisible ? styles.visible : ''}`}>
          <h2 className={styles.finalCtaHeadline}>Stop being the best-kept secret in your suburb.</h2>
          <p className={styles.finalCtaBody}>
            For less than your daily coffee, you can systematically become the recognised local agent in your area. <strong>$99 setup. $10/day ad spend. Your face in every homeowner&rsquo;s feed.</strong>
          </p>
          <a href="#order" onClick={scrollToOrder} className={styles.ctaBtn}>
            Get Your Postcode Takeover — $99
            <Arrow />
          </a>
          <p className={styles.finalCtaMicro}>Setup completed within 5 business days. 14-day satisfaction guarantee.</p>
        </div>
      </section>

      {/* Order Form */}
      <section className={styles.orderForm} id="order" ref={formRef}>
        <div className={`${styles.reveal} ${formVisible ? styles.visible : ''}`}>
          <OrderForm />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <Image src="/logo.png" alt="Australian Property Marketing" width={120} height={30} />
        <p className={styles.footerText}>Specialised marketing for Australian real estate agents</p>
        <p className={styles.footerText}>&copy; {new Date().getFullYear()} Australian Property Marketing. All rights reserved.</p>
      </footer>
    </div>
  )
}

/* ===== Order Form Component ===== */
function OrderForm() {
  const formRef = useRef(null)
  const { status, error, submit } = useFormSubmit()

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const success = await submit({
      formType: 'postcode-takeover',
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      suburb: fd.get('suburb'),
    })
    if (success) formRef.current?.reset()
  }

  if (status === 'success') {
    return (
      <div className={styles.orderFormInner}>
        <div className={styles.formSuccess}>
          <h3>You&rsquo;re In</h3>
          <p>We will be in touch within 24 hours with next steps and your setup call booking link.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.orderFormInner}>
      <h2 className={styles.orderFormHeadline}>Get Your Postcode Takeover</h2>
      <p className={styles.orderFormSub}>Fill in your details and we will get started.</p>

      <form onSubmit={handleSubmit} ref={formRef} className={styles.form}>
        <div className={styles.formRow}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className={styles.formRow}>
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="text" name="suburb" placeholder="Target Suburb / Postcode" required />
        </div>

        {error && <p className={styles.formError}>{error}</p>}

        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Get Your Postcode Takeover — $99'}
        </button>
      </form>

      <p className={styles.formNote}>Setup completed within 5 business days. 14-day satisfaction guarantee.</p>
    </div>
  )
}
