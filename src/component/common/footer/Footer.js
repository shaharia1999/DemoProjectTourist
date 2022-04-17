import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import android from "../../../asset/images/playstore.png";
import ios from "../../../asset/images/apple.png";
import facebook from "../../../asset/images/facebook.svg";
import twitter from "../../../asset/images/twitter.svg";
import instagram from "../../../asset/images/instagram.svg";
import youtube from "../../../asset/images/youtube.svg";
import Porzotok1 from "../../../asset/images/Porzotok1.png";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="site-footer mt-5">
                    <div className="container-fluid padding-container1">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <img className="image-footer mb-2" src={Porzotok1} alt=""/>
                                <h6 className="FooterDes" style={{width: "70%"}}>Porzotok, 1st ever complete online hotel reservation system in Bangladesh which is operated by Arena Web Technology.</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h6 className="FooterDes">House No-1, BLOCK-B, Banasree, Rampura, Dhaka</h6>
                                <h6 className="FooterDes">+880 1310&nbsp;333&nbsp;444, <br/> +880 1886&nbsp;663&nbsp;989</h6>
                                <h6 className="FooterDes">info@porzotok.com</h6>
                                <h6 className="FooterDes">www.porzotok.com</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="footer-links">
                                    {/*<li><Link className="FooterInfoLinkText" to="/about">About Us</Link></li>*/}
                                    <li><Link className="FooterInfoLinkText" to="/contact">Contact</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/terms">Terms & conditions</Link></li>
                               {/*     <li><Link className="FooterInfoLinkText" to="/guestPolicies">Guest Policies</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/privacy">Privacy Policy</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/refund">Refund Policy</Link></li>*/}
                                </ul>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.porzotok.porzotok"><img className="Download-app mb-1 footer-links" src={android} alt=""/></a>
                                <br/>
                                <img className="Download-app mb-1 footer-links" src={ios} alt=""/>
                            </div>
                        </div>
                        <hr className="mt-0"/>

                        <div className="row mt-5 mb-5">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotel Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotel Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotel Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotel pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotel The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotel Sairu Hill</h1>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotel Sea Cox</h1>
                                <h1 className="hotelText1 mb-3">Prime Park Hotel</h1>
                                <h1 className="hotelText1 mb-3">Rain View Resort</h1>
                                <h1 className="hotelText1 mb-3">Hotel Long Beach</h1>
                                <h1 className="hotelText1 mb-3">Best Western Heritage</h1>
                                <h1 className="hotelText1 mb-3">White Orchid</h1>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotel Asia Residential</h1>
                                <h1 className="hotelText1 mb-3">Hotel Shams Plaza</h1>
                                <h1 className="hotelText1 mb-3">Hotel Water Orchid</h1>
                                <h1 className="hotelText1 mb-3">Sayeman Beach Resort</h1>
                                <h1 className="hotelText1 mb-3">Sea Princess Hotel</h1>
                                <h1 className="hotelText1 mb-3">Hotel Sea Crown</h1>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Seagull Hotel</h1>
                                <h1 className="hotelText1 mb-3">Muscat Holiday Resort</h1>
                                <h1 className="hotelText1 mb-3">Hotel Sea Shine</h1>
                                <h1 className="hotelText1 mb-3">Hotel Opera Ocean</h1>
                                <h1 className="hotelText1 mb-3">Hotel Sea Alif</h1>
                                <h1 className="hotelText1 mb-3">Al Shafa Tower</h1>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotel Beach Way</h1>
                                <h1 className="hotelText1 mb-3">Hotel Regal Palace</h1>
                                <h1 className="hotelText1 mb-3">Hotel Golden Hill</h1>
                                <h1 className="hotelText1 mb-3">Hotel Vista Bay</h1>
                                <h1 className="hotelText1 mb-3">Hotel Auster Echo</h1>
                                <h1 className="hotelText1 mb-3">Hotel D' Oceania</h1>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotel Arcane</h1>
                                <h1 className="hotelText1 mb-3">Hotel Suite Sadaf</h1>
                                <h1 className="hotelText1 mb-3">Hotel Mishuk</h1>
                                <h1 className="hotelText1 mb-3">Divine Eco Resort</h1>
                                <h1 className="hotelText1 mb-3">Hotel Marine Plaza</h1>
                                <h1 className="hotelText1 mb-3">Bashati Bay Resort</h1>
                            </div>
                        </div>
                        <hr className="mb-0"/>
                    </div>
                    <div className="container-fluid padding-container2">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    <a className="FooterInfoLinkText" target="_blank" href="https://porzotok.com/"> Porzotok</a>
                                </p>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" target="_blank" href="/"><img className="w-50" src={facebook} alt=""/></a></li>
                                    <li><a className="instagram" target="_blank" href="/"><img className="w-50" src={instagram} alt=""/></a></li>
                                    <li><a className="twitter" target="_blank" href="/"><img className="w-50" src={twitter} alt=""/></a></li>
                                    <li><a className="youTube" target="_blank" href="/"><img className="w-50" src={youtube} alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;