import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
     
      
      {/* Banner */}
      <div className="bg-gray-800 p-12 text-center rounded-lg shadow-lg mt-6 mx-4">
        <h2 className="text-3xl font-bold">PW Batches are <span className="text-yellow-400">40 to 50% OFF</span>!</h2>
        <p className="mt-4 text-lg text-gray-300">Get top-quality education for Indian government exams and computer-related courses provided by Physics Wallah.</p>
        <p className="mt-2 text-md text-gray-400">Limited-time offer. Enroll now and boost your career with expert guidance!</p>
      </div>
    </div>
  );
};

export default HomePage;
