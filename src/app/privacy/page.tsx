export const metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your data at AI Toolkit.',
};

export default function PrivacyPage() {
  const lastUpdated = 'June 20, 2026';

  return (
    <div className="bg-black pt-20 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12 italic">Last Updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-indigo max-w-none space-y-12 text-slate-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At AI Toolkit, your privacy is our top priority. This Privacy Policy outlines how we
              collect, use, and safeguard your personal information when you use our website and AI
              services. By accessing our tools, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="mb-4">We collect minimal information required to provide our services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Information:</strong> Name, email address, and authentication data
                provided during sign-up.
              </li>
              <li>
                <strong>Usage Data:</strong> Anonymized statistics on tool usage and frequency to
                improve our algorithms.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, and device information
                for security and troubleshooting.
              </li>
            </ul>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookie Policy</h2>
            <p className="leading-relaxed">
              We use essential cookies to maintain your session and remember your preferences. We do
              not use third-party tracking cookies for advertising purposes. You can disable cookies
              in your browser settings, though some features may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Use AI Input Data</h2>
            <p className="leading-relaxed font-semibold text-white mb-4">
              CRITICAL: We do not store the text you input into our AI tools for longer than
              necessary to process your request.
            </p>
            <p className="leading-relaxed">
              Input data is processed in real-time and is not used to train our global models unless
              you explicitly opt-in to our "Improvement Program." Your private drafts remain
              private.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Security Measures</h2>
            <p className="leading-relaxed">
              We implement industry-standard encryption (AES-256) for data at rest and TLS for data
              in transit. Our infrastructure is regularly audited to ensure the highest levels of
              security for our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="leading-relaxed">
              Under various global regulations (including GDPR and CCPA), you have the right to
              access, correct, or delete your personal data. You may exercise these rights at any
              time through your account dashboard or by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at: <br />
              <span className="text-indigo-400">privacy@aitoolkit.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
