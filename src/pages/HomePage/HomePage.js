import React, {Component, Fragment} from 'react';
import Footer from "../../component/common/footer/Footer";
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HomeSearch from "../../component/home/HomeSearch/HomeSearch";
import HomeBanner from "../../component/home/HomeBanner/HomeBanner";


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HomeSearch/>
                <HomeBanner/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;