
import { useEffect, useState } from 'react';
import Heading from './Heading';
import MenuCard from './MenuCard';


const Menu = () => {

    const [menu,setMenu]= useState([])
   useEffect(()=>{


    fetch('menu.json')
    .then(res=>res.json())
    .then(data=>{
      const filterMenu=data.filter(item=>item.category==="popular")
      setMenu(filterMenu)

    }


    )

   },[])
   

    return (
        <div className="w-11/12 mx-auto">

            <div>
                <Heading heading="FROM OUR MENU" subheading="Check it out" />
            </div>

            <div className='grid md:grid-cols-2 gap-10 mb-20'>
                {
                    menu.map(item=><MenuCard    key={item._id} item={item}/>)
                }
                 

            </div>
            
        </div>
    );
};

export default Menu;