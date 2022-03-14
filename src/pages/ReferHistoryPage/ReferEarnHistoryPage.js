import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import ReferEarnHistory from "../../component/ReferHistory/ReferEarnHistory";

class ReferEarnHistoryPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ReferEarnHistory/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ReferEarnHistoryPage;