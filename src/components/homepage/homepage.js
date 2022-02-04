import React from 'react';
import './homepage.css';


const Homepage = ({setLoginUser}) => {

  const handleChange = event => {
    event.preventDefault();
  };

 
  return(
      <div className='homepage'>
       

          <h1>Hello HomePage!!</h1>
          <div className='button' onChange={handleChange} onClick={()=> setLoginUser({})}>Logout</div>
      </div>
  ) 
};

export default Homepage;
