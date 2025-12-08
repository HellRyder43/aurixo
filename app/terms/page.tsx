import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Aurixo",
  description: "Terms of Service for Aurixo - Review our terms and conditions for software development services.",
};

export default function TermsOfService() {
  const lastUpdated = "December 9, 2025";

  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[var(--foreground)] mb-4">
            Terms of Service
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
              Welcome to Aurixo. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website and software development services. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully before using our services. If you do not agree with these Terms, you may not access or use our services.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              1. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[var(--foreground)]">&quot;Services&quot;</strong> refers to all software development, consulting, and related services provided by Aurixo
              </li>
              <li>
                <strong className="text-[var(--foreground)]">&quot;Client&quot;</strong> or <strong className="text-[var(--foreground)]">&quot;you&quot;</strong> refers to the individual or entity engaging our services
              </li>
              <li>
                <strong className="text-[var(--foreground)]">&quot;Project&quot;</strong> refers to the specific work scope defined in a Statement of Work or Project Agreement
              </li>
              <li>
                <strong className="text-[var(--foreground)]">&quot;Deliverables&quot;</strong> refers to the work product, code, documentation, or other materials produced as part of a Project
              </li>
              <li>
                <strong className="text-[var(--foreground)]">&quot;Agreement&quot;</strong> refers to these Terms together with any Statement of Work, Project Agreement, or other written agreement between you and Aurixo
              </li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              2. Services Description
            </h2>
            <p className="mb-4">
              Aurixo provides freelance software development services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full-stack web application development</li>
              <li>Mobile application development</li>
              <li>API design and development</li>
              <li>Database architecture and optimization</li>
              <li>Technical consulting and code review</li>
              <li>Software maintenance and support</li>
              <li>Custom software solutions</li>
            </ul>
            <p className="mt-4">
              Specific services, scope, timelines, and deliverables will be defined in a separate Statement of Work or Project Agreement for each engagement.
            </p>
          </section>

          {/* Engagement Process */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              3. Engagement Process
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Consultation
            </h3>
            <p className="mb-4">
              Prospective clients may request a consultation to discuss project requirements. Initial consultations are provided at no charge and do not create any obligation on either party.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Project Agreement
            </h3>
            <p className="mb-4">
              Before commencing work, both parties must agree to and sign a Statement of Work or Project Agreement that includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed project scope and requirements</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and fees</li>
              <li>Deliverables and acceptance criteria</li>
              <li>Any project-specific terms or conditions</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              4. Payment Terms
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Fees and Billing
            </h3>
            <p className="mb-4">
              Payment terms will be specified in each Project Agreement. Common arrangements include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[var(--foreground)]">Fixed Price:</strong> A predetermined total fee for the entire project
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Hourly Rate:</strong> Payment based on actual hours worked
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Milestone-Based:</strong> Payments tied to completion of specific project phases
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Retainer:</strong> Ongoing monthly fee for continued services
              </li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Payment Schedule
            </h3>
            <p className="mb-4">
              Unless otherwise agreed, standard payment terms are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% deposit required before project commencement</li>
              <li>Progress payments at agreed milestones</li>
              <li>Final payment due upon project completion</li>
              <li>Net 14 days for invoiced amounts</li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Late Payments
            </h3>
            <p>
              Late payments may be subject to a late fee of 1.5% per month or the maximum amount allowed by law, whichever is less. We reserve the right to suspend work on your project if payments are more than 14 days overdue.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              5. Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Client-Owned IP
            </h3>
            <p className="mb-4">
              Upon full payment of all fees, you will own the intellectual property rights to custom code and deliverables specifically created for your project, subject to the exclusions below.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Aurixo-Owned IP
            </h3>
            <p className="mb-4">
              Aurixo retains ownership of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-existing code, libraries, frameworks, and tools</li>
              <li>Reusable components and general methodologies</li>
              <li>Any code or materials created outside the scope of your project</li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Third-Party Components
            </h3>
            <p className="mb-4">
              Projects may incorporate third-party open-source libraries and frameworks, which remain subject to their respective licenses. We will disclose all significant third-party dependencies.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Portfolio Rights
            </h3>
            <p>
              Unless specifically prohibited in writing, Aurixo reserves the right to use project work in portfolios, case studies, and marketing materials. Confidential or sensitive information will be redacted or anonymized.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              6. Confidentiality
            </h2>
            <p className="mb-4">
              We understand that you may share sensitive business information during our engagement. We agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain the confidentiality of all proprietary information</li>
              <li>Use confidential information solely for performing services</li>
              <li>Not disclose confidential information to third parties without consent</li>
              <li>Return or destroy confidential materials upon project completion</li>
            </ul>
            <p className="mt-4">
              Confidential information does not include information that is publicly available, independently developed, or rightfully obtained from third parties.
            </p>
          </section>

          {/* Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              7. Client Responsibilities
            </h2>
            <p className="mb-4">
              To ensure successful project completion, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide timely access to necessary resources, systems, and information</li>
              <li>Designate a primary point of contact for project communications</li>
              <li>Review deliverables and provide feedback within agreed timeframes</li>
              <li>Make timely decisions on project-related matters</li>
              <li>Provide accurate and complete requirements</li>
              <li>Ensure you have authority to share any materials or information provided</li>
            </ul>
            <p className="mt-4">
              Delays caused by failure to meet these responsibilities may result in project timeline extensions and additional fees.
            </p>
          </section>

          {/* Warranties and Disclaimer */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              8. Warranties and Disclaimer
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Our Warranties
            </h3>
            <p className="mb-4">
              Aurixo warrants that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services will be performed in a professional and workmanlike manner</li>
              <li>We have the right to provide the services</li>
              <li>Deliverables will substantially conform to agreed specifications</li>
              <li>We will comply with applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Warranty Period
            </h3>
            <p className="mb-4">
              Unless otherwise agreed, we provide a 30-day warranty period from project delivery. During this period, we will fix bugs or defects in deliverables at no additional charge.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Disclaimer
            </h3>
            <p className="mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, ALL SERVICES AND DELIVERABLES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that services will be uninterrupted or error-free, or that all defects will be corrected.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              9. Limitation of Liability
            </h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[var(--foreground)]">Total Liability:</strong> Our total liability for any claims arising from or related to our services shall not exceed the total fees paid by you for the specific project giving rise to the claim
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Excluded Damages:</strong> We shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including lost profits, lost data, or business interruption
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Time Limit:</strong> No action may be brought against us more than one (1) year after the cause of action arises
              </li>
            </ul>
            <p className="mt-4">
              These limitations apply regardless of the form of action, whether in contract, tort, strict liability, or otherwise.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              10. Indemnification
            </h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Aurixo from any claims, damages, or expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your breach of these Terms</li>
              <li>Your misuse of deliverables or services</li>
              <li>Content, data, or materials you provide</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of applicable laws or regulations</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              11. Termination
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Termination by Client
            </h3>
            <p className="mb-4">
              You may terminate a project at any time with written notice. You will be responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment for all work completed up to the termination date</li>
              <li>Any non-refundable expenses incurred</li>
              <li>A cancellation fee (if specified in the Project Agreement)</li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Termination by Aurixo
            </h3>
            <p className="mb-4">
              We may terminate a project or these Terms if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You fail to make timely payments</li>
              <li>You breach these Terms or the Project Agreement</li>
              <li>You fail to provide necessary cooperation or materials</li>
              <li>Continuation would violate applicable laws</li>
            </ul>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Effect of Termination
            </h3>
            <p>
              Upon termination, you must pay all outstanding fees. We will deliver work completed to date. Provisions regarding confidentiality, intellectual property, liability, and indemnification survive termination.
            </p>
          </section>

          {/* Scope Changes */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              12. Changes to Project Scope
            </h2>
            <p className="mb-4">
              Any changes to the agreed project scope must be documented in writing and may result in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adjusted timeline and delivery dates</li>
              <li>Additional fees based on the scope of changes</li>
              <li>Modified deliverables or acceptance criteria</li>
            </ul>
            <p className="mt-4">
              We will provide an estimate for scope changes before proceeding with additional work.
            </p>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              13. Force Majeure
            </h2>
            <p>
              Neither party shall be liable for any failure to perform due to causes beyond reasonable control, including acts of God, war, terrorism, labor disputes, governmental actions, internet or utility failures, or other force majeure events. The affected party will provide prompt notice and use reasonable efforts to resume performance.
            </p>
          </section>

          {/* Independent Contractor */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              14. Independent Contractor Relationship
            </h2>
            <p>
              Aurixo is an independent contractor, not an employee, agent, or partner of the Client. We retain sole control over how services are performed. Nothing in these Terms creates an employment, partnership, or joint venture relationship.
            </p>
          </section>

          {/* Communication */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              15. Communications and Notices
            </h2>
            <p className="mb-4">
              Official notices must be sent in writing to:
            </p>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
              <p className="text-[var(--foreground)] font-normal mb-2">Aurixo</p>
              <p>Email: legal@aurixo.com</p>
            </div>
            <p className="mt-4">
              Notices are effective upon receipt. Routine communications may be conducted via email or project management tools.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              16. Dispute Resolution
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Good Faith Negotiation
            </h3>
            <p className="mb-4">
              In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiation.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Mediation
            </h3>
            <p className="mb-4">
              If negotiation fails, parties agree to attempt mediation before pursuing legal action.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Governing Law
            </h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws applicable in our jurisdiction, without regard to conflict of law principles. Any legal action must be brought in the courts of that jurisdiction.
            </p>
          </section>

          {/* General Provisions */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              17. General Provisions
            </h2>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Entire Agreement
            </h3>
            <p className="mb-4">
              These Terms, together with any Project Agreement or Statement of Work, constitute the entire agreement between the parties and supersede all prior agreements or understandings.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Amendments
            </h3>
            <p className="mb-4">
              We may modify these Terms at any time. Material changes will be communicated with reasonable notice. Continued use of our services constitutes acceptance of modified Terms.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Assignment
            </h3>
            <p className="mb-4">
              You may not assign or transfer these Terms or any Project Agreement without our prior written consent. We may assign our rights and obligations with notice to you.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Severability
            </h3>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Waiver
            </h3>
            <p className="mb-4">
              No waiver of any term shall be deemed a further or continuing waiver of that term or any other term.
            </p>

            <h3 className="text-xl font-normal text-[var(--foreground)] mb-3 mt-6">
              Headings
            </h3>
            <p>
              Section headings are for convenience only and do not affect interpretation.
            </p>
          </section>

          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              18. Acceptance
            </h2>
            <p>
              By accessing our website, requesting a consultation, or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-[var(--border)] pt-8">
            <h2 className="text-2xl font-normal text-[var(--foreground)] mb-4">
              Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
              <p className="text-[var(--foreground)] font-normal mb-2">Aurixo</p>
              <p>Email: legal@aurixo.com</p>
              <p className="mt-4 text-sm">
                For general inquiries: hello@aurixo.com
              </p>
            </div>
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
