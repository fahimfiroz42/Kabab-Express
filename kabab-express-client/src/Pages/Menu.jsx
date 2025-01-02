import { Helmet } from "react-helmet-async";
import SectionCover from "../Components/SectionCover";
import img1 from '../assets/menu/banner3.jpg';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Kabab Express | Menu</title>
            </Helmet>

            <SectionCover img={img1} heading={"OUR MENU"} subheading={"Would you like to try a dish?"}/>

            
        </div>
    );
};

export default Menu;