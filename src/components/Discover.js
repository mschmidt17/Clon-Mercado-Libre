import React from 'react';
import "./CSS/discover.css";


function Discover({data, title}) {

  return (
    <div className="container-discover">
      <div className="discover-top">
        <h2 className="discover-title"> {title} </h2>
      </div>

      <div className='container-row'>
        {data?.map((e) => {return(
          
          <div className='discover-card'>
            <div className='discover-text'>
              <h6 className='discover-cat'> NAVIDAD{e.category} </h6>
              <h2 className='discover-promo'> {e.text} </h2>
              <button className='discover-btn'> Ver más </button>
            </div>

            <img src={e.image} className="discover-img" alt="product"/>
          </div>
        )})}
      </div>

    </div>
  );
}

export default Discover;