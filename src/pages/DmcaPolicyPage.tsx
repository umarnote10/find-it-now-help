
import { Helmet } from "react-helmet";

const DmcaPolicyPage = () => {
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>DMCA Policy | Found It</title>
        <meta
          name="description"
          content="Found It's DMCA Policy outlines the process for submitting copyright infringement notices and counter-notices."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">DMCA Policy</h1>
        <div className="text-sm text-gray-500 mb-8">Last updated: April 17, 2025</div>

        <div className="prose prose-headings:font-semibold prose-headings:mt-6 prose-p:mt-2 prose-a:text-foundit-purple max-w-none">
          <h2>Digital Millennium Copyright Act (DMCA) Notice</h2>
          <p>
            Found It respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement that are reported to the designated copyright agent identified below.
          </p>
          <p>
            If you are a copyright owner, or authorized on behalf of one, and you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim by following our DMCA notice procedure described below.
          </p>

          <h2>DMCA Notice Procedure</h2>
          <p>
            To submit a notice of claimed copyright infringement under the DMCA, please provide our designated copyright agent with the following information in writing:
          </p>
          <ol>
            <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf;</li>
            <li>Identification of the copyrighted work claimed to have been infringed;</li>
            <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;</li>
            <li>Your contact information, including your address, telephone number, and an email address;</li>
            <li>A statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
            <li>A statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ol>
          <p>
            You can submit your DMCA notice to our designated copyright agent at:
          </p>
          <p>
            Attention: DMCA Compliance Officer<br />
            Email: dmca@foundit.help<br />
            Subject Line: DMCA Notice
          </p>
          <p>
            Upon receiving a proper notice of copyright infringement, we will expeditiously remove or disable access to the allegedly infringing content and will make a good-faith attempt to notify the user who posted the content.
          </p>

          <h2>Counter-Notice Procedure</h2>
          <p>
            If you believe that your content was removed or disabled by mistake or misidentification, you may submit a counter-notice to our designated copyright agent containing the following information:
          </p>
          <ol>
            <li>Your physical or electronic signature;</li>
            <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>
            <li>A statement under penalty of perjury that you have a good faith belief that the content was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled;</li>
            <li>Your name, address, telephone number, and email address;</li>
            <li>A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which Found It may be found; and</li>
            <li>A statement that you will accept service of process from the person who provided notification of alleged infringement or an agent of such person.</li>
          </ol>
          <p>
            Upon receipt of a proper counter-notice, we will promptly forward a copy to the person who submitted the original DMCA notice. If we do not receive notice within 10 business days that the original reporter is seeking a court order to prevent further infringement of the material at issue, we may replace or restore access to the material that was removed.
          </p>

          <h2>Repeat Infringers</h2>
          <p>
            We have adopted a policy of terminating, in appropriate circumstances, users who are deemed to be repeat infringers. We may also at our sole discretion limit access to the Site and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
          </p>

          <h2>Good Faith Belief</h2>
          <p>
            Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing, or that material or activity was removed or disabled by mistake or misidentification, may be subject to liability.
          </p>

          <h2>Modifications</h2>
          <p>
            Found It reserves the right to modify this DMCA Policy at any time, so please review it frequently. Changes to this DMCA Policy will be effective when posted on the Site.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about our DMCA Policy, please contact us at:
          </p>
          <p>
            Email: dmca@foundit.help
          </p>
        </div>
      </div>
    </div>
  );
};

export default DmcaPolicyPage;
