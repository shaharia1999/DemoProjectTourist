import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HotelPerCity from "../../component/HotelPerCity/HotelPerCity";
import Footer from "../../component/common/footer/Footer";

class CityHotelPage extends Component {
    constructor({match}) {
        super();
        this.state={
            city_id:match.params.city_id,
        }
    }


    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HotelPerCity city_id={this.state.city_id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CityHotelPage;