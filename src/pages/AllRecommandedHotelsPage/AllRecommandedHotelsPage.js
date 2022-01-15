import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import AllRecommandedHotels from "../../component/AllRecommandedHotels/AllRecommandedHotels";
import Footer from "../../component/common/footer/Footer";

class AllRecommandedHotelsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <AllRecommandedHotels/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllRecommandedHotelsPage;