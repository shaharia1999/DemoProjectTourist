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

class TwentyFourHoursDeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: [],
            isLoading: "",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.TwentyFourDealRoom).then(response => {
            this.setState({myData: response.data.data, isLoading: "d-none", MainDiv: " "})
        }).catch(error => {

        });
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
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "20px",
            adaptiveHeight: true,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 1900,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
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

        const myList = this.state.myData;
        const myView = myList.map((myRoom, i) => {
            return <div className="row mt-2 mb-2 p-2" key={i}>
                <Link to={"/roomDetails/" + myRoom.room_id}
                      className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                    <img className="twentyFourImage" src={ApiURL.BaseUrl1 + myRoom.image_url[0].Image}
                         alt="Photo of sunset"/>
                    <div className="TwentyFourHoursHotelDiscountCard">

                        {(() => {
                            if (myRoom.deals_info.length <= 0 || myRoom.deals_info[0] === null || myRoom.deals_info[0].empty) {
                                return (
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">0% OFF</h6>
                                )
                            } else {
                                return (
                                    <h6 className="TwentyFourHoursHotelDiscountTitle">{Math.round(myRoom.deals_info[0].allow_offer_percent)}%
                                        OFF</h6>
                                )
                            }
                        })()}

                        {/*<h6 className="TwentyFourHoursHotelDiscountTitle">{Math.round(myRoom.deals_info[0].allow_offer_percent)}% OFF</h6>*/}
                    </div>
                    <div className="TwentyFourHoursHotelBoxCard">
                        <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel
                            className="TwentyFourHoursHotelIcon"/> {myRoom.hotel_details.hotel_name}</h6>
                        <h6 className="TwentyFourHoursHotelTitle"><IoMdPin
                            className="TwentyFourHoursLocationIcon"/> {myRoom.hotel_details.city.city_name}, {myRoom.hotel_details.city.state.country.country_name}
                        </h6>
                    </div>
                    <h5 className="roomTitle">{myRoom.room_name}</h5>
                    <h6 className="roomPrice"><strike
                        class="text-dark">৳{parseInt(myRoom.price_details.offer_price)}</strike> ৳{parseInt(myRoom.price_details.price)}
                        <span className="text-dark">/ NIGHT</span></h6>
                </Link>
            </div>
        });

        return (
            <Fragment>
                <TwentyFourHourDealPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container fluid={true} className="bg-light p-5">
                        <h6 className="section-title mt-4 text-center">24 Hours Deal Room <Link
                            to="/all-twenty-four-hotels" className="btn SeeMore">See More</Link></h6>
                        <h6 className="sectionSubTitle text-center mb-5">This offer is for a limited time, book an instant hotel now</h6>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            {myView}
                        </Slider>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default TwentyFourHoursDeal;