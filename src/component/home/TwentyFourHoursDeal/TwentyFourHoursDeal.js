import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import hotel1 from "../../../asset/images/hotel1.jpg"
import { FaStar } from "react-icons/fa";

class TwentyFourHoursDeal extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid whyChooseTop bg-light p-5">
                    <h5 className="section-title text-center">24 Hours Deal</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <div className="row">

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="card TrendingNow">
                                <img className="twentyFourImage" src={hotel1} alt="Photo of sunset"/>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/night</span></h6>
                                <h6 className="roomStar mb-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="card TrendingNow">
                                <img className="twentyFourImage" src={hotel1} alt="Photo of sunset"/>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/night</span></h6>
                                <h6 className="roomStar mb-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="card TrendingNow">
                                <img className="twentyFourImage" src={hotel1} alt="Photo of sunset"/>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/night</span></h6>
                                <h6 className="roomStar mb-2"><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="card TrendingNow">
                                <img className="twentyFourImage" src={hotel1} alt="Photo of sunset"/>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/night</span></h6>
                                <h6 className="roomStar mb-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="card TrendingNow">
                                <img className="twentyFourImage" src={hotel1} alt="Photo of sunset"/>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/night</span></h6>
                                <h6 className="roomStar mb-2"><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="card TrendingNow">
                                <img className="twentyFourImage" src={hotel1} alt="Photo of sunset"/>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/night</span></h6>
                                <h6 className="roomStar mb-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TwentyFourHoursDeal;