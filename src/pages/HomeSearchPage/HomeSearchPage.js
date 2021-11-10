import React, {Component,Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection"
import HomeSearchMain from "../../component/HomeSearchMain/HomeSearchMain"
import Footer from "../../component/common/footer/Footer"

class HomeSearchPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

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