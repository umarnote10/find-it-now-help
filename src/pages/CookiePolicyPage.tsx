
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CookiePolicyPage = () => {
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Cookie Policy | Found It</title>
        <meta
          name="description"
          content="Learn about how Found It uses cookies and similar technologies to improve your browsing experience."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <div className="text-sm text-gray-500 mb-8">Last updated: April 17, 2025</div>

        <div className="prose prose-headings:font-semibold prose-headings:mt-6 prose-p:mt-2 prose-a:text-foundit-purple max-w-none">
          <h2>Introduction</h2>
          <p>
            This Cookie Policy explains how Found It ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website at foundit.help ("Site"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p>
            In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases, our <Link to="/privacy">Privacy Policy</Link> will apply in addition to this Cookie Policy.
          </p>

          <h2>What are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Found It) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2>Why Do We Use Cookies?</h2>
          <p>
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Site to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Site. Third parties serve cookies through our Site for analytics and other purposes.
          </p>

          <h2>Types of Cookies We Use</h2>
          <p>
            The specific types of cookies served through our Site and the purposes they perform are described below:
          </p>

          <h3>Essential Website Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Site and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Site, you cannot refuse them without impacting how our Site functions.
          </p>
          <ul>
            <li><strong>Authentication Cookies</strong>: These help us identify registered users and ensure they can access their accounts.</li>
            <li><strong>Security Cookies</strong>: These help us detect and prevent security risks.</li>
          </ul>

          <h3>Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Site but are non-essential to its use. However, without these cookies, certain functionality may become unavailable.
          </p>
          <ul>
            <li><strong>Session State Cookies</strong>: These track user navigation and interaction with the Site.</li>
            <li><strong>Preference Cookies</strong>: These remember user preferences and settings.</li>
          </ul>

          <h3>Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our Site is being used or how effective our marketing campaigns are, or to help us customize our Site for you.
          </p>
          <ul>
            <li><strong>Google Analytics</strong>: We use Google Analytics to collect information about how visitors use our Site. This helps us improve our Site and your user experience.</li>
          </ul>

          <h2>How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting preferences in your web browser. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
          <p>
            The specific option to control cookie settings depends on your browser:
          </p>
          <ul>
            <li><strong>Chrome</strong>: Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Firefox</strong>: Options → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari</strong>: Preferences → Privacy → Cookies and website data</li>
            <li><strong>Edge</strong>: Settings → Privacy, search, and services → Cookies</li>
          </ul>
          <p>
            If you use different devices to view and access the Site (e.g., your computer, smartphone, tablet) you will need to ensure that each browser on each device is adjusted to suit your cookie preferences.
          </p>

          <h2>Cookie Consent</h2>
          <p>
            When you first visit our Site, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clearing your cookies in your browser settings and returning to our Site.
          </p>

          <h2>What About Other Tracking Technologies?</h2>
          <p>
            Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Site. This allows us, for example, to monitor the traffic patterns of users from one page within our Site to another, to deliver or communicate with cookies, to understand whether you have come to our Site from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of marketing campaigns.
          </p>
          <p>
            In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
          </p>

          <h2>Do You Serve Targeted Advertising?</h2>
          <p>
            Currently, we do not serve third-party advertisements on our Site. However, we may utilize certain forms of display advertising and retargeting on third-party websites to promote our services. Any targeted advertisements will be clearly marked as such.
          </p>

          <h2>How Often Will You Update This Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>

          <h2>Where Can I Get Further Information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at privacy@foundit.help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
