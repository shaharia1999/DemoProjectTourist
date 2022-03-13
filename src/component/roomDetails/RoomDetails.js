import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Modal, Form} from "react-bootstrap";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import RoomReview from "./RoomReview";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {toast, ToastContainer} from "react-toastify";
import {Redirect} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";
import Cookies from 'universal-cookie';
import RoomDetailsPlaceholder from "../placeholder/RoomDetailsPlaceholder";

const cookies = new Cookies();

class RoomDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            room_id: props.room_id,
            user_id: sessionStorage.getItem('UserID'),
            AccessToken:sessionStorage.getItem('AccessToken'),
            RoomTitle: "",
            HotelName: "",
            RoomNumber: "",
            Price: "",
            OfferPrice: "",
            Facilities: [],
            RoomDes: "",
            Review: "",
            start_date: "",
            end_date: "",
            RoomImage: [],
            error: false,
            DateModal1: false,
            checkValue: 0,
            addToCart: [],
            isLoading: "",
            MainDiv: "d-none",
            RedirectStatus:false,
            cart_id:""
        };
    }

    handleClose1 = () => {
        this.setState({DateModal1: false})
    }

    pageRedirect=()=>{
        if (this.state.RedirectStatus===true){
            return(
                <Redirect to="/user-login" />
            )
        }
    }

    handleOpen1 = () => {
        let UserID=SessionHelper.GetUserID();
        if (UserID===null){
            this.setState({RedirectStatus:true})
        }
        else{
            this.setState({DateModal1: true})
        }
    }

    startDateOnChange = (events) => {
        let startNewDate = events.target.value;
        console.log('startNewDate = ', startNewDate)
        // let startNewDate=date.toLocaleDateString("en-CA");
        this.setState({start_date: startNewDate})
    }

    endDateOnChange = (events) => {
        let endNewDate = events.target.value;
        console.log("endNewDate", endNewDate);
        this.setState({end_date: endNewDate})
    }

    componentDidMount() {
        axios.get(ApiUrl.SingleRoom + this.state.room_id + '/').then(response => {
            if (response.data.error === false) {
                this.setState({
                    Facilities: response.data.data.facilities_details,
                    RoomTitle: response.data.data.room_name,
                    RoomDes: response.data.data.room_description,
                    Price: response.data.data.price_details.price,
                    OfferPrice: response.data.data.price_details.offer_price,
                    RoomImage: response.data.data.image_url,
                    HotelName: response.data.data.hotel_id.hotel_name,
                    isLoading: "d-none", MainDiv: " "
                })
            } else {
                this.setState({error: true})
            }
        }).catch(error => {

        });
    }

    onAddToCardFromSubmit = (event) => {
        let checkin_date = this.state.start_date;
        let checkout_date = this.state.end_date;
        let room_id=this.state.room_id;
        let cartSendBtn = document.getElementById('cartSendBtn');
        let AddCartForm = document.getElementById('AddCartForm');

        if (checkin_date.length === 0) {
            toast.error('checkin Date is Required !', {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (checkout_date.length === 0) {
            toast.error('checkout Date is Required !', {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            cartSendBtn.innerHTML = "Sending...";

            let user_id = this.state.user_id;
            let config = {
                headers: {
                    Authorization: `Token ` + this.state.AccessToken
                }
            }
            axios.get(ApiUrl.UserCartIdCheck + user_id + '/', config).then(response => {
                if (response.data.error === false) {
                    this.setState({
                        cart_id: response.data.cart_id,
                    })
                    let cart_id=this.state.cart_id;
                    let MyFormData=new FormData();
                    MyFormData.append("check_in_time",checkin_date);
                    MyFormData.append("check_out_time",checkout_date);
                    MyFormData.append("room_id",room_id);
                    MyFormData.append("cart_id",this.state.cart_id);

                    axios.post(ApiUrl.AddToCartRoomDetails,MyFormData, config).then(response => {
                        if (response.data.error === false) {
                            toast.sucess(response.data.message, {
                                position: "top-center",
                                theme: "colored",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            this.handleClose1();
                        } else {
                            toast.error(response.data.message, {
                                position: "top-center",
                                theme: "colored",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            this.handleClose1();
                        }
                    }).catch(error => {

                    });
                } else {

                }
            }).catch(error => {

            });

        }
        event.preventDefault();
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
                <RoomDetailsPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <div className="container-fluid bg-light">
                        <Breadcrumb className="mt-2">
                            <Breadcrumb.Item className="breadcrumbText"> <Link to="">Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item className="breadcrumbText"> <Link to="">Room
                                Details</Link></Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row shadow-sm bg-white p-0 m-0">
                                    <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <Slider ref={c => (this.slider = c)} {...settings}>
                                            {this.state.RoomImage.map((myRoomImage, i) => (
                                                <span key={i}><img id="PreviewImg" className="PreviewImgLarge"
                                                                   src={ApiUrl.BaseUrl1 + myRoomImage.Image}
                                                                   alt=""/></span>
                                            ))}
                                        </Slider>
                                    </div>

                                    <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                        <h5 className="HotelTitle"> {this.state.RoomTitle} <span
                                            className="price2">( {this.state.HotelName} )</span></h5>
                                        {/*  <h6 className="LocationMapTitle"><FaMapMarkerAlt className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <h6 className="HotelDetailsSubTitle">DELUXE KING SPECIAL DELUXE KING SPECIAL</h6>*/}
                                        <h6 className="RoomDetailsPrice mt-4"><span
                                            className="text-black-50">Price: </span>
                                            <strike
                                                className="price1"> ৳{this.state.Price}</strike> ৳{this.state.OfferPrice}
                                            <span className="price2"> ( per night )</span></h6>
                                        <hr className="w-100"/>
                                        <div>
                                            <h6 className="RoomDetailsPrice">Facilities</h6>
                                            {this.state.Facilities.map((myRoomFacilities, i) => (
                                                <h6 className="facilityDes"
                                                    key={i}> {myRoomFacilities.facilities_id.facilites_name}</h6>
                                            ))}
                                        </div>

                                        <div className="input-group mt-3">
                                            <button onClick={this.handleOpen1} className="btn CartBtn m-1 "><i
                                                className="fa fa-shopping-cart"/> Add To
                                                Pre-Book
                                            </button>
                                            {/*<button className="btn BookBtn m-1"><i className="fa fa-book"/> Booking Now
                                        </button>   */}
                                            <Link to="/room-booking" className="btn BookBtn m-1"><i
                                                className="fa fa-book"/> Booking Now
                                            </Link>
                                        </div>

                                        {/* cart Modal*/}
                                        <Modal size="md" show={this.state.DateModal1}
                                               aria-labelledby="contained-modal-title-vcenter"
                                               onHide={this.handleClose1}
                                               centered>
                                            <Modal.Header /*style={{borderBottom: "none"}}*/ closeButton>
                                                <h6>Please Select Date</h6>
                                            </Modal.Header>
                                            <Modal.Body className="pt-3 pb-3 pr-3 pl-3">
                                                <h6>{this.state.RoomTitle}</h6>
                                                <h6>৳{this.state.OfferPrice}</h6>
                                                <Form id="AddCartForm" onSubmit={this.onAddToCardFromSubmit}>
                                                    <input onChange={this.startDateOnChange} className="mx-3 mt-3"
                                                           type="date"/>
                                                    <input onChange={this.endDateOnChange} className="mx-3 mt-3"
                                                           type="date"/>
                                                    <button type="submit" id="cartSendBtn"
                                                            className="btn mt-3 btn-block CartBtn">Confirm Add To Cart
                                                    </button>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer /*style={{borderTop: "none"}}*/>
                                                <Button className="notificationModalBtn btn-sm" variant="danger"
                                                        onClick={this.handleClose1}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                            <ToastContainer/>
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
                </div>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default RoomDetails;