"use client";

import styles from "./Portfolio.module.css";

const projects = [
  {
    title: "Sentinel Cloud Infrastructure Healer",
    category: "AWS · AI Agent",
    description:
      "Autonomous cloud infrastructure healing agent that monitors, diagnoses, and self-remediates AWS environment issues in real time.",
    language: "Python",
    url: "https://github.com/tjgjsj/Sentinel-Autonomous-Cloud-Infrastructure-Healer",
  },
  {
    title: "SecureVault Identity & Access Agent",
    category: "AWS · Security",
    description:
      "AI-powered identity and access management agent that automates security policy enforcement and access control across cloud environments.",
    language: "Python",
    url: "https://github.com/tjgjsj/SecureVault---AI-Powered-Identity-Access-Agent",
  },
  {
    title: "AI Provider Compare",
    category: "AI · Benchmarking",
    description:
      "Side-by-side comparison tool for evaluating AI providers, analyzing model performance, pricing, and capabilities to make informed architecture decisions.",
    language: "Python",
    url: "https://github.com/tjgjsj/ai-provider-compare",
  },
  {
    title: "AWS Intelligent Document Agent",
    category: "AWS · Document AI",
    description:
      "Smart document processing agent leveraging AWS services for automated extraction, analysis, and intelligent routing of enterprise documents.",
    language: "Python",
    url: "https://github.com/tjgjsj/aws-intelligent-document-agent",
  },
  {
    title: "Salesforce Travel Agent",
    category: "Salesforce · AI",
    description:
      "AI-driven travel management solution built on the Salesforce platform for automated booking workflows, itinerary management, and client engagement.",
    language: "Salesforce",
    url: "https://github.com/tjgjsj/Salesforce-travel-agent",
  },
  {
    title: "ShopAssist AI Agent",
    category: "AWS · Serverless",
    description:
      "Serverless AI shopping assistant built with AWS Bedrock and Lambda, providing intelligent product recommendations and customer support.",
    language: "HTML",
    stars: 1,
    url: "https://github.com/tjgjsj/shopassist-ai-agent",
  },
];

const langColors: Record<string, string> = {
  Python: "#3572A5",
  HTML: "#e34c26",
  JavaScript: "#f1e05a",
  Salesforce: "#00A1E0",
  Apex: "#1797c0",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Open-source projects spanning AI agents, cloud security, healthcare
            automation, and Salesforce integration.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card ${styles.projectCard}`}
            >
              <div className={styles.projectHeader}>
                <span className={styles.category}>{project.category}</span>
                <svg
                  className={styles.ghIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectFooter}>
                <div className={styles.langBadge}>
                  <span
                    className={styles.langDot}
                    style={{
                      background: langColors[project.language] || "#8b8b8b",
                    }}
                  />
                  <span>{project.language}</span>
                </div>
                <span className={styles.viewLink}>
                  View on GitHub
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={styles.cardGlow} />
            </a>
          ))}
        </div>

        <div className={styles.ghCta}>
          <a
            href="https://github.com/tjgjsj"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghButton}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
