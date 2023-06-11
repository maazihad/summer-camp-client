import useAuth from '../../hooks/useAuth';
import Spinner from '../../components/Shared/Spinner/Spinner';
import Wrapper from '../../components/Shared/Wrapper/Wrapper';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AlbumSection = () => {
   const { loading } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const getAlbums = async () => {
      try {
         const res = await axiosSecure.get('/allInfo');
         // console.log(res.data);
         return res.data;
      } catch (error) {
         console.error(error);
         throw error;
      }
   };
   const { data: albums = [] } = useQuery(['albums'], getAlbums, {
      enabled: !loading
   });
   if (loading) {
      return <Spinner />;
   }
   return (
      <Wrapper>
         <h2 className="text-5xl mb-6  mt-12 text-red-900 font-bold text-center abril">Students best Clicking Shot</h2>
         <p className="text-center gamjaFlower text-red-800 font-bold mb-5 text-2xl">Explore the World Through Your Lens</p>
         <div className='grid  xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4'>
            {
               albums.map(album => <div
                  key={album._id}
                  className="card w-full group overflow-hidden bg-red-100 shadow-xl rounded-none">
                  <figure className='w-full lg:h-[300px]'>
                     <img className='object-cover h-full group-hover:scale-110 transition w-full lg:h-[300px]' src={album.picture} alt="Shoes" />
                  </figure>
                  <div className=" p-3 text-center">
                     <h2 className="card-title">{album.activitySlogan}</h2>
                  </div>
               </div>)
            }
         </div>
      </Wrapper>
   );

};

export default AlbumSection;