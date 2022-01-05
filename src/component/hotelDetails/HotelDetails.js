import React, {Component, Fragment} from 'react';
import {FaMapMarkerAlt} from "react-icons/all";
import ReactDOM from 'react-dom';
import hotel1 from "../../asset/images/Hotel/TheRaintreeHotel.jpg";
import hotel2 from "../../asset/images/Hotel/LeMéridienDhaka.jpg";
import hotel3 from "../../asset/images/Hotel/SixSeasonsHotel.jpg";
import hotel4 from "../../asset/images/Hotel/PanPacificSonargaonDhaka.jpg";

class HotelDetails extends Component {

    imgOnclick=(event)=>{
        let imgSrc=event.target.getAttribute('src');
        let PreviewImg=document.getElementById('PreviewImg');
        ReactDOM.findDOMNode(PreviewImg).setAttribute('src',imgSrc);
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-light">
                    <div className="row p-3">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row shadow-sm bg-white">

                                <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <img id="PreviewImg" className="HotelPreviewImgLarge" src={hotel1} alt=""/>

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
                                    </div>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                    <h5 className="HotelTitle">Le Méridien Dhaka <span className="StarText"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span></h5>
                                    <h6 className="LocationMapTitle"><FaMapMarkerAlt className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <hr className="w-100"/>
                                    <div>
                                        <h6 className="RoomDetailsPrice">Facilities</h6>
                                        <h6 className="facilityDes"> Free Wifi, AC & TV, Card Payment, CcTV Cameras, King Sized Bed</h6>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 RoomDetailsPrice">Map View</h6>
                                        <iframe className="googleMapHotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.492105191647!2d90.42510111543172!3d23.765484494115775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1635144082545!5m2!1sen!2sbd"
                                                width="100%" height="270" allowFullScreen="" loading="lazy">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HotelDetails;