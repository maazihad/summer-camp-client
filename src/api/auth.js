export const saveUser = async (user) => {
   const currentUser = {
      name: user.displayName,
      email: user.email
   };
   return fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
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
// =============>>>>Check Admin<<<<==============//
export const getPosition = async (email) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`);
   const user = await response.json();
   return user?.role;
};

// =============>>>>Become A Admin<<<<==============//
export const becomeHost = async (email) => {
   const currentUser = {
      role: "admin"
   };
   return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
      method: "PUT",
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
   })
      .then(res => res.json());
};