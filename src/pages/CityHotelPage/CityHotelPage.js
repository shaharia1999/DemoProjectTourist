import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HotelPerCity from "../../component/HotelPerCity/HotelPerCity";
import Footer from "../../component/common/footer/Footer";

class CityHotelPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HotelPerCity/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CityHotelPage;