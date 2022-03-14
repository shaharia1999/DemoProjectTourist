import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import ReferPendingHistory from "../../component/ReferHistory/ReferPendingHistory";

class ReferPendingHistoryPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ReferPendingHistory/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ReferPendingHistoryPage;