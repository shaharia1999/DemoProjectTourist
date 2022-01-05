class ApiUrl{
    static BaseUrl1="http://13.52.81.125:8000";
    //API URL START
    static BaseUrl="http://13.52.81.125:8000/api/";
    static Registration=this.BaseUrl+"user/";  // done
    static UserLogin=this.BaseUrl+"user-login/";

    static TwentyFourDealRoom=this.BaseUrl+"room-deals/";  //done
    static AllHotel=this.BaseUrl+"hotel_details/";  //done
    static HomeCity=this.BaseUrl+"city/";  //done
    static RecommendedHotel=this.BaseUrl+"recommended-hotels/"; //done


    static Contact=this.BaseUrl+"contact/";
}
export default ApiUrl;
