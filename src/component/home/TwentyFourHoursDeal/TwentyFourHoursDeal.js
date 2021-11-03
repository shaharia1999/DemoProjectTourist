import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaHotel} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import room1 from "../../../asset/images/room/room1.jpg"
import room2 from "../../../asset/images/room/room2.jpg"
import room3 from "../../../asset/images/room/room3.jpg"
import room4 from "../../../asset/images/room/room4.jpg"
import room5 from "../../../asset/images/room/room5.jpg"
import room6 from "../../../asset/images/room/room6.jpg"
import room7 from "../../../asset/images/room/room7.jpg"
import axios from "axios";
import ApiURL from "../../../api/ApiURL";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, fontSize: "40px", display: 'block', right:"-40px", zIndex:"15", height:"35px", width:"35px", opacity:"1", color:"White", display: "block", background: "#C20035" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, fontSize: "40px", display: 'block', left:"-40px", zIndex:"15", height:"35px", width:"35px", opacity:"1", color:"White", display: "block", background: "#C20035" }}
            onClick={onClick}
        />
    );
}

class TwentyFourHoursDeal extends Component {
    constructor(props) {
        super(props);
        this.state={
            myData:[],
            error:false
        }
    }

    componentDidMount() {
        axios.get(ApiURL.TwentyFourDealRoom).then(response=> {
            console.log(response.data);
            this.setState({myData:response.data})
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

        const myList=this.state.myData;
        const myView=myList.map((TFRoomDeal,i)=>{
            return <div className="row mt-2 mb-2 p-2">
                <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                    <img className="twentyFourImage" src={TFRoomDeal.image_url[0].Image} alt="Photo of sunset"/>
                    <div className="TwentyFourHoursHotelDiscountCard">
                        <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                    </div>
                    <div className="TwentyFourHoursHotelBoxCard">
                        <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  {TFRoomDeal.hotel_details.hotel_name}</h6>
                        <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> {TFRoomDeal.hotel_details.city.city_name}, {TFRoomDeal.hotel_details.city.state.country.country_name} </h6>
                    </div>
                    <h5 className="roomTitle">{TFRoomDeal.room_name}</h5>
                    <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> {TFRoomDeal.price_details.price} <span className="text-dark">/ NIGHT</span></h6>
                </Link>
            </div>
        });

        return (
            <Fragment>
                <div className="container-fluid bg-light p-5">
                    <h5 className="section-title mt-4 text-center">24 Hours Deal</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <Slider ref={c=>(this.slider=c)} {...settings}>

                        {myView}

                        {/*<div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room1} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>*/}

                       {/* <div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room2} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room3} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room4} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room5} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">40% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room6} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">55% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>

                        <div className="row mt-2 mb-2 p-2">
                            <Link to="/roomDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room7} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="roomTitle">DELUXE KING SPECIAL</h5>
                                <h6 className="roomPrice"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/ NIGHT</span></h6>
                            </Link>
                        </div>*/}
                    </Slider>

           {/*         <div className="row">
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

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room2} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">70% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  The Mermaid Beach Resort</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">1 BEDROOM BEACH BUNGALOWS</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room3} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">80% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room4} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">40% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room5} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">55% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="twentyFourImage" src={room6} alt="Photo of sunset"/>
                                <div className="TwentyFourHoursHotelDiscountCard">
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">60% OFF</h6>
                                </div>
                                <div className="TwentyFourHoursHotelBoxCard">
                                    <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                    <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING</h5>
                                <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>
                    </div>*/}

                </div>
            </Fragment>
        );
    }
}

export default TwentyFourHoursDeal;