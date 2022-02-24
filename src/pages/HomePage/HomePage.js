import React, {Component, Fragment} from 'react';
import Footer from "../../component/common/footer/Footer";
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HomeSearch from "../../component/home/HomeSearch/HomeSearch";
import HomeBanner from "../../component/home/HomeBanner/HomeBanner";
import HotelStatistics from "../../component/home/HotelStatistics/HotelStatistics";
import WhyChoose from "../../component/home/WhyChoose/WhyChoose";
import TwentyFourHoursDeal from "../../component/home/TwentyFourHoursDeal/TwentyFourHoursDeal";
import MostPopularHotel from "../../component/home/MostPopularHotel/MostPopularHotel";
import PopularCity from "../../component/home/PopularCity/PopularCity";
import RecommendedHotel from "../../component/home/RecommendedHotel/RecommendedHotel";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
/*import Cookies from 'universal-cookie';
const cookies = new Cookies();*/

class HomePage extends Component {
    constructor() {
        super();
        this.state={
            session_value:localStorage.getItem('session_value'),
            session_key: localStorage.getItem('session_key'),
            // session_value:cookies.get('session_value'),
            // session_key: cookies.get('session_key'),
        }
        console.log('session session_key = ', this.state.session_key);
        console.log('session value = ', this.state.session_value);
    }


    sessionMethod=()=>{
        if (this.state.session_key){

        }
        else {
            axios.get(ApiURL.SessionCreate).then(response=> {
                if (response.data.error===false){
                    localStorage.setItem('session_value',response.data.session_id);
                    localStorage.setItem('session_key',response.data.session_key);
                    let addToCart = [];
                    localStorage.setItem('AddToCart',JSON.stringify(addToCart));
                    // cookies.set('session_value', response.data.session_id);
                    // cookies.set('session_key', response.data.session_key);
                }

            }).catch(error=> {

            });
        }
    }


     componentDidMount() {
         window.scroll(0,0);
         this.sessionMethod();
     }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HomeSearch/>
                <HomeBanner/>
                <TwentyFourHoursDeal/>
                <MostPopularHotel/>
                <PopularCity/>
                <RecommendedHotel/>
                <HotelStatistics/>
                <WhyChoose/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;