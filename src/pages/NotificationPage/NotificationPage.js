import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Notification from "../../component/other/Notofication/Notification";
class NotificationPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Notification/>
                <Footer/>
            </Fragment>
        );
    }
}
export default NotificationPage;
