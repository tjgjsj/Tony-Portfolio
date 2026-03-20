"use client";

import styles from "./Certifications.module.css";

const certs = [
  {
    icon: "☁️",
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    description:
      "Validated expertise in designing distributed systems and deploying scalable, secure applications on AWS.",
    skills: ["EC2", "S3", "Lambda", "VPC", "IAM", "CloudFormation"],
  },
  {
    icon: "⚡",
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    description:
      "Proficient in Salesforce configuration, automation, security, and user management across enterprise environments.",
    skills: ["Flows", "Process Builder", "Security", "Reports", "Lightning"],
  },
  {
    icon: "🏔️",
    name: "Trailhead Ranger",
    issuer: "Salesforce Trailhead",
    description:
      "Earned Ranger status with 237+ badges, 115,700+ points, and multiple Superbadges including Health Cloud and Security Specialist.",
    skills: [
      "Health Cloud",
      "Business Admin",
      "Security Specialist",
      "237+ Badges",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className={`section ${styles.certs}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">
            Credentials That <span className="gradient-text">Validate</span>{" "}
            Expertise
          </h2>
          <p className="section-subtitle">
            Continuously investing in professional development to stay at the
            forefront of cloud and CRM technologies.
          </p>
        </div>

        <div className={styles.grid}>
          {certs.map((cert, i) => (
            <div key={i} className={`glass-card ${styles.certCard}`}>
              <div className={styles.certIcon}>{cert.icon}</div>
              <h3 className={styles.certName}>{cert.name}</h3>
              <span className={styles.certIssuer}>{cert.issuer}</span>
              <p className={styles.certDesc}>{cert.description}</p>
              <div className={styles.skills}>
                {cert.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className={styles.shine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
