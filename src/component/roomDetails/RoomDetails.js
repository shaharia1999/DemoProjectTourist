import React, {Component, Fragment} from 'react';
import room1 from "../../../src/asset/images/room/room1.jpg"
import room2 from "../../../src/asset/images/room/room2.jpg"
import room3 from "../../../src/asset/images/room/room3.jpg"
import room4 from "../../../src/asset/images/room/room4.jpg"
import {FaMapMarkerAlt, IoMdPin} from "react-icons/all";
import {Breadcrumb, Button, Modal,Form} from "react-bootstrap";
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
import {toast,ToastContainer} from "react-toastify";

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
            session_value: sessionStorage.getItem('session_value'),
            cart_id: sessionStorage.getItem('cart_id'),
            cart_key: sessionStorage.getItem('cart_key'),
            RoomTitle: "",
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
        };
    }

    handleClose1=()=>{
        this.setState({DateModal1: false})
    }

    handleOpen1=()=>{
        this.setState({DateModal1: true})
    }

    startDateOnChange=(events)=>{
        let startNewDate=events.target.value;
        console.log('startNewDate = ', startNewDate)
        // let startNewDate=date.toLocaleDateString("en-CA");
        this.setState({start_date: startNewDate})
    }

    endDateOnChange=(events)=>{
        let endNewDate=events.target.value;
        console.log("endNewDate",endNewDate);
        this.setState({end_date: endNewDate})
    }

    componentDidMount() {
        if (this.state.cart_key){

        }
        else {
            let MyFormData = new FormData();
            MyFormData.append("session_id", this.state.session_value);
            axios.post(ApiURL.CartsCreate,MyFormData).then(response=> {
                console.log('response carts = ', response);
                sessionStorage.setItem("cart_id",response.data.cart_id);
                sessionStorage.setItem("cart_key",true);
            }).catch();
        }


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

    onAddToCardFromSubmit = (event) => {
        let roomId=this.props.room_id;
        let start_date = this.state.start_date;
        let end_date = this.state.end_date;
        let cart_id = this.state.cart_id;
        let cartSendBtn = document.getElementById('cartSendBtn');
        let AddCartForm = document.getElementById('AddCartForm');

        if (start_date.length === 0) {
            toast.error('Start Date is Required !', {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (end_date.length === 0) {
            toast.error('End Date is Required !', {
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
            let MyFormData = new FormData();
            MyFormData.append("check_in_time", start_date);
            MyFormData.append("check_out_time", end_date);
            MyFormData.append("room_id", roomId);
            MyFormData.append("cart_id", cart_id);

            console.log('MyFormData=',MyFormData);


            axios.post(ApiURL.AddToCartRoomDetails,MyFormData).then((response)=> {
                if (response.data.error===false) {
                    cartSendBtn.innerHTML = "Confirm Add To Cart";
                    toast.success('Added Successfully in the card', {
                        position: "bottom-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    AddCartForm.reset();

                } else {
                    toast.error('Add to Cart Failed', {
                        position: "bottom-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    cartSendBtn.innerHTML = "Confirm Add To Cart";
                }
            }).catch((error)=> {
                toast.error('Add to Cart Failed', {
                    position: "bottom-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
                cartSendBtn.innerHTML = "Confirm Add To Cart";
            })
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
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="">Room Details</Link></Breadcrumb.Item>
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
                                        <button onClick={this.handleOpen1} className="btn CartBtn m-1 "><i
                                            className="fa fa-shopping-cart"/> Add To
                                            Cart
                                        </button>
                                        <button className="btn BookBtn m-1"><i className="fa fa-book"/> Booking Now
                                        </button>
                                    </div>

                                  {/* cart Modal*/}
                                    <Modal size="md" show={this.state.DateModal1}
                                           aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose1} centered>
                                        <Modal.Header /*style={{borderBottom: "none"}}*/ closeButton>
                                            <h6>Please Select Date</h6>
                                        </Modal.Header>
                                        <Modal.Body className="pt-3 pb-3 pr-3 pl-3">
                                            <h6>{this.state.RoomTitle}</h6>
                                            <h6>৳{this.state.OfferPrice}</h6>
                                            <Form id="AddCartForm" onSubmit={this.onAddToCardFromSubmit}>
                                                <input onChange={this.startDateOnChange} className="mx-3 mt-3" type="date"/>
                                                <input onChange={this.endDateOnChange} className="mx-3 mt-3" type="date"/>
                                                <Button type="submit" id="cartSendBtn" className="btn mt-3 btn-block CartBtn">Confirm Add To Cart</Button>
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
            </Fragment>
        );
    }
}

export default RoomDetails;