import Banner from "../Components/Banner";
import BistroBanner from "../Components/BistroBanner";
import Category from "../Components/Category";
import FromOurMenu from "../Components/FromOurMenu";
import Menu from "../Components/Menu";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBanner/>
            <Menu/>
            <FromOurMenu/>
            
        </div>
    );
};

export default Home;