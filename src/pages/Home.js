import Navbar from "../componets/Navbar";
import Announcement from "../componets/Announcement";
import Slider from "../componets/Slider";
import Categories from "../componets/Categories";
import Products from "../componets/Products";
import Newsletter from "../componets/Newsletter";
import Footer from "../componets/Footer";

const Home = ()=>{
    return (
        <div>
            <Announcement />
            <Navbar/>
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
};

export default Home;