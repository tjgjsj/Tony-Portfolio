"use client";

import styles from "./Timeline.module.css";

const experiences = [
  {
    period: "Jun 2024 — Present",
    title: "AWS Solutions Architect",
    company: "Freelance | Self-Employed",
    location: "United States",
    description:
      "Certified AWS Solutions Architect designing, deploying, and managing scalable and secure applications on the AWS platform. Expertise in cloud architecture design, cost optimization, security, and operational efficiency.",
    tags: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
    accent: "cyan",
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Territory Manager I",
    company: "Natera",
    location: "Raleigh, NC",
    description:
      "Led customer engagement for oncology division—serving medical professionals, patients, and cross-functional teams. Managed accounts, resolved escalated issues, and ensured rapid turnaround on clinical results.",
    tags: ["Healthcare", "Account Management", "Oncology", "Customer Relations"],
    accent: "purple",
  },
  {
    period: "Oct 2022 — Feb 2025",
    title: "Salesforce Certified Administrator",
    company: "Talent Stacker",
    location: "United States",
    description:
      "Led client sessions, gathered requirements, configured data integrations and automations. Managed sprint reviews, documented training materials, and implemented security configurations across the Salesforce platform.",
    tags: ["Salesforce", "Agile", "Automations", "Security"],
    accent: "cyan",
  },
  {
    period: "May 2022 — Sep 2022",
    title: "Salesforce Certified Administrator",
    company: "Armavel, LLC",
    location: "Tacoma, WA",
    description:
      "Supported the Department of Veterans Affairs during their Salesforce ecosystem transition. Administered duties for an organization of 300,000+ employees in healthcare, assisting VA nurses with training and navigation.",
    tags: ["VA Healthcare", "EHR", "Training", "Salesforce"],
    accent: "purple",
  },
  {
    period: "Nov 2020 — Apr 2022",
    title: "Quality Assurance Specialist II",
    company: "York County Emergency Services",
    location: "York, PA",
    description:
      "Reviewed Regional 911 computer systems and audio recordings for quality assurance. Subject matter expert in IAED Medical and Fire Priority Dispatch protocols, providing leadership and guidance to all telecommunicators.",
    tags: ["911 Systems", "Quality Assurance", "IAED Protocols", "Leadership"],
    accent: "cyan",
  },
  {
    period: "Aug 1992 — Jul 2017",
    title: "Firefighter / EMT / Rescue Tech / Hazmat Tech",
    company: "Baltimore City Fire Department",
    location: "Baltimore, MD",
    description:
      "25 years of distinguished service protecting the citizens of Baltimore. Responded to fires, car crashes, chemical spills, water rescues, and building emergencies. Promoted fire safety and trained with sophisticated equipment.",
    tags: ["Emergency Response", "Hazmat", "Rescue", "Fire Safety"],
    accent: "gradient",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className={`section ${styles.timeline}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">
            A Path of <span className="gradient-text">Purpose</span> &amp; Growth
          </h2>
          <p className="section-subtitle">
            From the fire station to the cloud—every role has been driven by a
            commitment to service, continuous learning, and making an impact.
          </p>
        </div>

        <div className={styles.track}>
          <div className={styles.line} />
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.dot}>
                <span
                  className={styles.dotInner}
                  data-accent={exp.accent}
                />
              </div>
              <div className={`glass-card ${styles.card}`}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.title}</h3>
                <span className={styles.company}>
                  {exp.company} · {exp.location}
                </span>
                <p className={styles.desc}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag} data-accent={exp.accent}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
