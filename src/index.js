import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='cards'>
      <div className='card'>
        <img src='' alt='myPic' className='card_img'></img>
        <div className='card_info'>
          <span className='card_category'></span>
          <h3 className='card_title'></h3>
          <a href='' target="_blank">
            <button>Watc Now</button>
          </a>
        </div>
      </div>
    </div>
  </>
);


