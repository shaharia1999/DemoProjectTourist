import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import CartList from "../../component/cartList/CartList";
import Footer from "../../component/common/footer/Footer";
import CartListPlaceholder from "../../component/placeholder/CartListPlaceholder";

class CartListPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <CartList/>
                <CartListPlaceholder/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CartListPage;