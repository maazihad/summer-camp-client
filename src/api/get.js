

export const information = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/allInfo`);
   const data = await response.json();
   return data;
};
export const getAllInstructors = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors`);
   const data = await response.json();
   return data;
};
export const getSliders = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/sliders`);
   const data = await response.json();
   return data;
};