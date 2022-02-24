import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import OrderDetails from "../../component/OrderDetails/OrderDetails";
import Footer from "../../component/common/footer/Footer";

class OrderDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <OrderDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OrderDetailsPage;