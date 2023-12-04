

const About = () => {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500 min-h-screen p-8">
      <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-teal-200 to-teal-500 p-6 rounded-md shadow-md">
        <h2 className="text-black text-3xl font-bold mb-6">Welcome to Quantum Asset Management</h2>

        <p className="text-gray-700 mb-6">
          At Quantum Asset Management, we recognize that effective asset management is the cornerstone of a thriving business. Our web application is meticulously designed to empower HR/Admin professionals in monitoring and optimizing the utilization of company assets. Whether its laptops, keyboards, chairs, or office supplies, Quantum Asset Management ensures you have a comprehensive and user-friendly tool at your fingertips.
        </p>

        <div className="text-gray-700">
          <h3 className="text-2xl font-bold mb-4">What Sets Us Apart:</h3>

          <ul className="list-disc pl-6">
            <li>Comprehensive Asset Categorization: We understand the diversity of assets in a workplace. Quantum Asset Management categorizes assets into two types: Returnable and Non-returnable, providing a clear overview for effective management.</li>
            <li>Real-time Monitoring: Stay informed about how your employees are utilizing company assets in real-time. Our system provides up-to-the-minute insights, enabling proactive decision-making.</li>

            <li>Subscription-based Model: Access Quantum Asset Management by subscribing to our service. Enjoy the flexibility of choosing a plan that aligns with the unique needs of your business.</li>
            <li>Secure and Confidential: We prioritize the security and confidentiality of your data. Quantum Asset Management employs industry-leading measures to safeguard your information.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
