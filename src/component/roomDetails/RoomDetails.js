import React, {Component, Fragment} from 'react';
import room1 from "../../../src/asset/images/room/room1.jpg"
import room2 from "../../../src/asset/images/room/room2.jpg"
import room3 from "../../../src/asset/images/room/room3.jpg"
import room4 from "../../../src/asset/images/room/room4.jpg"

class RoomDetails extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-light">
                    <div className="row p-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row shadow-sm bg-white">

                                <div className="p-4 animated col-lg-6 col-md-6 col-sm-12 col-12">
                                    <img className="PreviewImgLarge" src={room1}/>

                                    <div className="container my-1">
                                        <div className="row">
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img className="PreviewImgSmall" src={room1} alt=""/>
                                            </div>
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img className="PreviewImgSmall" src={room2} alt=""/>
                                            </div>
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img className="PreviewImgSmall" src={room3} alt=""/>
                                            </div>
                                            <div className="p-0 m-0 col-lg-3 col-md-3 col-sm-3 col-3">
                                                <img className="PreviewImgSmall" src={room4} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                    <h5 className="HotelTitle">Le Méridien Dhaka <span className="StarText"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span></h5>
                                    <h6 className="HotelDetailsSubTitle">DELUXE KING SPECIAL</h6>
                                    <h6 className="RoomDetailsPrice mt-4"><strike class="price1">৳2800</strike> ৳2300 <span className="price2">( per room per night )</span></h6>
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
                                        <button className="btn CartBtn m-1 "> <i className="fa fa-shopping-cart"/> Add Cart</button>
                                        <button className="btn BookBtn m-1"> <i className="fa fa-book"/> Book Now</button>
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

export default RoomDetails;