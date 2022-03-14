class ApiUrl {
    /*  static BaseUrl1 = "http://13.52.81.125:8000";*/
    static BaseUrl1 = "http://3.82.148.255";

    //API URL START
    static BaseUrl = "http://3.82.148.255/api/";
    /* static BaseUrl = "http://3.82.148.255/api/";*/
    /*   static BaseUrl = "http://13.52.81.125:8000/api/";*/
    static Registration = this.BaseUrl + "user/";    // User Registration api done
    static UserLogin = this.BaseUrl + "user-login/";    // User Login api done
    static otpSend = this.BaseUrl + "otp-verify/";    // Otp Send api done
    static otpSendLogin = this.BaseUrl + "otp-verify/";    // Login Otp api done
    static otpResend = this.BaseUrl + "otp-resend/";    // Otp Resend After Registration api done
    static changePassword = this.BaseUrl + "change-user-password/";   // Change Password api done
    static ResetPasswordForMobile = this.BaseUrl + "reset-password/";  //Reset Password for send Mobile Number
    static ResetConfirmPasswordSet = this.BaseUrl + "reset-confirm-password/";  // Reset Password for send Mobile Number
    static UserProfileView = this.BaseUrl + "user/";  // User Profile api done

    static TwentyFourDealRoom = this.BaseUrl + "room-deals/";    // Home Twenty Four Deal Room done
    static AllHotel = this.BaseUrl + "hotel_details/";     // Home most popular done
    static HomeCity = this.BaseUrl + "city/";     // Home city api call done
    static City = this.BaseUrl + "city/";     // Home city api call done
    static RecommendedHotel = this.BaseUrl + "recommended-hotels/";   // Home recommended hotel done
    static SingleRoom = this.BaseUrl + "single-room/";    // 24 hotel deals room details done
    static SingleHotelDetails = this.BaseUrl + "single-hotel-details/";   // Most Popular hotel details & Recommended hotel details api done
    static HotelByCity = this.BaseUrl + "hotel-by-city/?city_id=";   // Hotel By City Home Page to all Hotel & Hotel Details

    static Country = this.BaseUrl + "country/"  // country api call done
    static State = this.BaseUrl + "state/" // state api call done
    static CountryByState = this.BaseUrl + "state_by_country/"
    static StateByCityUrl = this.BaseUrl + "city_by_state/"  // state by city api call done

    static OrderList = this.BaseUrl + "booking-details/?user_id="  // Order list api call done
    static OrderDetails = this.BaseUrl + "booking-details/"  // Order list api call done

    // static SessionCreate = this.BaseUrl + "session-create/";  
    // static CartsCreate = this.BaseUrl + "carts/";
    
    static UserCartIdCheck = this.BaseUrl + "user-cart-id-check/"; 
    static AddToCartRoomDetails = this.BaseUrl + "add-to-cart-room/";

    static MyWalletEarned = this.BaseUrl + "my-earned/";  //Total Earn & Pending Api call done
    static MyReferWalletHistory = this.BaseUrl + "my-earned-history/"; // Earn & Pending Api call done

    static Contact = this.BaseUrl + "contact/";
}

export default ApiUrl;
