import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import {Container} from "react-bootstrap";
import hotel1 from "../../asset/images/hotel1.jpg";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class AllMostPopularHotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMostPopularHotelData: [],
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.AllHotel).then(response => {
            this.setState({allMostPopularHotelData: response.data.data})
        }).catch(error => {

        });
    }

    render() {
        const myList = this.state.allMostPopularHotelData;
        const allMostPopularHotelData = myList.map((myMostPopularHotelData, i) => {
            return <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2" key={i}>
                <Link to={"/hotel-details/" + myMostPopularHotelData.slug_name}
                      className="TwentyFourHoursCard h-100 card TwentyFourHoursAnimation">
                    <img className="mostPopularHotelImage"
                         src={ApiURL.BaseUrl1 + myMostPopularHotelData.image_url[0].Image} alt=""/>
                    <div className="mostPopularHotelBoxCard">
                        <h6 className="mostPopularHotelTitle"><IoMdPin
                            className="TwentyFourHoursLocationIcon"/> {myMostPopularHotelData.city.city_name} , {myMostPopularHotelData.city.state.country.country_name}
                        </h6>
                    </div>
                    <h5 className="room-title">{myMostPopularHotelData.hotel_name}</h5>
                    <h6 className="roomStar">

                        {(() => {
                            if (myMostPopularHotelData.hotel_type_star_info.hotel_type_star_name === '1') {
                                return (
                                    <h6 className="roomStar"><FaStar/></h6>
                                )
                            } else if (myMostPopularHotelData.hotel_type_star_info.hotel_type_star_name === '2') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/></h6>
                                )
                            } else if (myMostPopularHotelData.hotel_type_star_info.hotel_type_star_name === '3') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/><FaStar/></h6>
                                )
                            } else if (myMostPopularHotelData.hotel_type_star_info.hotel_type_star_name === '4') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                                )
                            } else if (myMostPopularHotelData.hotel_type_star_info.hotel_type_star_name === '5') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                                )
                            }
                        })()}

                    </h6>
                </Link>
            </div>
        });


        return (
            <Fragment>
                <Container className="MostPopularHotelTop p-5">
                    <h5 className="section-title text-center">Most Popular Hotel</h5>
                    <div className="row">
                        {allMostPopularHotelData}
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default AllMostPopularHotels;