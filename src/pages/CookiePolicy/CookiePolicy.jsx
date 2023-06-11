import Wrapper from "../../components/Shared/Wrapper/Wrapper";

const CookiePolicy = () => {
   return (
      <Wrapper>
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">Cookie Policy</h1>
            <p className="mb-4">
               This website uses cookies to enhance your browsing experience and provide personalized services. By using our website, you consent to the use of cookies in accordance with this Cookie Policy.
            </p>
            <p className="mb-4">
               Cookies are small text files that are stored on your device when you visit a website. They help us analyze website traffic, remember your preferences, and improve our services.
            </p>
            <p className="mb-4">
               We use both session cookies (which are erased when you close your browser) and persistent cookies (which remain on your device for a specified period) to track and analyze usage patterns on our website. This information is anonymous and does not personally identify you.
            </p>
            <p className="mb-4">
               You can manage or delete cookies through your browser settings. However, please note that disabling cookies may affect the functionality and user experience of our website.
            </p>
            <p>
               This Cookie Policy may be updated from time to time. We recommend reviewing it periodically for any changes. Continued use of our website after such changes constitutes your acceptance of the updated Cookie Policy.
            </p>
         </div>
      </Wrapper>
   );
};

export default CookiePolicy;