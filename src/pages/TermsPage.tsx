
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Terms of Use | Found It</title>
        <meta
          name="description"
          content="Read our terms of use to understand your rights and obligations when using the Found It platform."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <div className="text-sm text-gray-500 mb-8">Last updated: April 17, 2025</div>

        <div className="prose prose-headings:font-semibold prose-headings:mt-6 prose-p:mt-2 prose-a:text-foundit-purple max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Found It ("we," "us," or "our"), concerning your access to and use of the foundit.help website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>
          <p>
            You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.
          </p>

          <h2>User Registration</h2>
          <p>
            You may be required to register with the Site to access certain features. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>

          <h2>User Representations</h2>
          <p>
            By using the Site, you represent and warrant that:
          </p>
          <ol>
            <li>You have the legal capacity and agree to comply with these Terms of Use;</li>
            <li>You are not a minor in the jurisdiction in which you reside;</li>
            <li>You will not use the Site for any illegal or unauthorized purpose;</li>
            <li>Your use of the Site will not violate any applicable law or regulation;</li>
            <li>Information you provide during registration is truthful and accurate;</li>
            <li>You will not attempt to deceive others by falsely claiming ownership of items you did not lose or find;</li>
            <li>You will maintain the confidentiality of your registration information.</li>
          </ol>

          <h2>User Content</h2>
          <p>
            Our Site allows you to post content, including photos, descriptions, location data, and contact information related to lost and found items. By posting content on the Site, you represent and warrant that:
          </p>
          <ol>
            <li>The content is yours or you have the right to use it and grant us the rights and license as provided in these Terms;</li>
            <li>The content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person;</li>
            <li>The content does not contain any material that solicits personal information from anyone under 18;</li>
            <li>The content does not include offensive, indecent, or otherwise objectionable material;</li>
            <li>The content does not contain any defamatory or libelous material.</li>
          </ol>
          <p>
            You retain any and all of your rights to any content you submit, post, or display on or through the Site, and you are responsible for protecting those rights. We take no responsibility and assume no liability for content you or any third party posts on or through the Site.
          </p>

          <h2>Acceptable Use</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          <p>
            As a user of the Site, you agree not to:
          </p>
          <ol>
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, database, or directory without written permission from us;</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information;</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site;</li>
            <li>Use the Site in a manner inconsistent with any applicable laws or regulations;</li>
            <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Site;</li>
            <li>Post false or misleading information about lost or found items;</li>
            <li>Solicit personal information from other users for purposes unrelated to the recovery of lost items;</li>
            <li>Use the platform to harass, threaten, or intimidate other users;</li>
            <li>Attempt to impersonate another user or person;</li>
            <li>Use the Site for any revenue-generating endeavor or commercial enterprise.</li>
          </ol>

          <h2>Content Ownership and License</h2>
          <p>
            You retain ownership of any intellectual property rights that you hold in the content you post on the Site. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the purpose of the Site and our services.
          </p>

          <h2>Takedown Procedures</h2>
          <p>
            If you believe that content available on our Site infringes one of your copyrights, please follow our DMCA procedures available on our <Link to="/dmca">DMCA Policy</Link> page.
          </p>
          <p>
            For non-copyright complaints, if you believe any content on the Site is inappropriate, offensive, or violates these Terms of Use, please contact us at legal@foundit.help with details of the content and the reason for your request. We will review your request and take appropriate action, which may include removing or modifying the content.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            We care about data privacy and security. Please review our <Link to="/privacy">Privacy Policy</Link>. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use.
          </p>

          <h2>Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
          </p>
          <p>
            We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of the United States. Found It and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            You agree to irrevocably submit all disputes related to these Terms or the relationship established by these Terms to the jurisdiction of the United States federal courts. Found It shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Terms are entered into in the course of your trade or profession, the state of your principal place of business.
          </p>

          <h2>Corrections</h2>
          <p>
            There may be information on the Site that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
          </p>

          <h2>Disclaimer</h2>
          <p>
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
          </p>

          <h2>Limitations of Liability</h2>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the Site, your breach of these Terms of Use, or your violation of any law or the rights of a third party.
          </p>

          <h2>User Data</h2>
          <p>
            We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
          </p>

          <h2>Electronic Communications</h2>
          <p>
            By using the Site, you consent to receiving electronic communications from us. These electronic communications may include notices about applicable fees and charges, transactional information, and other information concerning or related to the Site. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.
          </p>

          <h2>Miscellaneous</h2>
          <p>
            These Terms of Use and any policies or operating rules posted by us on the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision.
          </p>
          <p>
            These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
          </p>
          <p>
            If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <p>
            Email: legal@foundit.help
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
