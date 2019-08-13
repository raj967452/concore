import React from 'react';
import { NavLink } from "react-router-dom";

import '../../scss/notFound.scss';
import broken from '../../assets/images/broken_image.gif';

function NotFound(props) {
  return (
    <div className="page-container">
      <div className="bg" style={{ backgroundImage: 'url(' + broken + ')' }}></div>      
      <h1 className="title">
        <span>404</span>
        <NavLink to="/" className="link">Back to Home</NavLink >
      </h1>
    </div>
  )
}

export default NotFound;