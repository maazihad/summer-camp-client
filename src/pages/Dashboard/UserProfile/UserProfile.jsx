import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
   const { user } = useAuth();
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
            <div className="flex flex-col items-center">
               <div className="avatar">
                  <div className="w-32 rounded">
                     <img src={user?.photoURL} />
                  </div>
               </div>
               <h2 className="text-2xl font-semibold mb-2">{user?.displayName}</h2>
               <p className="text-gray-600 mb-4">Web Developer</p>
               <div className="flex items-center mb-4 space-x-4">
                  <button className="btn btn-outline">Follow</button>
                  <button className="btn btn-outline">Message</button>
               </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
               <div className="flex items-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 mr-2 text-gray-500"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path
                        fillRule="evenodd"
                        d="M12.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L14.586 9H5a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                     />
                  </svg>
                  <p className="text-gray-600">Joined on June 1, 2023</p>
               </div>
               <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                     risus id nulla facilisis convallis.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;