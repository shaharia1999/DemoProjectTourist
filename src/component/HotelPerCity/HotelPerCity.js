import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {IoMdPin} from "react-icons/all";
import {FaStar} from "react-icons/fa";
import {Image} from "react-bootstrap";
import ApiURL from "../../api/ApiURL";
import axios from "axios";

class HotelPerCity extends Component {
    constructor(props) {
        super(props);
        this.state={
            city_id: props.city_id,
            CityData:[],
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.HotelByCity+this.state.city_id).then(response=>{
            if (response.data.error===false){
                this.setState({
                    CityData:response.data.data,
                });
            }
        }).catch(error=> {

        });
    }

    render() {
        const MyList=this.state.CityData;
        const MyView=MyList.map((CityList,i)=> {
             return <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3" key={i}>
                 <Link to={"/hotel-details/" + CityList.slug_name} className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                     <Image className="mostPopularHotelImage" src={ApiURL.BaseUrl1 + CityList.image_url[0]['Image']} alt="Photo of sunset"/>
                     <div className="mostPopularHotelBoxCard">
                         <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> {CityList.city.city_name}, {CityList.city.state.country.country_name}</h6>
                     </div>
                     <h5 className="room-title">{CityList.hotel_name}</h5>
                     <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                  {/*   <h6 className="roomStar">
                         {(() => {
                             if (CityList.hotel_type_star_info.hotel_type_star_name === '1') {
                                 return (
                                     <h6 className="roomStar"><FaStar/></h6>
                                 )
                             } else if (CityList.hotel_type_star_info.hotel_type_star_name === '2') {
                                 return (
                                     <h6 className="roomStar"><FaStar/><FaStar/></h6>
                                 )
                             } else if (CityList.hotel_type_star_info.hotel_type_star_name === '3') {
                                 return (
                                     <h6 className="roomStar"><FaStar/><FaStar/><FaStar/></h6>
                                 )
                             } else if (CityList.hotel_type_star_info.hotel_type_star_name === '4') {
                                 return (
                                     <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                                 )
                             } else if (CityList.hotel_type_star_info.hotel_type_star_name === '5') {
                                 return (
                                     <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                                 )
                             }
                         })()}
                     </h6>*/}
                 </Link>
             </div>
        })

        return (
            <Fragment>
                <div className="container-fluid p-5">
                    <h5 className="section-title text-center mb-3">Dhaka City Hotel</h5>
                     <div className="row">
                         {MyView}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HotelPerCity;