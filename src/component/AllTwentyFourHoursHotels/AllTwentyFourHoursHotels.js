import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {FaHotel} from "react-icons/fa";
import {IoMdPin} from "react-icons/io";
import AllTwentyFourHourDealPlaceholder from "../placeholder/AllTwentyFourHourDealPlaceholder";

class AllTwentyFourHoursHotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all24DealRoomData: [],
            isLoading: "",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.TwentyFourDealRoom).then(response => {
            this.setState({all24DealRoomData: response.data.data, isLoading: "d-none", MainDiv: " "})
        }).catch(error => {

        });
    }

    render() {
        const myList = this.state.all24DealRoomData;
        const all24DealRoomView = myList.map((my24DealRoomData, i) => {
            return <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2" key={i}>
                    <Link to={"/roomDetails/" + my24DealRoomData.room_id}
                          className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                        <img className="twentyFourImage" src={ApiURL.BaseUrl1 + my24DealRoomData.image_url[0].Image}
                             alt="24 hour deal room"/>
                        <div className="TwentyFourHoursHotelDiscountCard">
                            {(() => {
                                if (my24DealRoomData.deals_info.length <= 0 || my24DealRoomData.deals_info[0] === null || my24DealRoomData.deals_info[0].empty) {
                                    return (
                                        <h6 className="TwentyFourHoursHotelDiscountTitle">0% OFF</h6>
                                    )
                                } else {
                                    return (
                                        <h6 className="TwentyFourHoursHotelDiscountTitle">{Math.round(my24DealRoomData.deals_info[0].allow_offer_percent)}%
                                            OFF</h6>
                                    )
                                }
                            })()}
                            {/*<h6 className="TwentyFourHoursHotelDiscountTitle">{Math.round(myRoom.deals_info[0].allow_offer_percent)}% OFF</h6>*/}
                        </div>
                        <div className="TwentyFourHoursHotelBoxCard">
                            <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel
                                className="TwentyFourHoursHotelIcon"/> {my24DealRoomData.hotel_details.hotel_name}</h6>
                            <h6 className="TwentyFourHoursHotelTitle"><IoMdPin
                                className="TwentyFourHoursLocationIcon"/> {my24DealRoomData.hotel_details.city.city_name}, {my24DealRoomData.hotel_details.city.state.country.country_name}
                            </h6>
                        </div>
                        <h5 className="roomTitle">{my24DealRoomData.room_name}</h5>
                        <h6 className="roomPrice"><strike
                            class="text-dark">৳{parseInt(my24DealRoomData.price_details.offer_price)}</strike> ৳{parseInt(my24DealRoomData.price_details.price)}
                            <span className="text-dark">/ NIGHT</span></h6>
                    </Link>
            </div>
        });

        return (
            <Fragment>
                <AllTwentyFourHourDealPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container className="MostPopularHotelTop p-5">
                        <h5 className="section-title text-center">All 24 Hours Deal Rooms</h5>
                        <div className="row mt-2 mb-2">
                            {all24DealRoomView}
                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default AllTwentyFourHoursHotels;