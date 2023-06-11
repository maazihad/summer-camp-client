import Gallery from 'react-photo-gallery';


const photos = [
   {
      src: 'https://www.thephoblographer.com/wp-content/uploads/2020/12/HIllary-Grigonis-The-Phoblographer-Nikon-Z6-II-review-HKG_2992.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://www.mickeyshannon.com/photos/thumbs/fine-art-prints.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/10/Mou-Aysha-portrait-photography-3.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://andrewstuder.com/wp-content/uploads/2020/04/AF3I7894-scaled.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://blog.upskillist.com/wp-content/uploads/2016/01/New-Project-70.png',
      width: 4,
      height: 3,
   },
   {
      src: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      width: 4,
      height: 3,
   },
   {
      src: 'https://images.unsplash.com/photo-1597871040916-4b4c20ba08dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80',
      width: 4,
      height: 3,
   },
   {
      src: 'https://www.jdinstitute.edu.in/media/2021/07/Types-of-Fashion-Photography-Thumbnail.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://www.dashef.com/wp-content/uploads/2016/11/Depositphotos_71652087_original-min.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://images.immediate.co.uk/production/volatile/sites/25/2021/03/astrophotography-beginner-guide-8724622-e1631797878243.jpg?quality=90&resize=921,614',
      width: 4,
      height: 3,
   },
   {
      src: 'https://images.ctfassets.net/3s5io6mnxfqz/5So4sZf9wDWtiuRRXjIDM5/6b15bab999183ab5444ff53de8da4cd4/AdobeStock_82258729.jpeg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://i1.adis.ws/i/canon/img_5302-5325-16x9_8ec59ca2219c4e0790d16de229e0b6b2',
      width: 4,
      height: 3,
   },
   {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97abdc95375785.5e960a15bb1b4.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://photographylife.com/wp-content/uploads/2018/09/Abstract-Photography.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://www.fotovalley.com/wp-content/uploads/2020/08/sports-photography-tips-for-amazing-photos-of-sports-1-1.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://i.ytimg.com/vi/Dv7cHLdvMIg/maxresdefault.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/01/experimental.photography.mishra.montage.stairs.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://i.pinimg.com/originals/37/f5/ec/37f5ecc0dfcf0ce129723a9fc8dead53.jpg',
      width: 4,
      height: 3,
   },
   {
      src: 'https://i0.wp.com/truenorthuk.com/wp-content/uploads/2021/03/Leeds-portrait-Photographer-106.jpg?fit=800%2C1000&ssl=1',
      width: 4,
      height: 3,
   },
   {
      src: 'https://blog.upskillist.com/wp-content/uploads/2016/01/New-Project-70.png',
      width: 4,
      height: 3,
   }
];



const Album = () => {

   return <Gallery photos={photos} />;

};

export default Album;