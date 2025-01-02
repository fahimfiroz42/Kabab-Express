
import { useEffect, useState } from 'react';
import Heading from './Heading';
import MenuCard from './MenuCard';
import useMenu from '../hooks/useMenu';


const Menu = () => {
    const [menu]=useMenu()

      const filterMenu=menu.filter(item=>item.category==="popular")

      
     

   

    return (
        <div className="w-11/12 mx-auto">

            <div>
                <Heading heading="FROM OUR MENU" subheading="Check it out" />
            </div>

            <div className='grid md:grid-cols-2 gap-10 mb-20'>
                {
                    filterMenu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 

            </div>
            
        </div>
    );
};

export default Menu;