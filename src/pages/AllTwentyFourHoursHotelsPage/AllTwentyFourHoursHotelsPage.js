import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import AllTwentyFourHoursHotels from "../../component/AllTwentyFourHoursHotels/AllTwentyFourHoursHotels";

class AllTwentyFourHoursHotelsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <AllTwentyFourHoursHotels/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllTwentyFourHoursHotelsPage;
