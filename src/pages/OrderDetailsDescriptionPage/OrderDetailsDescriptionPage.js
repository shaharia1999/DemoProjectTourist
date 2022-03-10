import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import OrderDetailsDescription from "../../component/OrderDetailsDescription/OrderDetailsDescription";
import Footer from "../../component/common/footer/Footer";
import {Redirect} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";

class OrderDetailsDescriptionPage extends Component {
    constructor({match}) {
        super();
        this.state={
            booking_id:match.params.booking_id,
            RedirectStatus:false,
        }
    }

    pageRedirect=()=>{
        if (this.state.RedirectStatus===true){
            return(
                <Redirect to="/user-login" />
            )
        }
    }

    componentDidMount() {
        window.scroll(0,0);
        let UserID=SessionHelper.GetUserID();
        if (UserID===null){
            this.setState({RedirectStatus:true})
        }
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <OrderDetailsDescription booking_id={this.state.booking_id}/>
                <Footer/>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default OrderDetailsDescriptionPage;