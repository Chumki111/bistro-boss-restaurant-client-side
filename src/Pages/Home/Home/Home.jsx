import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Features from "../Features/Features";
import OrderSlider from "../OrderSlider/OrderSlider";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderSlider></OrderSlider>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Features></Features>
        </div>
    );
};

export default Home;