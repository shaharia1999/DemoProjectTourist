import React, {Component, Fragment} from 'react';
import Footer from "../../component/common/footer/Footer";
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HomeSearch from "../../component/home/HomeSearch/HomeSearch";
import HomeBanner from "../../component/home/HomeBanner/HomeBanner";
import HotelStatistics from "../../component/home/HotelStatistics/HotelStatistics";
import WhyChoose from "../../component/home/WhyChoose/WhyChoose";
import TwentyFourHoursDeal from "../../component/home/TwentyFourHoursDeal/TwentyFourHoursDeal";
import MostPopularHotel from "../../component/home/MostPopularHotel/MostPopularHotel";
import PopularCity from "../../component/home/PopularCity/PopularCity";
import RecommendedHotel from "../../component/home/RecommendedHotel/RecommendedHotel";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HomeSearch/>
                <HomeBanner/>
                <TwentyFourHoursDeal/>
                <MostPopularHotel/>
                <PopularCity/>
                <RecommendedHotel/>
                <HotelStatistics/>
                <WhyChoose/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;