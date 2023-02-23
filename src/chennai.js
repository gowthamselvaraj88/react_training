import React from 'react';
import Thankuchennai from './thankuchennai';
import Welcomechennai from './welcomechennai';



function Chennai(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Welcomechennai />;
    }
    return <Thankuchennai />;
  }
  
export default Chennai;