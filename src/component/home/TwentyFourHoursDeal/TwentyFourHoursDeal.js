import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../../api/ApiURL";
import {FaHotel} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import {Container} from "react-bootstrap";
import TwentyFourHourDealPlaceholder from "../../placeholder/TwentyFourHourDealPlaceholder";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, fontSize: "40px", right:"-40px", zIndex:"15", height:"35px", width:"35px", opacity:"1", color:"White", display: "block", background: "#C20035" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, fontSize: "40px", left:"-40px", zIndex:"15", height:"35px", width:"35px", opacity:"1", color:"White", display: "block", background: "#C20035" }}
            onClick={onClick}
        />
    );
}

class TwentyFourHoursDeal extends Component {
    constructor(props) {
        super(props);
        this.state={
            myData:[],
            isLoading:"",
            MainDiv:"d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.TwentyFourDealRoom).then(response=> {
            this.setState({myData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

        });
    }

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
            centerMode: true,
            centerPadding: "20px",
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

    /*    const myList=this.state.myData;
        const myView=myList.map((myRoom)=>{
            return <div className="row mt-2 mb-2 p-2">
                <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                    <img className="twentyFourImage" src={ApiURL.BaseUrl1 + myRoom.image_url[0].Image} alt="Photo of sunset"/>
                    <div className="TwentyFourHoursHotelDiscountCard">
                        <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                    </div>
                    <div className="TwentyFourHoursHotelBoxCard">
                        <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  {myRoom.hotel_details.hotel_name}</h6>
                        <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> {myRoom.hotel_details.city.city_name}, {myRoom.hotel_details.city.state.country.country_name} </h6>
                    </div>
                    <h5 className="roomTitle">{myRoom.room_name}</h5>
                    <h6 className="roomPrice"><strike class="text-dark">৳{parseInt(myRoom.price_details.offer_price)}</strike> ৳{parseInt(myRoom.price_details.price)} <span className="text-dark">/ NIGHT</span></h6>
                </Link>
            </div>
        });*/

        return (
            <Fragment>
                <TwentyFourHourDealPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container fluid={true} className="bg-light p-5">
                        <h5 className="section-title mt-4 text-center">24 Hours Deal</h5>
                        <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                        <Slider ref={c=>(this.slider=c)} {...settings}>

                          {/*  {myView}*/}

                           {/* <div className="row mt-2 mb-2 p-2">
                                <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                    <img className="twentyFourImage" src={room1} alt="Photo of sunset"/>
                                    <div className="TwentyFourHoursHotelDiscountCard">
                                        <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                    </div>
                                    <div className="TwentyFourHoursHotelBoxCard">
                                        <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel
                                            className="TwentyFourHoursHotelIcon"/> Hotel Sarina</h6>
                                        <h6 className="TwentyFourHoursHotelTitle"><IoMdPin
                                            className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                    </div>
                                    <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                    <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span
                                        className="text-dark">/ NIGHT</span></h6>
                                </Link>
                            </div>*/}

                        </Slider>

                    {/*<div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room1} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>
                    </div>*/}

                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default TwentyFourHoursDeal;