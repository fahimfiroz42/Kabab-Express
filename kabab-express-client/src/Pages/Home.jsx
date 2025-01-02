import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import BistroBanner from "../Components/BistroBanner";
import Category from "../Components/Category";
import FromOurMenu from "../Components/FromOurMenu";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kabab Express | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <BistroBanner/>
            <Menu/>
            <FromOurMenu/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;