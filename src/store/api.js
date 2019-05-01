export const login = async (username, password) => {
   const response = await fetch('https://www.grainhappy.com/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
   })
   return await response.json();
};

export const verifyToken = async (token) => {
   const response = await fetch('https://www.grainhappy.com/wp-json/jwt-auth/v1/token/validate', {

   });
   return await response.json();
}
