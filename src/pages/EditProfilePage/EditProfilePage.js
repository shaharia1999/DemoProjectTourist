import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import EditProfile from "../../component/profile/EditProfile";
import Footer from "../../component/common/footer/Footer";

class EditProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <EditProfile/>
                <Footer/>
            </Fragment>
        );
    }
}

export default EditProfilePage;