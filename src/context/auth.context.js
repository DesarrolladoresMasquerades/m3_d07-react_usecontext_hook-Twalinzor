import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);

    

  }  

  return (
    <AuthContext.Provider value={  { loggedInUser }  }>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProviderWrapper };