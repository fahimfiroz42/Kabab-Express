
import { Helmet } from 'react-helmet-async';
import SectionCover from '../Components/SectionCover';
import img1 from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useMenu from '../hooks/useMenu';
import FoodCard from '../Components/FoodCard';

const Shop = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Kabab Express | Shop</title>
            </Helmet>
            <SectionCover img={img1} heading={'OUR SHOP'} subheading={'Would you like to try a dish?'} />

            <div className='w-11/12 mx-auto text-center my-20 '>
                <Tabs>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};




            
        </div>
    );
};

export default Shop;