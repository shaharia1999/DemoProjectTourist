import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import RoomDetails from "../../component/roomDetails/RoomDetails";
import RoomDescription from "../../component/roomDetails/RoomDescription";
import Footer from "../../component/common/footer/Footer";

class RoomDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <RoomDetails/>
                <RoomDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RoomDetailsPage;