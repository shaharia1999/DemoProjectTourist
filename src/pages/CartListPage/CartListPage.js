import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import CartList from "../../component/cartList/CartList";
import Footer from "../../component/common/footer/Footer";

class CartListPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <CartList/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CartListPage;