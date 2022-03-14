import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import AllMostPopularHotels from "../../component/AllMostPopularHotels/AllMostPopularHotels";
import Footer from "../../component/common/footer/Footer";

class AllMostPopularHotelsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <AllMostPopularHotels/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllMostPopularHotelsPage;