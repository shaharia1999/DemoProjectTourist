import React, {Component, Fragment} from 'react';
import Footer from "../../component/common/footer/Footer";
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HomeSearch from "../../component/home/HomeSearch/HomeSearch";
import HomeBanner from "../../component/home/HomeBanner/HomeBanner";
import HotelStatistics from "../../component/home/HotelStatistics/HotelStatistics";
import WhyChoose from "../../component/home/WhyChoose/WhyChoose";
import TwentyFourHoursDeal from "../../component/home/TwentyFourHoursDeal/TwentyFourHoursDeal";


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HomeSearch/>
                <HomeBanner/>
                <TwentyFourHoursDeal/>
                <HotelStatistics/>
                <WhyChoose/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;