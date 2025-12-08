import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aurixo",
  description: "Privacy Policy for Aurixo - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "December 9, 2025";

  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[var(--foreground)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[var(--foreground-secondary)]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[var(--foreground-secondary)] leading-relaxed">
          {/* Introduction */}
          <section>
            <p className="mb-4">
              At Aurixo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our software development services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Personal Information
            </h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Submit a consultation request or contact form</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Engage our services for software development projects</li>
              <li>Correspond with us via email or other channels</li>
            </ul>
            <p className="mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business details</li>
              <li>Project requirements and specifications</li>
              <li>Payment and billing information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and browsing activities, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Clickstream data and usage patterns</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate about projects, updates, and promotional materials (with your consent)</li>
              <li>Monitor and analyze usage and trends to improve user experience</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              3. How We Share Your Information
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[var(--foreground)]">Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, conducting business, or servicing you (e.g., hosting providers, payment processors, analytics services)
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Legal Requirements:</strong> When required by law, court order, or governmental authority, or to protect our rights, property, or safety
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business
              </li>
              <li>
                <strong className="text-[var(--foreground)]">With Your Consent:</strong> With your explicit consent for any other purpose
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Secure development practices and code reviews</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              7. Your Privacy Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[var(--foreground)]">Access:</strong> Request access to the personal information we hold about you
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Portability:</strong> Request a copy of your data in a structured, machine-readable format
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Objection:</strong> Object to our processing of your personal information
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Restriction:</strong> Request restriction of processing your information
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Withdraw Consent:</strong> Withdraw previously given consent at any time
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              8. Third-Party Websites
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              12. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
              <p className="text-[var(--foreground)] font-normal mb-2">Aurixo</p>
              <p>Email: privacy@aurixo.com</p>
              <p className="mt-4 text-sm">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </section>

          {/* GDPR/CCPA Compliance */}
          <section className="border-t border-[var(--border)] pt-8">
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              Compliance Notices
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3">
              GDPR (EU Users)
            </h3>
            <p className="mb-4">
              If you are located in the European Economic Area (EEA), we process your personal data based on legitimate interests, contractual necessity, or your consent. You have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3">
              CCPA (California Users)
            </h3>
            <p>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information (though we do not sell personal information).
            </p>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <a
            href="/"
            className="inline-flex items-center text-brand-indigo hover:text-brand-purple transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
