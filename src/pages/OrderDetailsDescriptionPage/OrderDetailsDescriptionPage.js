import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import OrderDetailsDescription from "../../component/OrderDetailsDescription/OrderDetailsDescription";
import Footer from "../../component/common/footer/Footer";

class OrderDetailsDescriptionPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <OrderDetailsDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OrderDetailsDescriptionPage;