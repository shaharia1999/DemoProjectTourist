import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import HotelDetails from "../../component/hotelDetails/HotelDetails";
import HotelDescription from "../../component/hotelDetails/HotelDescription";
import RelatedRoom from "../../component/hotelDetails/RelatedRoom";

class HotelDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            slug_name:match.params.slug_name,
        }
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HotelDetails slug_name={this.state.slug_name}/>

               {/* <HotelDescription/>*/}
             {/*   <RelatedRoom/>*/}
                <Footer/>
            </Fragment>
        );
    }
}

export default HotelDetailsPage;