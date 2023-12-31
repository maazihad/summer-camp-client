import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Spinner from "../../components/Shared/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
   const { loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const getBanners = async () => {
      try {
         const res = await axiosSecure.get('/sliders');
         // console.log(res.data);
         return res.data;
      } catch (error) {
         console.error(error);
         throw error;
      }
   };
   const { data: sliders = [] } = useQuery(['sliders'], getBanners, {
      enabled: !loading
   });
   if (loading) {
      return <Spinner />;
   }
   return (
      <>
         <Swiper
            pagination={{
               type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper h-[650px]"
         >
            {
               sliders.map(bannerSlider => <SwiperSlide
                  key={bannerSlider.id}
               >
                  <img className="w-full h-full object-cover" src={bannerSlider.img} alt="" />
                  <div className="absolute w-full text-white h-full  bottom-0 bg-gradient-to-t from-[#000000] to-[rgba(30, 30, 45, .5)] ">
                     <div className="absolute inset-x-0 bottom-0 flex flex-col mb-10 items-center justify-center">
                        <h2 className='transform -rotate-12 text-3xl text-center lg:text-4xl font-bold lg:text-center abril'>{bannerSlider.title}</h2>
                        <p className="text-2xl mt-5  text-center ">{bannerSlider.subTitle}</p>
                        <p className="text-lg mt-2 mb-5 text-center text-red-300 ">{bannerSlider.det}</p>
                        <div className='text-center lg:text-right'>
                           <button className="btn btn-circle border-white capitalize  btn-outline border-dotted border-4 text-white hover:bg-red-300">
                              <BsFillArrowDownCircleFill size={40} />
                           </button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
      </>
   );
};

export default Banner;