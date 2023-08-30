import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import cardPhotoPlaceholder from "../../asset/images/cardPhotoPlaceholder.svg";
import { MdLocationOn } from 'react-icons/md';
import {Link, Redirect} from "react-router-dom";
import img2 from '../../asset/images/d.jpg'
import img3 from '../../asset/images/d1.webp'
import img4 from '../../asset/images/d3.jpg'
import img5 from '../../asset/images/d4.jpg'
import img6 from '../../asset/images/d5.jpg'
import img7 from '../../asset/images/d6.jpg'
class AllMostPopularHotelPlaceholder extends Component {
    render() {
        // let isLoading = this.props.isLoading;
        return (
            // <div className={isLoading}>
            <Container className="p-5">
                <h5 className="section-title mt-4 text-center">All Most Popular Hotel</h5>
                <div className="row mt-5 p-0">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img2} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img3} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img4} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img5} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img7} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img2} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img5} alt=""/>
                                <div className="ph-col-12">
                                     <div className="ph-row bodyCard">
                                    <h4>Take your longest holiday yet</h4>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/hotel-details/:slug_name'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            // </div>
        );
    }
}

export default AllMostPopularHotelPlaceholder;