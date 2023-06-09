
const Navbar = () => {
   return (
      <div>
         <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
               <div className="text-white text-xl font-bold">Your Photography School Name</div>
               <div className="flex space-x-4">
                  <a href="/" className="text-white hover:text-gray-200">Home</a>
                  <a href="/instructors" className="text-white hover:text-gray-200">Instructors</a>
                  <a href="/classes" className="text-white hover:text-gray-200">Classes</a>
                  <a href="/dashboard" className="text-white hover:text-gray-200">Dashboard</a>
                  <a href="/profile" className="text-white hover:text-gray-200">User Profile</a>
                  <a href="/login" className="text-white hover:text-gray-200">Login</a>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;