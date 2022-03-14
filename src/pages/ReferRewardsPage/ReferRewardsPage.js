import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import ReferRewards from "../../component/ReferRewards/ReferRewards";

class ReferRewardsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ReferRewards/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ReferRewardsPage;