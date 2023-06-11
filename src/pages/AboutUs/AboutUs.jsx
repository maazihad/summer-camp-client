import Wrapper from "../../components/Shared/Wrapper/Wrapper";


const AboutUs = () => {
   return (
      <Wrapper>
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">About Us</h1>
            <div className="flex flex-col md:flex-row">
               <div className="md:w-1/2 mb-4 md:mb-0">
                  <img
                     className="mb- w-full h-full rounded-lg object-cover"
                     src="https://dublin-photography-school.com/dps/wp-content/uploads/2020/10/camera-courses-dublin.png"
                     alt="About Us"
                  />
               </div>
               <div className="md:w-1/2 md:ml-8">
                  <p className="mb-4">
                     Welcome to RAOSU Summer Photography Camp School! We are a premier
                     photography camp dedicated to nurturing young talent and helping
                     aspiring photographers develop their skills.
                  </p>
                  <p className="mb-4">
                     Our experienced instructors and staff are passionate about
                     photography and believe in providing a fun and supportive learning
                     environment for our campers. We offer a range of programs and
                     workshops designed to cater to different skill levels and interests.
                  </p>
                  <p className="mb-4">
                     At RAOSU Summer Photography Camp School, we emphasize hands-on
                     learning and encourage creativity and self-expression. Our campers
                     have access to state-of-the-art photography equipment and
                     facilities, ensuring they get the most out of their camp experience.
                  </p>
                  <p>
                     Whether your child is just starting their photography journey or
                     looking to refine their skills, our camp provides the perfect
                     opportunity to learn, grow, and have a memorable summer experience.
                     Join us today and embark on an exciting photographic adventure!
                  </p>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default AboutUs;
