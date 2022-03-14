import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import CartList from "../../component/cartList/CartList";
import Footer from "../../component/common/footer/Footer";

class CartListPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
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