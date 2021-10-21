import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import hotel1 from "../../../asset/images/hotel1.jpg";
import city1 from "../../../asset/images/city/city1.jpg";
import city2 from "../../../asset/images/city/city2.jpeg";
import city3 from "../../../asset/images/city/city3.jpeg";
import city4 from "../../../asset/images/city/city4.jpeg";
import city5 from "../../../asset/images/city/city5.jpg";
import city6 from "../../../asset/images/city/city6.jpg";
import city7 from "../../../asset/images/city/city7.jpg";
import city8 from "../../../asset/images/city/city8.jpg";
import city9 from "../../../asset/images/city/city9.jpg";
import city10 from "../../../asset/images/city/city10.jpg";

class PopularCity extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid whyChooseTop bg-light p-5">
                    <h5 className="section-title text-center">Popular City</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city10} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Dhaka City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city9} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Bandorbon City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city3} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Sunamganj City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city4} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Rangamati City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city5} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Cox's Bazar Sea beach <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city6} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Panchagor City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city7} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Dhaka City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city8} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Dhaka City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PopularCity;