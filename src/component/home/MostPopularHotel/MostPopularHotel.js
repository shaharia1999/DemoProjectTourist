import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../../api/ApiURL";
import {Container} from "react-bootstrap";
import MostPopularHotelPlaceholder from "../../placeholder/MostPopularHotelPlaceholder";

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

class MostPopularHotel extends Component {
    constructor(props) {
        super(props);
        this.state={
            myData:[],
            isLoading:"",
            MainDiv:"d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.AllHotel).then(response=> {
            if (response.status===200){
                this.setState({myData:response.data.data,isLoading:"d-none",MainDiv:" "});
            }
        }).catch();
    }

    /*componentDidMount() {
        axios.get(ApiURL.AllHotel).then(response=> {
            this.setState({myData:response.data.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

        });
    }*/

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

        const myList=this.state.myData;
        const myView=myList.map((myHotel,i)=>{
            return  <div className="row mt-2 mb-2 p-2" key={i}>
                <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                    <img className="mostPopularHotelImage" src={ApiURL.BaseUrl1 + myHotel.image_url[0].Image} alt=""/>
                    <div className="mostPopularHotelBoxCard">
                        <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> {myHotel.city.city_name} , {myHotel.city.state.country.country_name}</h6>
                    </div>
                    <h5 className="room-title">{myHotel.hotel_name}</h5>
                    <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                </Link>
            </div>
        });

        return (
            <Fragment>
                <MostPopularHotelPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                <Container className="whyChooseTop p-5" fluid={true}>
                    <h5 className="section-title text-center">Most Popular Hotel</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <Slider ref={c=>(this.slider=c)} {...settings}>

                        {myView}

                       {/*<div className="row mt-2 mb-2 p-2">
                            <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>*/}

                    </Slider>
                    {/*<div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
                            <Link to="/" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
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

export default MostPopularHotel;