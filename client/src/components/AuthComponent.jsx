import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AuthComponent = () => {
  const { user, isAuthenticated } = useAuth0();

//   useEffect(() => {
//     if (isAuthenticated && user) {
//    const user = {
//       name: user.name,
//       email: user.email,
// // user.eamil7
// //       isadmin: true
//     };


//       localStorage.setItem("user", JSON.stringify(user));
//     }
//   }, [isAuthenticated, user]);



  useEffect(() => {
    const fetchUserFromBackend = async () => {
        console.log('sdfdfdsfsdfs')
      if (isAuthenticated && user?.email) {
        console.log(user)
        try {
          const res = await axios.post("/api/auth/auth0/login", {
            email: user.email,
          });
        //   setFullUser(res.data); // your full user data
        
          localStorage.setItem("user", JSON.stringify(res.data));
        } catch (err) {
          console.error("Failed to fetch full user:", err);
        }
      }
    };

    fetchUserFromBackend();
  }, [isAuthenticated, user]);


//   return null;
};

export default AuthComponent;
