"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChatInterface from "../components/ChatInterface";
import styles from "../styles/Home.module.css";
import { Vote, Users, ShieldCheck, Newspaper, HelpCircle, Activity } from "lucide-react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        if (data.news) setNews(data.news);
        setLoadingNews(false);
      })
      .catch(() => setLoadingNews(false));
  }, []);

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
        <div className={styles.illustrationWrapper}>
          <Image src="/illustrations/evm_illustration_1777549038393.png" alt="EVM Machine" width={600} height={600} className={styles.illustration} />
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Activity size={40} /> Live Election News
        </h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px' }}>
          Stay updated with the latest alerts and news regarding Indian elections fetched in real-time. Click to read the full source articles.
        </p>
        
        {loadingNews ? (
          <p style={{ marginTop: '2rem' }}>Loading latest news...</p>
        ) : (
          <div className={styles.newsGrid}>
            {news.map((item: any) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={`${styles.newsCard} glass-panel`}>
                <span className={styles.newsDate}>{item.pubDate}</span>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                {item.snippet && <p className={styles.newsSnippet}>{item.snippet}</p>}
                <span className={styles.newsPublisher}>Source: {item.publisher}</span>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Comprehensive Election Journey Section */}
      <section id="process" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>The Election Journey</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px' }}>
          Understanding the timeline and phases of the Indian election process, from registration to results.
        </p>

        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={`${styles.stepContent} glass-panel`}>
              <span className={styles.stepTimeline}>Continuous (Ends ~1 Month Before)</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Voter Registration</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Verify your name on the electoral roll. If not registered, submit Form 6 to the ECI online or via the Voter Helpline app.</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={`${styles.stepContent} glass-panel`}>
              <span className={styles.stepTimeline}>~3 Weeks Before Polling</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Nominations & Scrutiny</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Candidates file nominations. Use the 'Know Your Candidate' (KYC) app to review their affidavits and background.</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={`${styles.stepContent} glass-panel`}>
              <span className={styles.stepTimeline}>Ends 48 Hours Before Poll</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Campaigning Period</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Parties hold rallies. Campaigning officially ends 48 hours before voting day to ensure a peaceful "period of silence".</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={`${styles.stepContent} glass-panel`}>
              <span className={styles.stepTimeline}>Voting Day</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Polling Booth</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Check ID with 1st Official, get inked by 2nd, and verify via VVPAT after pressing the EVM button enabled by the 3rd Official.</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={`${styles.stepContent} glass-panel`}>
              <span className={styles.stepTimeline}>Post-Election</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Counting & Results</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>EVMs are kept in strongrooms under heavy security until counting day. Results are verified and declared by the ECI.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.illustrationWrapper}>
          <Image src="/illustrations/voter_id_illustration_1777549052984.png" alt="Voter ID" width={500} height={500} className={styles.illustration} />
        </div>
      </section>

      {/* Universal Quick Links Section */}
      <section id="quick-links" className={styles.section} style={{ minHeight: 'auto', padding: '4rem 2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Official Resources</h2>
        <div className={styles.quickLinksGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1000px' }}>
          <a href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass-panel`} style={{ textDecoration: 'none', textAlign: 'center', padding: '2rem 1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Election Commission</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Official announcements and updates.</p>
          </a>
          <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass-panel`} style={{ textDecoration: 'none', textAlign: 'center', padding: '2rem 1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Voter Services Portal</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Apply for Voter ID online.</p>
          </a>
          <a href="https://eci.gov.in/voter/voter/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass-panel`} style={{ textDecoration: 'none', textAlign: 'center', padding: '2rem 1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>General Instructions</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Rules and guidelines for voters.</p>
          </a>
        </div>
      </section>

      {/* Why Vote Section */}
      <section id="why-vote" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Why It Matters</h2>
        <div className={styles.whyVoteGrid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIconWrapper}><Vote size={48} strokeWidth={1.5} /></div>
            <h3 className={styles.cardTitle}>Shape Policies</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Elect leaders who align with your vision for the future of education, healthcare, and infrastructure.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIconWrapper}><Users size={48} strokeWidth={1.5} /></div>
            <h3 className={styles.cardTitle}>It's Your Right</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Millions fought for the right to vote. Exercising it honors that legacy and strengthens democracy.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIconWrapper}><ShieldCheck size={48} strokeWidth={1.5} /></div>
            <h3 className={styles.cardTitle}>Demand Accountability</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Voting is the most powerful tool to hold representatives accountable for their actions.</p>
          </div>
        </div>
        
        <div className={styles.illustrationWrapper}>
          <Image src="/illustrations/ballot_illustration_1777549068265.png" alt="Ballot Box" width={400} height={400} className={styles.illustration} />
        </div>
      </section>

      {/* Chat Assistant Section */}
      <section id="assistant" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
          <HelpCircle size={40} /> AI Election Assistant
        </h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1rem', maxWidth: '700px' }}>
          Powered by real AI, this assistant can answer <strong>any</strong> question you have about the Indian Election process, the constitution, and voting rules. Just ask!
        </p>
        <div className={styles.chatContainerWrapper}>
          <ChatInterface />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in Touch</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
          Need more help or have feedback about this platform?
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1000px' }}>
          {/* Contact Form */}
          <form 
            className={`${styles.contactForm} glass-panel`} 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              if (!name || !email || !message) return;
              
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, email, message })
                });
                if (res.ok) {
                  alert('Message sent successfully! Saved to GCP Firestore.');
                  (e.target as HTMLFormElement).reset();
                } else {
                  alert('Failed to send message.');
                }
              } catch (error) {
                alert('Error sending message.');
              }
            }}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
              <input type="text" id="name" name="name" className={styles.input} placeholder="Your name" required aria-label="Name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
              <input type="email" id="email" name="email" className={styles.input} placeholder="Your email address" required aria-label="Email" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
              <textarea id="message" name="message" rows={4} className={styles.input} placeholder="How can we help?" required aria-label="Message"></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} aria-label="Submit Contact Form">Send Message</button>
          </form>

          {/* Google Maps Embed */}
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Election Commission HQ</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nirvachan Sadan, Ashoka Road, New Delhi 110001</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2619717647225!2d77.2105151!3d28.6219154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd347ec05bd9%3A0xc4842a22216bbd9a!2sElection%20Commission%20of%20India!5e0!3m2!1sen!2sus!4v1714571987515!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 'var(--radius-md)', minHeight: '300px', flexGrow: 1 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Election Commission of India"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
