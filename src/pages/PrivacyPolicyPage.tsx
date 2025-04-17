
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Privacy Policy | Found It</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how Found It collects, uses, and protects your personal information."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="text-sm text-gray-500 mb-8">Last updated: April 17, 2025</div>

        <div className="prose prose-headings:font-semibold prose-headings:mt-6 prose-p:mt-2 prose-a:text-foundit-purple max-w-none">
          <p className="lead">
            Found It ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website foundit.help and use our lost-and-found platform (the "Service").
          </p>

          <p>
            Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our Service:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> We collect personal information that you voluntarily provide to us when you register for an account, express interest in obtaining information about us or our products and services, or otherwise contact us. This personal information may include:
              <ul>
                <li>Email address</li>
                <li>Phone number (including WhatsApp number)</li>
                <li>First and last name</li>
                <li>Geographic location information (city, location where item was lost or found)</li>
              </ul>
            </li>
            <li>
              <strong>Photos and Media:</strong> When you upload photos of lost or found items, we collect and store these images to display them on our Service.
            </li>
            <li>
              <strong>Location Data:</strong> We collect location data when you choose to pinpoint the location where an item was lost or found, including latitude and longitude coordinates.
            </li>
            <li>
              <strong>Log Data:</strong> We automatically collect certain information when you visit, use or navigate our Service. This information may include your IP address, browser type, operating system, referring URLs, access times, and pages viewed.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect about you for various purposes, including:
          </p>
          <ul>
            <li>Providing and maintaining our Service</li>
            <li>Enabling users to report and search for lost or found items</li>
            <li>Facilitating communication between users regarding lost and found items</li>
            <li>Processing and fulfilling your requests</li>
            <li>Sending you administrative notifications, such as security or support messages</li>
            <li>Analyzing usage trends and improving our Service</li>
            <li>Protecting against, identifying, and preventing fraud and other unlawful activity</li>
          </ul>

          <h2>Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Service and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          <p>
            We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them) to provide you with a more personal and interactive experience on our Service.
          </p>
          <p>
            Our use of cookies includes:
          </p>
          <ul>
            <li>Authentication cookies to remember your login status</li>
            <li>Analytics cookies to understand how users interact with our Service</li>
            <li>Functionality cookies to remember your preferences and settings</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We may share your personal information in the following situations:
          </p>
          <ul>
            <li>
              <strong>With Other Users:</strong> When you post a lost or found item, certain information (such as your WhatsApp number, item description, and location) is shared with users of our Service to facilitate communication and the return of lost items.
            </li>
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party service providers to help us operate our business, such as hosting providers, analytics services, and customer service providers.
            </li>
            <li>
              <strong>For Legal Requirements:</strong> We may disclose your information where required to comply with applicable law, governmental requests, a judicial proceeding, court order, or other legal processes.
            </li>
            <li>
              <strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
            </li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            We use Supabase to store user data and uploaded media. All data is stored securely with encryption and appropriate access controls. We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
          </p>
          <p>
            However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction or deletion of your personal information</li>
            <li>The right to object to or restrict our processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent where processing is based on consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at support@foundit.help. We will respond to your request in accordance with applicable law.
          </p>

          <h2>Opt-Out Procedures</h2>
          <p>
            You can opt out of receiving marketing communications from us by following the unsubscribe instructions provided in any marketing email we send. Please note that even if you opt out of marketing communications, you will continue to receive transactional messages regarding your account and the Service.
          </p>
          <p>
            If you wish to delete your account and associated data, please contact us at support@foundit.help.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Service is not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information promptly.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: privacy@foundit.help
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
