

export const updateClasses = async (classData, id) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/add-classes/${id}`, {
      method: "PUT",
      headers: {
         'content-type': 'application/json',
         authorization: `Bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify(classData)
   });
   const data = await response.json();
   return data;
};


export const eachClassDetails = async (id) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/class-details/${id}`);
   const data = await response.json();
   return data;
};
