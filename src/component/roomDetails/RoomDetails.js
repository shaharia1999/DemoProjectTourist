import React, {Component, Fragment} from 'react';
import room1 from "../../../src/asset/images/room/room1.jpg"
import room2 from "../../../src/asset/images/room/room2.jpg"
import room3 from "../../../src/asset/images/room/room3.jpg"
import room4 from "../../../src/asset/images/room/room4.jpg"
import {FaMapMarkerAlt} from "react-icons/all";
import {Breadcrumb} from "react-bootstrap";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ReactDOM from 'react-dom';
import RoomReview from "./RoomReview";
import {Link} from "react-router-dom";

class RoomDetails extends Component {

    imgOnclick=(event)=>{
        let imgSrc= event.target.getAttribute('src');
        let PreviewImg=document.getElementById('PreviewImg');
        ReactDOM.findDOMNode(PreviewImg).setAttribute('src',imgSrc);
    }

    render() {
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
                                    <img id="PreviewImg" className="PreviewImgLarge" src={room1} alt=""/>
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
                                    </div>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                    <h5 className="HotelTitle">Le Méridien Dhaka <span className="SearchStarText"><i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> </span></h5>
                                    <h6 className="LocationMapTitle"><FaMapMarkerAlt className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <h6 className="HotelDetailsSubTitle">DELUXE KING SPECIAL DELUXE KING SPECIAL</h6>
                                    <h6 className="RoomDetailsPrice mt-4"><strike className="price1">৳2800</strike> ৳2300 <span className="price2">( per room per night )</span></h6>
                                    <hr className="w-100"/>
                                    <div>
                                        <h6 className="RoomDetailsPrice">Facilities</h6>
                                        <h6 className="facilityDes"> Free Wifi</h6>
                                        <h6 className="facilityDes"> AC & TV</h6>
                                        <h6 className="facilityDes"> King Sized Bed</h6>
                                        <h6 className="facilityDes"> Card Payment</h6>
                                        <h6 className="facilityDes"> CcTV Cameras</h6>
                                    </div>

                                    <div className="input-group mt-3">
                                        <button className="btn CartBtn m-1 "> <i className="fa fa-shopping-cart"/> Add To Cart</button>
                                        <button className="btn BookBtn m-1"> <i className="fa fa-book"/> Booking Now</button>
                                    </div>
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
                                        <p className="DescriptionDetails text-justify">Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka, also the new business hub, are the neighborhood of Hotel Sarina. Being located in this business district you are not far from any of the important destination of your choice like business district of Gulshan, Baridhara Diplomatic Zone, Airport and so on. It is only thirty minutes drive from the International Airport, about five to ten minutes drive to Gulshan and to the diplomatic zone. Two renowned shopping malls are only a few minutes walking distance from the hotel.</p>
                                        <p className="DescriptionDetails text-justify">Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka, also the new business hub, are the neighborhood of Hotel Sarina. Being located in this business district you are not far from any of the important destination of your choice like business district of Gulshan. Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. Two renowned shopping malls are only a few minutes walking distance from the hotel.</p>
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