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
import AllMostPopularHotelsPage from "../pages/AllMostPopularHotelsPage/AllMostPopularHotelsPage";
import AllTwentyFourHoursHotelsPage from "../pages/AllTwentyFourHoursHotelsPage/AllTwentyFourHoursHotelsPage";
import AllRecommandedHotelsPage from "../pages/AllRecommandedHotelsPage/AllRecommandedHotelsPage";
import UserVerificationAfterLoginPage from "../pages/UserVerificationAfterLoginPage/UserVerificationAfterLoginPage";
import NotFoundPage from "../pages/404NotFoundPage/NotFoundPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import OrderDetailsDescriptionPage from "../pages/OrderDetailsDescriptionPage/OrderDetailsDescriptionPage";
import ReferRewardsPage from "../pages/ReferRewardsPage/ReferRewardsPage";
import ReferEarnHistoryPage from "../pages/ReferHistoryPage/ReferEarnHistoryPage";
import ReferPendingHistoryPage from "../pages/ReferHistoryPage/ReferPendingHistoryPage";
import AllPopularCityPage from "../pages/AllPopularCityPage/AllPopularCityPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/roomDetails/:room_id"
                           render={(props) => <RoomDetailsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/hotel-details/:slug_name"
                           render={(props) => <HotelDetailsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/hotel-per-city/:city_id/:city_name"
                           render={(props) => <CityHotelPage {...props} key={Date.now()}/>}/>

                    <Route exact path="/hotel-search/:SearchKey" render={(props) => <HomeSearchPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/cartList" render={(props) => <CartListPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/room-booking"
                           render={(props) => <RoomBookingPage {...props} key={Date.now()}/>}/>

                    <Route exact path="/user-login" render={(props) => <LoginPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/sign-up" render={(props) => <RegistrationPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/user-verification"
                           render={(props) => <UserVerificationPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/user-verification-after-login"
                           render={(props) => <UserVerificationAfterLoginPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/forget-password"
                           render={(props) => <ForgetPasswordPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/forget-password-verify"
                           render={(props) => <ForgetPasswordVerifyPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/forgot-password-set"
                           render={(props) => <ForgotPasswordSetPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/change-password"
                           render={(props) => <ChangePasswordPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/profile" render={(props) => <ProfilePage {...props} key={Date.now()}/>}/>
                    <Route exact path="/editProfile"
                           render={(props) => <EditProfilePage {...props} key={Date.now()}/>}/>

                    <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/notification"
                           render={(props) => <NotificationPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/helpCenter" render={(props) => <HelpCenterPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/press" render={(props) => <PressPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/support" render={(props) => <SupportPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/terms" render={(props) => <TermsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/guestPolicies"
                           render={(props) => <GuestPoliciesPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()}/>}/>

                    <Route exact path="/all-most-popular-hotels"
                           render={(props) => <AllMostPopularHotelsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/all-twenty-four-hotels"
                           render={(props) => <AllTwentyFourHoursHotelsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/all-recommended-hotels"
                           render={(props) => <AllRecommandedHotelsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/all-popular-city"
                           render={(props) => <AllPopularCityPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/order" render={(props) => <OrderDetailsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/order-details/:booking_id"
                           render={(props) => <OrderDetailsDescriptionPage {...props} key={Date.now()}/>}/>

                    <Route exact path="/refer-rewards"
                           render={(props) => <ReferRewardsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/refer-earn-history"
                           render={(props) => <ReferEarnHistoryPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/refer-pending-history"
                           render={(props) => <ReferPendingHistoryPage {...props} key={Date.now()}/>}/>

                    <Route path="" component={NotFoundPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;