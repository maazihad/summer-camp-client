export const imageUpload = async (image) => {
   const classData = new FormData();
   classData.append('image', image);
   const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`;
   const response = await fetch(url, {
      method: 'POST',
      body: classData,
   });
   const data = await response.json();
   return data;
};