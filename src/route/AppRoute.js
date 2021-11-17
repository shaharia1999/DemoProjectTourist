import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import TermsPage from "../pages/TermsPage/TermsPage";
import RefundPage from "../pages/RefundPage/RefundPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import HelpCenterPage from "../pages/HelpCenterPage/HelpCenterPage";
import PressPage from "../pages/PressPage/PressPage";
import RoomDetailsPage from "../pages/RoomDetailsPage/RoomDetailsPage";
import HotelDetailsPage from "../pages/hotelDetailsPage/hotelDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CityHotelPage from "../pages/CityHotelPage/CityHotelPage";
import SupportPage from "../pages/SupportPage/SupportPage";
import GuestPoliciesPage from "../pages/GuestPoliciesPage/GuestPoliciesPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage/ForgetPasswordPage";
import ForgetPasswordVerifyPage from "../pages/ForgetPasswordVerifyPage/ForgetPasswordVerifyPage";
import ForgotPasswordSetPage from "../pages/forgotPasswordSetPage/forgotPasswordSetPage";
import ChangePasswordPage from "../pages/ChangePasswordPage/ChangePasswordPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import CartListPage from "../pages/CartListPage/CartListPage";
import UserVerificationPage from "../pages/UserVerificationPage/UserVerificationPage";
import HomeSearchPage from "../pages/HomeSearchPage/HomeSearchPage";
import RoomBookingPage from "../pages/RoomBookingPage/RoomBookingPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />}/>

                    <Route exact path="/roomDetails" render={(props) => <RoomDetailsPage {...props} key={Date.now()} />}/>
                    <Route exact path="/hotelDetails" render={(props) => <HotelDetailsPage {...props} key={Date.now()} />}/>
                    <Route exact path="/hotelPerCity" render={(props) => <CityHotelPage {...props} key={Date.now()} />}/>

                    <Route exact path="/homeSearch" render={(props) => <HomeSearchPage {...props} key={Date.now()} />}/>
                    <Route exact path="/cartList" render={(props) => <CartListPage {...props} key={Date.now()} />}/>
                    <Route exact path="/roomBooking" render={(props) => <RoomBookingPage {...props} key={Date.now()} />}/>

                    <Route exact path="/userLogin" render={(props) => <LoginPage {...props} key={Date.now()} />}/>
                    <Route exact path="/signUp" render={(props) => <RegistrationPage {...props} key={Date.now()} />}/>
                    <Route exact path="/userVerification" render={(props) => <UserVerificationPage {...props} key={Date.now()} />}/>
                    <Route exact path="/forgetPassword" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />}/>
                    <Route exact path="/forgetPasswordVerify" render={(props) => <ForgetPasswordVerifyPage {...props} key={Date.now()} />}/>
                    <Route exact path="/forgotPasswordSet" render={(props) => <ForgotPasswordSetPage {...props} key={Date.now()} />}/>
                    <Route exact path="/changePassword" render={(props) => <ChangePasswordPage {...props} key={Date.now()} />}/>

                    <Route exact path="/profile" render={(props) => <ProfilePage {...props} key={Date.now()} />}/>
                    <Route exact path="/editProfile" render={(props) => <EditProfilePage {...props} key={Date.now()} />}/>

                    {/*Other Route*/}
                    <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />}/>
                    <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />}/>
                    <Route exact path="/helpCenter" render={(props) => <HelpCenterPage {...props} key={Date.now()} />}/>
                    <Route exact path="/press" render={(props) => <PressPage {...props} key={Date.now()} />}/>
                    <Route exact path="/support" render={(props) => <SupportPage {...props} key={Date.now()} />}/>
                    <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />}/>
                    <Route exact path="/terms" render={(props) => <TermsPage {...props} key={Date.now()} />}/>
                    <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />}/>
                    <Route exact path="/guestPolicies" render={(props) => <GuestPoliciesPage {...props} key={Date.now()} />}/>
                    <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;