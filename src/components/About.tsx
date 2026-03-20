"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              From <span className="gradient-text">First Responder</span> to
              Cloud Architect.
            </h2>
            <p className={styles.bio}>
              After a distinguished 25-year career protecting the citizens of
              Baltimore as a firefighter and EMT, I transitioned into the world
              of technology—driven by the same passion for service and
              problem-solving that defined my time in emergency services.
            </p>
            <p className={styles.bio}>
              Today, I architect scalable cloud solutions on AWS and administer
              Salesforce ecosystems for organizations ranging from the
              Department of Veterans Affairs to healthcare enterprises. My
              unique background brings a rare combination of calm-under-pressure
              leadership, meticulous attention to detail, and a relentless drive
              to learn.
            </p>
            <p className={styles.bio}>
              I&apos;m a lifelong learner with Trailhead Ranger status—237+ badges,
              115,700+ points, and counting. When I&apos;m not deep-diving into cloud
              architecture or Salesforce automations, you&apos;ll find me cycling with
              my family, exploring new places, and engaging with the community.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.cardGrid}>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.cardIcon}>☁️</div>
                <h3 className={styles.cardTitle}>Cloud Architecture</h3>
                <p className={styles.cardDesc}>
                  Designing scalable, secure, and cost-optimized AWS solutions
                </p>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.cardIcon}>⚡</div>
                <h3 className={styles.cardTitle}>Salesforce Admin</h3>
                <p className={styles.cardDesc}>
                  Flows, automations, security configurations & user management
                </p>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.cardIcon}>🔥</div>
                <h3 className={styles.cardTitle}>25 Years BCFD</h3>
                <p className={styles.cardDesc}>
                  Leadership, crisis management & operational excellence
                </p>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Quality Assurance</h3>
                <p className={styles.cardDesc}>
                  911 systems, IAED protocols & emergency dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
