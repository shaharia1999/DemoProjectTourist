import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Profile from "../../component/profile/Profile";
import Footer from "../../component/common/footer/Footer";

class ProfilePage extends Component {
    constructor({match}) {
        super();
        this.state={
            user_id:match.params.user_id,
        }
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Profile user_id={this.state.user_id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProfilePage;