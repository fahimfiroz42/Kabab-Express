import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from'../assets/home/slide1.jpg'
import img2 from'../assets/home/slide2.jpg'
import img3 from'../assets/home/slide3.jpg'
import img4 from'../assets/home/slide4.jpg'
import img5 from'../assets/home/slide5.jpg'




// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Heading from './Heading';
const Category = () => {
    return (
        <>
        <div>
            <Heading    heading="ORDER ONLINE" subheading="From 11:00am to 10:00pm"/>
        </div>
        <div className='w-11/12 mx-auto mb-10'>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" />
        <h1 className='text-2xl font-bold text-center  -mt-10'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        
        <h1 className='text-2xl font-bold text-center -mt-10'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <h1 className='text-2xl font-bold text-center -mt-10'>Cofee</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <h1 className='text-2xl font-bold text-center -mt-10'>Pastry</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
        
        <h1 className='text-2xl font-bold text-center -mt-10'>Mixed Salad</h1>
        </SwiperSlide>
        
      </Swiper>
            
        </div>
        
        </>
        
    );
};

export default Category;