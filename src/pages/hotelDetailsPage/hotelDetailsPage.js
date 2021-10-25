import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import HotelDetails from "../../component/hotelDetails/HotelDetails";
import HotelDescription from "../../component/hotelDetails/HotelDescription";
import RelatedRoom from "../../component/hotelDetails/RelatedRoom";

class HotelDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HotelDetails/>
                <HotelDescription/>
                <RelatedRoom/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HotelDetailsPage;