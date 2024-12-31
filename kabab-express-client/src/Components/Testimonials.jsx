import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination} from 'swiper/modules';



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
       fetch('reviews.json')
       .then(res=>res.json())
       .then(data=>setReviews(data)) 
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <Heading heading={"TESTIMONIALS"} subheading={"What our customers say"}  />
            </div>
            <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
            reviews.map(review=>{

                const {name, details, rating}=review
                return(
                    <SwiperSlide key={review._id}>

                        <div className='text-center p-20'>


                         <h1 className='text-6xl flex justify-center'><FaQuoteLeft /></h1>
                            
                        <h1 className='text-3xl font-bold text-yellow-500'>{name}</h1>
                        <p className='text-xl'>{details}</p>
                        </div>




                   </SwiperSlide>

                )
            })
        }
      </Swiper>
            </div>
            
        </div>
    );
};

export default Testimonials;
<div>
    <Heading  />
</div>