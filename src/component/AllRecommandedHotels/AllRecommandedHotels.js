import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import hotel1 from "../../asset/images/hotel1.jpg";
import {IoMdPin} from "react-icons/all";
import {FaStar} from "react-icons/fa";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class AllRecommandedHotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allRecommandedHotelData: [],
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.RecommendedHotel).then(response => {
            this.setState({allRecommandedHotelData: response.data.data})
        }).catch(error => {

        });
    }

    render() {
        const myList = this.state.allRecommandedHotelData;
        const allRecommandedHotelData = myList.map((MyRecommandedHotelData, i) => {
            return <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2" key={i}>
                <Link to={"/hotel-details/" + MyRecommandedHotelData.slug_name}
                      className="TwentyFourHoursCard h-100 card TwentyFourHoursAnimation">
                    <img className="mostPopularHotelImage"
                         src={ApiURL.BaseUrl1 + MyRecommandedHotelData.image_url[0].Image} alt=""/>
                    <div className="mostPopularHotelBoxCard">
                        <h6 className="mostPopularHotelTitle"><IoMdPin
                            className="TwentyFourHoursLocationIcon"/> {MyRecommandedHotelData.city.city_name} , {MyRecommandedHotelData.city.state.country.country_name}
                        </h6>
                    </div>
                    <h5 className="room-title">{MyRecommandedHotelData.hotel_name}</h5>
                    <h6 className="roomStar">

                        {(() => {
                            if (MyRecommandedHotelData.hotel_type_star_info.hotel_type_star_name === '1') {
                                return (
                                    <h6 className="roomStar"><FaStar/></h6>
                                )
                            } else if (MyRecommandedHotelData.hotel_type_star_info.hotel_type_star_name === '2') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/></h6>
                                )
                            } else if (MyRecommandedHotelData.hotel_type_star_info.hotel_type_star_name === '3') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/><FaStar/></h6>
                                )
                            } else if (MyRecommandedHotelData.hotel_type_star_info.hotel_type_star_name === '4') {
                                return (
                                    <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                                )
                            } else if (MyRecommandedHotelData.hotel_type_star_info.hotel_type_star_name === '5') {
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
                    <h5 className="section-title text-center">All Recommended Hotel</h5>
                    <div className="row">
                        {allRecommandedHotelData}
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default AllRecommandedHotels;