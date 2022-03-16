import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import AllPopularCity from "../../component/AllPopularCity/AllPopularCity";

class AllPopularCityPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <AllPopularCity/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllPopularCityPage;