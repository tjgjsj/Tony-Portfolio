import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Jordan | Cloud Architect & Salesforce Professional",
  description:
    "AWS Solutions Architect & Salesforce Certified Administrator. 25+ year veteran firefighter turned cloud technologist. Building scalable solutions that make a difference.",
  keywords: [
    "AWS Solutions Architect",
    "Salesforce Administrator",
    "Cloud Architecture",
    "IT Professional",
  ],
  openGraph: {
    title: "Anthony Jordan | Cloud Architect & Salesforce Professional",
    description:
      "AWS Solutions Architect & Salesforce Certified Administrator. Building scalable solutions that make a difference.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
