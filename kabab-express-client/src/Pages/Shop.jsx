
import { Helmet } from 'react-helmet-async';
import SectionCover from '../Components/SectionCover';
import img1 from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Kabab Express | Shop</title>

            </Helmet>
            <SectionCover  img={img1} heading={'OUR SHOP'} subheading={'Would you like to try a dish?'}  />

           <div className='w-10/12 mx-auto text-center my-20 '>

           <Tabs>
    <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZA</Tab>
      <Tab>SOUPS</Tab>
      <Tab>DESSERTS</Tab>
      <Tab>DRINKS</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
          </Tabs>

           </div>




            
        </div>
    );
};

export default Shop;