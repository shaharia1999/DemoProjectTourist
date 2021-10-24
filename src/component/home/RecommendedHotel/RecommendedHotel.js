import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import hotel1 from "../../../asset/images/Hotel/HotelSarina.jpg"
import hotel2 from "../../../asset/images/Hotel/TheRaintreeHotel.jpg";
import hotel3 from "../../../asset/images/Hotel/LeMéridienDhaka.jpg";
import hotel4 from "../../../asset/images/Hotel/SixSeasonsHotel.jpg";
import hotel5 from "../../../asset/images/Hotel/PanPacificSonargaonDhaka.jpg";
import hotel6 from "../../../asset/images/Hotel/TheMermaidBeachResort.jpg";
import Slider from "react-slick";

class RecommendedHotel extends Component {
    render() {

        let settings = {
            dots: false,
            infinite: true,
            height: 600,
            loop:true,
            speed: 500,
            autoplaySpeed:1800,
            autoplay:true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <div className="container-fluid whyChooseTop p-5">
                    <h5 className="section-title text-center">Recommended Hotel</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <Slider ref={c=>(this.slider=c)} {...settings}>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>


                    </Slider>
                </div>
            </Fragment>
        );
    }
}

export default RecommendedHotel;