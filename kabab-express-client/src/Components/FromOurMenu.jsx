
import img1 from '../assets/home/featured.jpg'
import Heading from './Heading';

const FromOurMenu = () => {
    return (
        <div className='w-11/12 mx-auto mb-20'>
            <div
  className="hero m"

  style={{
    backgroundImage: `url(${img1})`,
    backgroundAttachment:'fixed'
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-4xl">
        <Heading heading={"FROM OUR MENU"} subheading={"Check it out"}/>

        <div className='flex gap-10 mb-20 items-center'>
            <div>
                <img src={img1} alt="" />

            </div>
            <div>
                <p>March 20, 2023</p>
                <h1 className='text-xl font-bold'>WHERE CAN I GET SOME?</h1>
                <p className='text-gray-300'>This is a resturent website. This is a resturent website. This is a resturent website.
                Its a resturent website.Now you can order your favorite food.From this website you can order your favorite food.And this is a resturent website.

                </p>
                <button className='border-b-4 rounded-xl p-2 font-bold hover:text-yellow-400 hover:border-yellow-400 hover:scale-110 duration-300
  bg-transparent'
                >Read More</button>

            </div>
        </div>
      
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default FromOurMenu;