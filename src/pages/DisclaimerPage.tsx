
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DisclaimerPage = () => {
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Disclaimer | Found It</title>
        <meta
          name="description"
          content="Read our disclaimer to understand the limits of our liability for the Found It platform."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
        <div className="text-sm text-gray-500 mb-8">Last updated: April 17, 2025</div>

        <div className="prose prose-headings:font-semibold prose-headings:mt-6 prose-p:mt-2 prose-a:text-foundit-purple max-w-none">
          <h2>Website Disclaimer</h2>
          <p>
            The information provided by Found It ("we," "us," or "our") on foundit.help (the "Site") is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <p>
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>

          <h2>External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p>
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          </p>

          <h2>Professional Disclaimer</h2>
          <p>
            The Site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
          </p>
          <p>
            THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>

          <h2>Platform Use Disclaimer</h2>
          <p>
            Found It is a platform that allows users to report lost items and post information about found items. We do not guarantee the return of any lost items or the accuracy of information posted by users. We are not responsible for any losses, damages, or disputes that may arise from the use of our platform.
          </p>
          <p>
            While we strive to create a safe and trustworthy environment, we cannot verify the authenticity of all users or the accuracy of all information posted on our platform. Users should exercise caution when communicating with others and arranging meetups to exchange items.
          </p>

          <h2>WhatsApp Communication Disclaimer</h2>
          <p>
            Our platform facilitates direct communication between users through WhatsApp. We are not responsible for any communications or transactions that occur outside our platform, including those through WhatsApp. Users should exercise caution and follow safety best practices when communicating with others through WhatsApp or any other channel.
          </p>

          <h2>Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every attempt to ensure that the information contained on our Site is correct, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.
          </p>

          <h2>Fair Use Disclaimer</h2>
          <p>
            The Site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to provide a lost-and-found service that helps connect people with their lost items.
          </p>
          <p>
            If you wish to use copyrighted material from the Site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner.
          </p>

          <h2>Views Expressed Disclaimer</h2>
          <p>
            The views and opinions expressed on the Site, including in user-generated content, are those of the users and do not necessarily reflect the official policy or position of Found It. Any content provided by our users is of their opinion and is not intended to malign any religion, ethnic group, club, organization, company, individual, or anyone or anything.
          </p>

          <h2>No Responsibility Disclaimer</h2>
          <p>
            The information on the Site is provided with the understanding that Found It is not rendering legal, accounting, or other professional services or advice. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.
          </p>
          <p>
            In no event shall Found It or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Site.
          </p>

          <h2>"Use at Your Own Risk" Disclaimer</h2>
          <p>
            All information on the Site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
          </p>
          <p>
            You hereby acknowledge that you use the Site and any information contained therein at your own risk.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:
          </p>
          <p>
            Email: legal@foundit.help
          </p>
          <p className="mt-4">
            By using our Site, you acknowledge that you have read and understood this Disclaimer and agree to be bound by its terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
