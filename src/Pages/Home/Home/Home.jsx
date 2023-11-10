import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Features from "../Features/Features";
import OrderSlider from "../OrderSlider/OrderSlider";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonals from "../Testimonals/Testimonals";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderSlider></OrderSlider>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Features></Features>
            <Testimonals></Testimonals>
        </div>
    );
};

export default Home;