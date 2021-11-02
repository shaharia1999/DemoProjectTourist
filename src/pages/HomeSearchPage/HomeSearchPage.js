import React, {Component,Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection"
import HomeSearchMain from "../../component/HomeSearchMain/HomeSearchMain"
import Footer from "../../component/common/footer/Footer"

class HomeSearchPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HomeSearchMain/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomeSearchPage;