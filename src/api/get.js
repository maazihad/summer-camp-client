

// export const information = async () => {
//    const response = await fetch(`${import.meta.env.VITE_API_URL}/allInfo`);
//    const data = await response.json();
//    return data;
// };

export const eachClassDetails = async (id) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/class/${id}`);
   const data = await response.json();
   return data;
};
