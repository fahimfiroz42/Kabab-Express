import React from 'react';
import img1 from '../assets/home/chef-service.jpg'

const BistroBanner = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div
  className="hero "
  style={{
    backgroundImage: `url(${img1})`,
    backgroundAttachment:'fixed'
  }}>
 
  <div className="hero-content  text-center py-28">
    <div className="max-w-4xl bg-white py-20 px-10 ">
      <h1 className="mb-5  text-5xl font-bold uppercase">Kabab Express</h1>
      <p className="mb-5 text-gray-400">
       This is a resturent website. This is a resturent website. This is a resturent website.
       Its a resturent website.Now you can order your favorite food.From this website you can order your favorite food.And this is a resturent website.
      </p>
    
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BistroBanner;