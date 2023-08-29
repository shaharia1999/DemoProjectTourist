import React, {Component, Fragment} from 'react';
import { IoMdPin} from "react-icons/io";
import Slider from "react-slick";
import ApiURL from "../../api/ApiURL";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {Link} from "react-router-dom";
import {FaHotel, FaStar,FaMapMarkerAlt,} from "react-icons/fa";
import HotelDetailsPlaceholder from "../placeholder/HotelDetailsPlaceholder";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                fontSize: "40px",
                right: "-40px",
                zIndex: "15",
                height: "35px",
                width: "35px",
                opacity: "1",
                color: "White",
                display: "block",
                background: "#6d6d6d",
                borderRadius: '50px',
                boxShadow: '0 0 3px 0 #d4d4d4'
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                fontSize: "40px",
                left: "-40px",
                zIndex: "15",
                height: "35px",
                width: "35px",
                opacity: "1",
                color: "White",
                display: "block",
                background: "#6d6d6d",
                borderRadius: '50px',
                boxShadow: '0 0 3px 0 #d4d4d4'
            }}
            onClick={onClick}
        />
    );
}

class HotelDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug_name: props.slug_name,
            HotelName: "",
            HotelImage: [],
            city: "",
            country: "",
            Hotel_Info: "",
            latitude: "",
            longitude: "",
            hotel_type_star_id: "",
            reviews: [],
            RelatedRoom: [],
            HotelFacilitiesDetails:[],
            isLoading: "",
            MainDiv: "d-none",
        }
    }


    componentDidMount() {
        this.hotelTypeStarId();
        axios.get(ApiUrl.SingleHotelDetails + this.state.slug_name + '/').then(response => {
            if (response.data.error === false) {
                this.setState({
                    HotelName: response.data.data.hotel_name,
                    HotelImage: response.data.data.image_url,
                    city: response.data.data.city.city_name,
                    country: response.data.data.city.state.country.country_name,
                    Hotel_Info: response.data.data.hotel_info,

                    latitude: response.data.data.latitude,
                    longitude: response.data.data.longitude,
                    hotel_type_star_id: response.data.data.hotel_type_star_id,
                    reviews: response.data.data.reviews,
                    rating: response.data.data.reviews.rating,

                    RelatedRoom: response.data.data.room_details,
                    HotelFacilitiesDetails: response.data.data.hotel_facilities_details,

                    isLoading: "d-none", MainDiv: " "
                })
            } else {

            }

        }).catch(error => {

        });
    }


    hotelTypeStarId = () => {
        let hotel_type_star_id = this.state.hotel_type_star_id;
        if (hotel_type_star_id === 1) {
            return (
                <span><i className="fa fa-star"></i></span>
            )
        } else if (hotel_type_star_id === 2) {
            return (
                <span><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            )
        } else if (hotel_type_star_id === 3) {
            return (
                <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
            )
        } else if (hotel_type_star_id === 4) {
            return (
                <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                    className="fa fa-star"></i></span>
            )
        } else if (hotel_type_star_id === 5) {
            return (
                <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                    className="fa fa-star"></i><i className="fa fa-star"></i></span>
            )
        }
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            height: 600,
            loop: true,
            speed: 500,
            autoplaySpeed: 1800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0px",
            adaptiveHeight: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        let settings1 = {
            dots: false,
            infinite: true,
            height: 600,
            loop: true,
            speed: 500,
            autoplaySpeed: 1800,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "20px",
            adaptiveHeight: true,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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

        const myList = this.state.RelatedRoom;
        const myView = myList.map((myHotelRoom, i) => {
            return <div className="row mt-2 mb-2 p-2">
                <Link to={"/roomDetails/" + myHotelRoom.room_id}
                      className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                    <img className="twentyFourImage" src={ApiURL.BaseUrl1 + myHotelRoom.image_url[0]['Image']} alt=""/>
                  {/*  <div className="TwentyFourHoursHotelDiscountCard">
                        <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                    </div>*/}
                    <div className="TwentyFourHoursHotelBoxCard">
                        <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel
                            className="TwentyFourHoursHotelIcon"/> {this.state.HotelName}</h6>
                        <h6 className="TwentyFourHoursHotelTitle"><IoMdPin
                            className="TwentyFourHoursLocationIcon"/> {this.state.city},{this.state.country}</h6>
                    </div>
                    <h5 className="room-title">{myHotelRoom.room_name}</h5>
                    <h6 className="room-price mb-3"><strike
                        class="text-dark">৳{myHotelRoom.price_details.price}</strike> ৳{myHotelRoom.price_details.offer_price}
                        <span className="text-dark">/Night</span></h6>
                </Link>
            </div>
        });

        return (
            <Fragment>
                <HotelDetailsPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <div className="container-fluid bg-light">
                        <div className="row p-3">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row shadow-sm bg-white">

                                    <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        {/*    <img id="PreviewImg" className="HotelPreviewImgLarge" src={hotel1} alt=""/>

                                        <div className="container my-1">
                                            <div className="row">
                                                <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                    <img onClick={this.imgOnclick} className="HotelPreviewImgSmall" src={hotel1} alt=""/>
                                                </div>
                                                <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                    <img onClick={this.imgOnclick} className="HotelPreviewImgSmall" src={hotel2} alt=""/>
                                                </div>
                                                <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                    <img onClick={this.imgOnclick} className="HotelPreviewImgSmall" src={hotel3} alt=""/>
                                                </div>
                                                <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                    <img onClick={this.imgOnclick} className="HotelPreviewImgSmall" src={hotel4} alt=""/>
                                                </div>
                                            </div>
                                        </div>*/}

                                        <Slider ref={c => (this.slider = c)} {...settings}>
                                            {this.state.HotelImage.map((myHotelImage, i) => (
                                                <span key={i}><img id="PreviewImg" className="PreviewImgLarge"
                                                                   src={ApiURL.BaseUrl1 + myHotelImage.Image}
                                                                   alt=""/></span>
                                            ))}
                                        </Slider>

                                    </div>

                                    <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                        <h5 className="HotelTitle">{this.state.HotelName}<span
                                            className="StarText"> {this.hotelTypeStarId()} </span></h5>
                                        <h6 className="LocationMapTitle"><FaMapMarkerAlt
                                            className="LocationMapFont"/> {this.state.city}, {this.state.country}</h6>
                                        <hr className="w-100"/>
                                        <div>
                                            <h6 className="RoomDetailsPrice">Facilities</h6>

                                            {this.state.HotelFacilitiesDetails.map((myHotelFacilitiesDetails, i) => (
                                                <h6 className="facilityDes"
                                                    key={i}> {myHotelFacilitiesDetails.facilites_name}</h6>
                                            ))}

                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                            <h6 className="mt-3 mb-2 RoomDetailsPrice">Map View</h6>
                                            <iframe className="googleMapHotel"
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4922429662934!2d90.42510111424305!3d23.765479584581925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1642880141169!5m2!1sen!2sbd"
                                                    width="100%" height="200" allowFullScreen=""
                                                    loading="lazy">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white">
                                <div className="container">
                                    <div className="row shadow-sm p-5">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h4 className="ReviewDescriptionText mb-4 mt-2">Description</h4>
                                            <p className="DescriptionDetails text-justify">{this.state.Hotel_Info}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left bg-white">
                                <div className="container">
                                    <div className="row shadow-sm p-5">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mt-3 mb-4 ReviewDescriptionText">Review</h6>
                                            {this.state.reviews.map((myReview, i) => {
                                                if(myReview.rating===null){
                                                    return(
                                                        <div key={i}>
                                                            <p>....</p>
                                                        </div>
                                                    )
                                                } else if(myReview.rating===1){
                                                    return(
                                                        <div key={i}>
                                                            <p className="p-0 m-0"><span
                                                                className="ReviewTitle">{myReview.user_details.user_name}</span>
                                                                <span className="StarText2 ml-2"> <i className="fa fa-star"></i></span></p>
                                                            <p className="ReviewDes">{myReview.review}</p>
                                                        </div>
                                                    )
                                                }else if(myReview.rating===2){
                                                    return(
                                                        <div key={i}>
                                                            <p className="p-0 m-0"><span
                                                                className="ReviewTitle">{myReview.user_details.user_name}</span>
                                                                <span className="StarText2 ml-2"><i className="fa fa-star"></i><i className="fa fa-star"></i> </span></p>
                                                            <p className="ReviewDes">{myReview.review}</p>
                                                        </div>
                                                    )
                                                }else if(myReview.rating===3){
                                                    return(
                                                        <div key={i}>
                                                            <p className="p-0 m-0"><span
                                                                className="ReviewTitle">{myReview.user_details.user_name}</span>
                                                                <span className="StarText2 ml-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span></p>
                                                            <p className="ReviewDes">{myReview.review}</p>
                                                        </div>
                                                    )
                                                }else if(myReview.rating===4){
                                                    return(
                                                        <div key={i}>
                                                            <p className="p-0 m-0"><span
                                                                className="ReviewTitle">{myReview.user_details.user_name}</span>
                                                                <span className="StarText2 ml-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span></p>
                                                            <p className="ReviewDes">{myReview.review}</p>
                                                        </div>
                                                    )
                                                }else if(myReview.rating===5){
                                                    return(
                                                        <div key={i}>
                                                            <p className="p-0 m-0"><span
                                                                className="ReviewTitle">{myReview.user_details.user_name}</span>
                                                                <span className="StarText2 ml-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span></p>
                                                            <p className="ReviewDes">{myReview.review}</p>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid whyChooseTop bg-light p-5">
                        <h5 className="section-title text-center">Room</h5>
                        <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different
                            marketplaces has so many demands on IT security related work. We focus on our learners, we
                            make a path for them to earn money and built their own career.</h6>
                        <Slider ref={d => (this.slider = d)} {...settings1}>
                            {myView}
                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HotelDetails;