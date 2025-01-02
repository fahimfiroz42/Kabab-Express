import { Helmet } from "react-helmet-async";
import SectionCover from "../Components/SectionCover";
import img1 from '../assets/menu/banner3.jpg';
import useMenu from "../hooks/useMenu";
import Heading from "../Components/Heading";
import MenuCard from "../Components/MenuCard";
import img2 from '../assets/menu/dessert-bg.jpeg'
import img3 from '../assets/menu/pizza-bg.jpg'
import img4 from '../assets/menu/salad-bg.jpg'
import img5 from '../assets/menu/soup-bg.jpg'



const Menu = () => {
    const [menu]=useMenu()

    const offerMenu=menu.filter(item=>item.category==="offered")
    const desstertMenu=menu.filter(item=>item.category==="dessert")
    const pizzaMenu=menu.filter(item=>item.category==="pizza")
    const saladMenu=menu.filter(item=>item.category==="salad")
    const soupMenu=menu.filter(item=>item.category==="soup")

  



    return (
        <div>
            <Helmet>
                <title>Kabab Express | Menu</title>
            </Helmet>

            <SectionCover img={img1} heading={"OUR MENU"} subheading={"Would you like to try a dish?"}/>
            <Heading heading={"Today's Offer"} subheading={"Don't miss it"}></Heading>
            <div className='grid md:grid-cols-2 gap-10 mb-20 w-11/12 mx-auto'>
                {
                    offerMenu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 
            </div>
            <SectionCover img={img2} heading={"DESSERTS"} subheading={"This is our desert section. You can't miss it.You will love it.  "}/>

            <div className='grid md:grid-cols-2 gap-10 mb-20 w-11/12 mx-auto mt-20'>
                {
                    desstertMenu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 
            </div>

            <SectionCover img={img3} heading={"PIZZA"} subheading={"This is our pizza section. You can't miss it.You will love it.  "}/>

            <div className='grid md:grid-cols-2 gap-10 mb-20 w-11/12 mx-auto mt-20'>
                {
                    pizzaMenu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 
            </div>

            <SectionCover img={img4} heading={"SALAD"} subheading={"This is our salad section. You can't miss it.You will love it.  "}/>
            <div className='grid md:grid-cols-2 gap-10 mb-20 w-11/12 mx-auto mt-20'>
                {
                    saladMenu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 
            </div>

            <SectionCover img={img5} heading={"SOUP"} subheading={"This is our soup section. You can't miss it.You will love it.  "}/>
            <div className='grid md:grid-cols-2 gap-10 mb-20 w-11/12 mx-auto mt-20'>
                {
                    soupMenu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 
            </div>




            



            
        </div>
    );
};

export default Menu;