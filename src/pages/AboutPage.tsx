
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>About Us | Found It</title>
        <meta name="description" content="Learn more about Found It, the lost and found platform that helps people reunite with their lost items." />
      </Helmet>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Found It</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Found It is a serverless lost-and-found web application designed to help people reunite with their lost belongings quickly and efficiently. Our platform provides a simple and direct way for users to report lost items and for finders to post items they've found, facilitating direct communication between both parties.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to create the most efficient and user-friendly platform to reconnect people with their lost possessions. We believe in the power of community and direct communication, which is why we've designed a system that eliminates middlemen and allows users to connect directly through WhatsApp.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            We envision a world where lost items quickly find their way back to their owners through the power of technology and community engagement. By building a comprehensive database of lost and found items with precise location tracking, we aim to significantly increase the chances of successful reunions.
          </p>
          
          <h2>How Found It Works</h2>
          <p>
            Found It operates on a simple yet effective principle:
          </p>
          <ol>
            <li>
              <strong>Report</strong> - Users can report lost items or items they've found with photos, detailed descriptions, and precise locations using our integrated mapping system.
            </li>
            <li>
              <strong>Connect</strong> - Our platform enables direct communication between finders and owners through WhatsApp, enabling quick and easy coordination.
            </li>
            <li>
              <strong>Reunite</strong> - Users can arrange safe meetups to return lost items and mark cases as resolved, helping us maintain an accurate database.
            </li>
          </ol>
          
          <h2>Our Team</h2>
          <p>
            Found It was developed by VnDvx, a team of full-stack developers passionate about creating practical solutions that solve real-world problems. Our extensive experience in web development, database management, and UX design has allowed us to create a seamless platform that prioritizes user experience and effectiveness.
          </p>
          
          <h2>Technology</h2>
          <p>
            Found It leverages cutting-edge technologies to ensure a smooth, efficient user experience:
          </p>
          <ul>
            <li>Serverless architecture for scalability and performance</li>
            <li>Supabase for authentication and database management</li>
            <li>Google Maps integration for precise location tracking</li>
            <li>WhatsApp integration for direct communication</li>
            <li>React and Tailwind CSS for a responsive, mobile-first interface</li>
          </ul>
          
          <h2>Our Commitment</h2>
          <p>
            At Found It, we are committed to:
          </p>
          <ul>
            <li>Maintaining a free platform accessible to all users</li>
            <li>Protecting user privacy and data security</li>
            <li>Continuously improving our platform based on user feedback</li>
            <li>Building a supportive community centered around helping others</li>
          </ul>
          
          <p className="mt-8">
            Thank you for using Found It. Together, we can help lost items find their way home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
