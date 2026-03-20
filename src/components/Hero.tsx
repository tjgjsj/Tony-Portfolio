"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative orbs */}
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
          top: "-200px",
          right: "-200px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(124,77,255,0.06) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-150px",
        }}
      />

      <div className={`container ${styles.content}`}>
        <div className={styles.tagline}>
          <span className={styles.statusDot} />
          <span>Available for Cloud & Salesforce Projects</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.line1}>Building</span>
          <span className={styles.line2}>
            <span className="gradient-text">Scalable</span> Cloud
          </span>
          <span className={styles.line3}>Solutions.</span>
        </h1>

        <p className={styles.subtitle}>
          AWS Solutions Architect & Salesforce Certified Administrator with 25+
          years of service-driven leadership. From protecting communities as a
          firefighter to architecting enterprise cloud solutions.
        </p>

        <div className={styles.actions}>
          <a
            href="#journey"
            className={styles.primaryBtn}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#journey")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Explore My Journey</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className={styles.secondaryBtn}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Years of Service</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>237+</span>
            <span className={styles.statLabel}>Trailhead Badges</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Certifications</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
