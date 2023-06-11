import Wrapper from "../../components/Shared/Wrapper/Wrapper";

const Contact = () => {
   return (
      <Wrapper>
         <div className="bg-red-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
               <div className="max-w-md mx-auto bg-red-300 rounded p-6 shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Send your feedback</h2>
                  <form>
                     <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="bg-red-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="bg-red-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                        <textarea id="message" className="bg-red-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
                     </div>
                     <div className="text-right">
                        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Send Message</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default Contact;
