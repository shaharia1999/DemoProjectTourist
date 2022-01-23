class ApiUrl{
    static BaseUrl1="http://13.52.81.125:8000";

    //API URL START
    static BaseUrl="http://13.52.81.125:8000/api/";
    static Registration=this.BaseUrl+"user/";    // User Registration api done
    static UserLogin=this.BaseUrl+"user-login/";    // User Login api done
    static otpSend=this.BaseUrl+"otp-verify/";    // Otp Send api done
    static otpSendLogin=this.BaseUrl+"otp-verify/";    // Login Otp api done
    static changePassword=this.BaseUrl+"change-user-password/";   // Change Password api done
    static ResetPasswordForMobile=this.BaseUrl+"reset-password/";  //Reset Password for send Mobile Number
    static ResetConfirmPasswordSet=this.BaseUrl+"reset-confirm-password/";  // Reset Password for send Mobile Number

    static TwentyFourDealRoom=this.BaseUrl+"room-deals/";    // Home Twenty Four Deal Room done
    static AllHotel=this.BaseUrl+"hotel_details/";     // Home most popular done
    static HomeCity=this.BaseUrl+"city/";     // Home city api call done
    static RecommendedHotel=this.BaseUrl+"recommended-hotels/";   // Home recommended hotel done
    static SingleRoom=this.BaseUrl+"single-room/";    // 24 hotel deals room details done
    static SingleHotelDetails=this.BaseUrl+"hotel_details/";   // Most Popular hotel details & Recommended hotel details api done

    static HotelByCity=this.BaseUrl+"hotel-by-city/?city_id=";   // Hotel By City Home Page to all Hotel & Hotel Details

    static SessionCreate=this.BaseUrl+"session-create/";    // 24 hotel deals room details done
    static CartsCreate=this.BaseUrl+"carts/";
    static AddToCartRoomDetails=this.BaseUrl+"add-to-cart-room/"; //

    static Contact=this.BaseUrl+"contact/";

}
export default ApiUrl;
