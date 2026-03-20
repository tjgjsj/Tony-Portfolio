import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.logoMark}>AJ</span>
            <span className={styles.logoDot} />
          </span>
          <p className={styles.tagline}>
            Cloud Architect &amp; Salesforce Professional
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className={styles.built}>
            Built with <span className={styles.heart}>♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
