import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import android from "../../../asset/images/playstore.png"
import ios from "../../../asset/images/apple.png"

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="site-footer mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">About</h1>
                                <h6 className="FooterDes">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment Bangladesh since its in 2012.</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">Address</h1>
                                <h6 className="FooterDes">House No-1, BLOCK-B Banasree, Main Road Rampura, Dhaka</h6>
                                <h6 className="FooterDes">+880 1310&nbsp;333&nbsp;444, <br/> +880 1779&nbsp;224&nbsp;640</h6>
                                <h6 className="FooterDes">info@arenawebsecurity.net</h6>
                                <h6 className="FooterDes">www.arenawebsecurity.net</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">Information</h1>
                                <ul className="footer-links">
                                    <li><Link className="FooterInfoLinkText" to="/about">About Us</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/contact">Contact</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/terms">Terms and conditions</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/refund">Guest Policies</Link></li>
                                    <li><Link className="FooterInfoLinkText" to="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">Download</h1>
                                <img className="Download-app mb-1 footer-links" src={android} alt=""/>
                                <img className="Download-app mb-1 footer-links" src={ios} alt=""/>
                            </div>
                        </div>
                        <hr/>

                        <div className="row mt-5 mb-5">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotels Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotels Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotels pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotels The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sairu Hill</h1>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotels Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotels Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotels pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotels The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sairu Hill</h1>
                            </div>


                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotels Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotels Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotels pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotels The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sairu Hill</h1>
                            </div>


                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotels Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotels Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotels pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotels The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sairu Hill</h1>
                            </div>


                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotels Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotels Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotels pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotels The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sairu Hill</h1>
                            </div>


                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
                                <h1 className="hotelText1 mb-3">Hotels Six Season</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sarina</h1>
                                <h1 className="hotelText1 mb-3">Hotels Hilton City</h1>
                                <h1 className="hotelText1 mb-3">Hotels pan pacific</h1>
                                <h1 className="hotelText1 mb-3">Hotels The Mermaid</h1>
                                <h1 className="hotelText1 mb-3">Hotels Sairu Hill</h1>
                            </div>

                        </div>

                        <hr/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    <a className="FooterInfoLinkText" target="_blank" href="https://arenawebsecurity.net/"> Porzotok</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" target="_blank" href=""></a></li>
                                    <li><a className="linkedin" target="_blank" href=""></a></li>
                                    <li><a className="youTube" target="_blank" href=""></a></li>
                                    <li><a className="facebook" target="_blank" href=""></a></li>
                                    <li><a className="facebook" target="_blank" href=""></a></li>
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