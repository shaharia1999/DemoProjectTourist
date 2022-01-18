class ApiUrl{
    static BaseUrl1="http://13.52.81.125:8000";
    //API URL START
    static BaseUrl="http://13.52.81.125:8000/api/";
    static Registration=this.BaseUrl+"user/";  // done
    static UserLogin=this.BaseUrl+"user-login/";  // done
    static otpSend=this.BaseUrl+"otp-verify/";
    static otpSendLogin=this.BaseUrl+"otp-verify/";
    static changePassword=this.BaseUrl+"change-user-password/";   // done

    static TwentyFourDealRoom=this.BaseUrl+"room-deals/";    //Home Twenty Four Deal Room done
    static AllHotel=this.BaseUrl+"hotel_details/";     //Home most popular done
    static HomeCity=this.BaseUrl+"city/";     //Home city api call done
    static RecommendedHotel=this.BaseUrl+"recommended-hotels/";   //Home recommended hotel done
    static SingleRoom=this.BaseUrl+"single-room/";    //24 hotel deals room details done

    static Contact=this.BaseUrl+"contact/";
    static ResetPasswordForMobile=this.BaseUrl+"v1/reset-password/";  //Reset Password for send Mobile Number
}
export default ApiUrl;
