import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import RoomBooking from "../../component/RoomBooking/RoomBooking";
import Footer from "../../component/common/footer/Footer";

class RoomBookingPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <RoomBooking/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RoomBookingPage;