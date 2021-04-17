import React from 'react';

const HomeNotLoggedIn = () => {
    return (
        <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop:"150px",
          marginLeft:"250px",
          color:"chocolate"  
        }}
      >
        <h1>Use these credentials for testing</h1><br/>
        <h1>Admin = Email : hemantkoli14321@gmail.com & Password : Admin@123</h1><br/>
        <h1>User = Email : hemantkolistudent@gmail.com & Password : User@123</h1>
      </div>
    );
};

export default HomeNotLoggedIn;