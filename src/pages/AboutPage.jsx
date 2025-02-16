const AboutPage = () => {
    return (
      <div className="p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Make Payment to Buy the Course</h2>
        <p className="text-lg text-gray-300">Contact us on WhatsApp to proceed with the payment:</p>
        <p className="text-2xl font-semibold text-green-400 mt-2">+91 7491983483</p>
        
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Terms & Conditions</h3>
          <ul className="text-left text-gray-300 space-y-2">
            <li>1. After one day of payment, your batch will be allotted to you.</li>
            <li>2. Do not call on WhatsApp, text only. If there is an emergency, then call us.</li>
            <li>3. Most important: Download <span className="text-yellow-400">1DM</span> from Play Store on mobile to open and download the video.</li>
            <li>4. If you face any issues, here is the <span className="text-blue-400 underline cursor-pointer">YouTube video</span> available. Watch it properly.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default AboutPage;