"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Decorative orbs */}
          <div
            className="glow-orb"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
              top: "-100px",
              right: "-100px",
            }}
          />
          <div
            className="glow-orb"
            style={{
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(124,77,255,0.04) 0%, transparent 70%)",
              bottom: "-50px",
              left: "-50px",
            }}
          />

          <div className={styles.content}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Remarkable</span>
            </h2>
            <p className={styles.desc}>
              Whether you need cloud architecture guidance, Salesforce
              administration, or just want to connect—I&apos;d love to hear from
              you. Let&apos;s discuss how we can work together.
            </p>

            <div className={styles.methods}>
              <a
                href="mailto:hello@tjcloud.dev"
                className={`glass-card ${styles.methodCard}`}
              >
                <div className={styles.methodIcon}>✉️</div>
                <div>
                  <h3 className={styles.methodTitle}>Email</h3>
                  <span className={styles.methodValue}>Get in touch via email</span>
                </div>
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${styles.methodCard}`}
              >
                <div className={styles.methodIcon}>💼</div>
                <div>
                  <h3 className={styles.methodTitle}>LinkedIn</h3>
                  <span className={styles.methodValue}>Connect professionally</span>
                </div>
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://trailblazer.me/"
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${styles.methodCard}`}
              >
                <div className={styles.methodIcon}>🏔️</div>
                <div>
                  <h3 className={styles.methodTitle}>Trailblazer</h3>
                  <span className={styles.methodValue}>
                    See my Salesforce journey
                  </span>
                </div>
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
