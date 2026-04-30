import React from "react";
import ChatInterface from "../components/ChatInterface";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section id="hero" className={styles.section}>
        <div className={styles.hero}>
          <h1 className={`${styles.heroTitle} text-gradient`}>
            Your Voice,<br />Your Power
          </h1>
          <p className={styles.heroSubtitle}>
            Welcome to the ultimate guide for first-time voters in India. 
            Everything you need to know, all in one place.
          </p>
        </div>
      </section>

      {/* Why Vote Section */}
      <section id="why-vote" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Why It Matters</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px' }}>
          Every single vote shapes the future of our democracy. Here is why you should step up.
        </p>
        
        <div className={styles.whyVoteGrid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🗳️</div>
            <h3 className={styles.cardTitle}>Shape Policies</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Elect leaders who align with your vision for the future of education, healthcare, and infrastructure.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>✊</div>
            <h3 className={styles.cardTitle}>It's Your Right</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Millions fought for the right to vote. Exercising it honors that legacy and strengthens democracy.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🔥</div>
            <h3 className={styles.cardTitle}>Demand Accountability</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Voting is the most powerful tool to hold representatives accountable for their actions.</p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Key Dates</h2>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} glass-panel`}>
            <div className={styles.dateBadge}>Jan 1st</div>
            <div>
              <h3>Qualifying Date</h3>
              <p style={{ color: 'var(--text-secondary)' }}>You must be 18 years old on or before this date to register for the upcoming year's electoral roll.</p>
            </div>
          </div>
          <div className={`${styles.timelineItem} glass-panel`}>
            <div className={styles.dateBadge}>April - May</div>
            <div>
              <h3>General Elections</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Lok Sabha elections are typically held during these months every 5 years in multiple phases.</p>
            </div>
          </div>
          <div className={`${styles.timelineItem} glass-panel`}>
            <div className={styles.dateBadge}>Continuous</div>
            <div>
              <h3>Voter Registration</h3>
              <p style={{ color: 'var(--text-secondary)' }}>You can apply for your Voter ID online anytime through the Voter's Service Portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Assistant Section */}
      <section id="assistant" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
          Election Assistant
        </h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1rem' }}>
          Ask any question about registering to vote, finding your booth, or the EVM process.
        </p>
        <div className={styles.chatContainerWrapper}>
          <ChatInterface />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in Touch</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
          Need more help or have feedback about this platform?
        </p>
        <form className={`${styles.contactForm} glass-panel`} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
            <input type="text" id="name" className={styles.input} placeholder="Your name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="Your email address" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
            <textarea id="message" rows={4} className={styles.input} placeholder="How can we help?"></textarea>
          </div>
          <button type="button" className={styles.submitBtn}>Send Message</button>
        </form>
      </section>
    </main>
  );
}
