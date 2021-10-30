import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Profile from "../../component/profile/Profile";
import Footer from "../../component/common/footer/Footer";

class ProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Profile/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProfilePage;