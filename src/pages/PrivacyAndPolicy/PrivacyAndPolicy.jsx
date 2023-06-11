
import Wrapper from '../../components/Shared/Wrapper/Wrapper';

const PrivacyAndPolicy = () => {
   return (
      <Wrapper>
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">Privacy Policy</h1>
            <div className="flex flex-col md:flex-row ">
               <div className="md:w-1/2 mb-4 md:mb-0">
                  <img
                     className="mb-4 w-full h-full rounded-lg object-cover"
                     src="https://consumercal.org/wp-content/uploads/2013/04/privacypolicy.jpg"
                     alt="About Us"
                  />
               </div>
               <div className="container mx-auto px-4 py-8">
                  <p className="mb-4">
                     At RAOSU Summer Photography Camp School, we are committed to protecting the privacy of our website visitors and camp participants. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
                  </p>
                  <p className="mb-4">
                     Information we may collect includes your name, contact details, and other information provided during the registration process. We use this information to facilitate your camp enrollment, communicate with you, and provide a personalized camp experience.
                  </p>
                  <p className="mb-4">
                     We do not sell, rent, or share your personal information with third parties without your consent, except as required by law. We implement appropriate security measures to protect your information and maintain its confidentiality.
                  </p>
                  <p className="mb-4">
                     Our website may contain links to external sites. Please note that we are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external websites you visit.
                  </p>
                  <p>
                     By using our website and participating in our camp, you consent to the collection, use, and storage of your personal information as outlined in this Privacy Policy.
                  </p>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default PrivacyAndPolicy;