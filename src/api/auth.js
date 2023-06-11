export const saveUser = async (user) => {
   const currentUser = {
      name: user.displayName,
      email: user.email
   };
   return fetch(`${import.meta.env.VITE_API_URL}/allUsers/${user?.email}`, {
      method: "PUT",
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
   })
      .then(res => res.json())
      .then(data => {
         console.log(data);
      });
};