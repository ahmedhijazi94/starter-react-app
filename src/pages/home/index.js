import React from 'react';
import {Link} from 'react-router-dom';
const Home = () =>{
  return(
    <>
    <h1>Main page</h1>
    <Link to="/users">Users</Link>
    </>
  )
}

export default Home;