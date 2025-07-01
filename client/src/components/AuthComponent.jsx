import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AuthComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const   BaseUrl='https://workspace-p7ko.onrender.com'

    const fetchUserFromBackend = async () => {
        console.log('sdfdfdsfsdfs')
      if (isAuthenticated && user?.email) {
        console.log(user)
        try {
          const res = await axios.post(`${BaseUrl}/api/auth/auth0/login`, {
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
