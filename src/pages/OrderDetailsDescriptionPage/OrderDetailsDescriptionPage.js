import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import OrderDetailsDescription from "../../component/OrderDetailsDescription/OrderDetailsDescription";
import Footer from "../../component/common/footer/Footer";

class OrderDetailsDescriptionPage extends Component {
    constructor({match}) {
        super();
        this.state={
            booking_id:match.params.booking_id,
        }
    }
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <OrderDetailsDescription booking_id={this.state.booking_id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OrderDetailsDescriptionPage;