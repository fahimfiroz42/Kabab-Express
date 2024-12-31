import Banner from "../Components/Banner";
import BistroBanner from "../Components/BistroBanner";
import Category from "../Components/Category";
import Menu from "../Components/Menu";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBanner/>
            <Menu/>
            
        </div>
    );
};

export default Home;