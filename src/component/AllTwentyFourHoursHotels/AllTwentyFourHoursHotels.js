import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import hotel1 from "../../asset/images/hotel1.jpg";
import {IoMdPin} from "react-icons/all";
import {FaStar} from "react-icons/fa";

class AllTwentyFourHoursHotels extends Component {
    render() {
        return (
            <Fragment>
                <Container className="MostPopularHotelTop p-5" fluid={true}>
                    <h5 className="section-title text-center">All 24 Hours Deal Hotel</h5>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default AllTwentyFourHoursHotels;