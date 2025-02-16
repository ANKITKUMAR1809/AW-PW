const CoursePage = () => {
    const courses = [
      {
        id: 1,
        name: "Saakaar Pro 2026 Physics",
        image: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/834f32b3-8a73-4b04-9ae2-abda371e6cbd.png",
        oldPrice: "₹6500",
        newPrice: "₹3500",
      },
      {
        id: 2,
        name: "Data Structures & Algorithms Mastery",
        image: "https://via.placeholder.com/150",
        oldPrice: "₹4000",
        newPrice: "₹2000",
      },
      {
        id: 3,
        name: "Python for Beginners",
        image: "https://via.placeholder.com/150",
        oldPrice: "₹3000",
        newPrice: "₹1500",
      },
    ];
  
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-yellow-300">{course.name}</h3>
              <p className="text-gray-400 mt-2 line-through">{course.oldPrice}</p>
              <p className="text-2xl font-bold text-green-400">{course.newPrice}</p>
              <a 
                href="https://wa.me/917491983483" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 font-semibold"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CoursePage;