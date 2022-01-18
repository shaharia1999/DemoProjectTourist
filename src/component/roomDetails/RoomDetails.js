import React, {Component, Fragment} from 'react';
import room1 from "../../../src/asset/images/room/room1.jpg"
import room2 from "../../../src/asset/images/room/room2.jpg"
import room3 from "../../../src/asset/images/room/room3.jpg"
import room4 from "../../../src/asset/images/room/room4.jpg"
import {FaMapMarkerAlt, IoMdPin} from "react-icons/all";
import {Breadcrumb, Button, Modal} from "react-bootstrap";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ReactDOM from 'react-dom';
import RoomReview from "./RoomReview";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import ApiURL from "../../api/ApiURL";
import {FaHotel} from "react-icons/fa";

class RoomDetails extends Component {
    /*
        imgOnclick=(event)=>{
            let imgSrc= event.target.getAttribute('src');
            let PreviewImg=document.getElementById('PreviewImg');
            ReactDOM.findDOMNode(PreviewImg).setAttribute('src',imgSrc);
        }*/

    constructor(props) {
        super(props);
        this.state = {
            room_id: props.room_id,
            RoomTitle: "",
            RoomNumber: "",
            Price: "",
            OfferPrice: "",
            Facilities: [],
            RoomDes: "",
            Review: "",
            RoomImage: [],
            error: false,
            DateModal1:false,
        };
    }

    handleClose1=()=>{
        this.setState({ DateModal1:false})
    }

    handleOpen1=()=>{
        this.setState({ DateModal1:true})
    }

    componentDidMount() {
        axios.get(ApiUrl.SingleRoom + this.state.room_id + '/').then(response => {
            /*this.setState({myData:response.data.data})
            console.log('myData',response.data.data);
            console.log('room_name',response.data.data.room_name);*/
            if (response.data.error === false) {
                this.setState({
                    Facilities: response.data.data.facilities_details,
                    RoomTitle: response.data.data.room_name,
                    RoomDes: response.data.data.room_description,
                    Price: response.data.data.price_details.price,
                    OfferPrice: response.data.data.price_details.offer_price,
                    RoomImage: response.data.data.image_url,
                })
            } else {
                this.setState({error: true})
            }

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
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0px",
            /*    nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,*/
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
        return (
            <Fragment>
                <div className="container-fluid bg-light">
                    <Breadcrumb className="mt-2">
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="/">Room Details</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row shadow-sm bg-white p-0 m-0">
                                <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    {/* <img id="PreviewImg" className="PreviewImgLarge" src={room1} alt=""/>
                                    <div className="container my-1">
                                        <div className="row">
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img onClick={this.imgOnclick} className="PreviewImgSmall" src={room1} alt=""/>
                                            </div>
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img onClick={this.imgOnclick} className="PreviewImgSmall" src={room2} alt=""/>
                                            </div>
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img onClick={this.imgOnclick} className="PreviewImgSmall" src={room3} alt=""/>
                                            </div>
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img onClick={this.imgOnclick} className="PreviewImgSmall" src={room4} alt=""/>
                                            </div>
                                        </div>
                                    </div>*/}
                                    <Slider ref={c => (this.slider = c)} {...settings}>
                                        {this.state.RoomImage.map((myRoomImage, i) => (
                                            <span key={i}><img id="PreviewImg" className="PreviewImgLarge"
                                                               src={ApiURL.BaseUrl1 + myRoomImage.Image} alt=""/></span>
                                        ))}
                                    </Slider>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                    <h5 className="HotelTitle"> {this.state.RoomTitle} <span className="SearchStarText"><i
                                        className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i
                                        className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i
                                        className="fa fa-star"> </i> </span></h5>
                                    {/*  <h6 className="LocationMapTitle"><FaMapMarkerAlt className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <h6 className="HotelDetailsSubTitle">DELUXE KING SPECIAL DELUXE KING SPECIAL</h6>*/}
                                    <h6 className="RoomDetailsPrice mt-4"><span className="text-black-50">Price: </span>
                                        <strike
                                            className="price1"> ৳{this.state.Price}</strike> ৳{this.state.OfferPrice}
                                        <span className="price2">( per room per night )</span></h6>
                                    <hr className="w-100"/>
                                    <div>
                                        <h6 className="RoomDetailsPrice">Facilities</h6>
                                        {this.state.Facilities.map((myRoomFacilities, i) => (
                                            <h6 className="facilityDes"
                                                key={i}> {myRoomFacilities.facilities_id.facilites_name}</h6>
                                        ))}
                                    </div>

                                    <div className="input-group mt-3">
                                        <button onClick={this.handleOpen1} className="btn CartBtn m-1 "><i className="fa fa-shopping-cart"/> Add To
                                            Cart
                                        </button>
                                        <button className="btn BookBtn m-1"><i className="fa fa-book"/> Booking Now
                                        </button>
                                    </div>


                                    <Modal size="lg" show={this.state.DateModal1} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose1}>
                                        <Modal.Header closeButton>
                                            <h6> </h6>
                                        </Modal.Header>
                                        <Modal.Body className="p-3">
                                            <input type="date"/>
                                            <input type="date"/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose1}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 bg-white">
                            <div className="container ml-2">
                                <div className="row shadow-sm p-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h4 className="ReviewDescriptionText mb-4 mt-2">Description</h4>
                                        <p className="DescriptionDetails text-justify">{this.state.RoomDes}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 bg-white">
                            <RoomReview/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RoomDetails;