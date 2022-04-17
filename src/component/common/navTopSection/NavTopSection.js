import React, {Component, Fragment} from 'react';
import {Container, Navbar, Nav, NavLink, Row, Col, Dropdown} from "react-bootstrap";
import facebook from "../../../asset/images/facebook.svg";
import instagram from "../../../asset/images/instagram.svg";
import twitter from "../../../asset/images/twitter.svg";
import youtube from "../../../asset/images/youtube.svg";
import {FaUser, FaCartPlus} from "react-icons/fa";
import {BsFillPhoneVibrateFill, MdEmail, MdLogout, FaList, VscKey, GiWallet} from "react-icons/all";
import porzotok from "../../../asset/images/Porzotok.png";
import {Link, Redirect} from "react-router-dom";

class NavTopSection extends Component {
    constructor() {
        super();
        this.state = {
            UserPhone: sessionStorage.getItem('UserPhone'),
            UserName: sessionStorage.getItem('UserName'),
            IsActive: sessionStorage.getItem('IsActive'),
            onHomeRedirect: false,
        }
    }

    onLogout = () => {
        sessionStorage.removeItem('UserPhone');
        sessionStorage.removeItem('UserID');
        sessionStorage.removeItem('AccessToken');
        sessionStorage.removeItem('UserName');
        sessionStorage.removeItem('IsActive');
        this.setState({HomeRedirect: true});
    }

    onHomeRedirect() {
        if (this.state.HomeRedirect === true) {
            return (<Redirect to="/"/>);
        }
    }

    render() {
        if (this.state.UserPhone === null) {
            return (
                <Fragment>
                    <Container fluid={true} className="nav1BackgroundCard">
                        <Row className="">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <ul className="list-unstyled">
                                    <li className="mt-2"><a className="nav1Text"> <BsFillPhoneVibrateFill/> Call us:
                                        +880 1886663989</a><a className="nav1Text ml-4"><MdEmail/> Email:
                                        info@porzotok.com</a>
                                        {/*<Link to="/helpCenter" className="nav1Text mt-2">HelpLine</Link>*/}
                                        {/*<Link to="/support" className="nav1Text mt-2">Support</Link>*/}
                                    </li>
                                </ul>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <ul className="nav-social-icons size-sm float-right mt-2">
                                    <li><a className="facebook" target="_blank" href=""><img className="w-50"
                                                                                             src={facebook} alt=""/></a>
                                    </li>
                                    <li><a className="instagram" target="_blank" href=""><img className="w-50"
                                                                                              src={instagram}
                                                                                              alt=""/></a></li>
                                    <li><a className="twitter" target="_blank" href=""><img className="w-50"
                                                                                            src={twitter} alt=""/></a>
                                    </li>
                                    <li><a className="youTube" target="_blank" href=""><img className="w-50"
                                                                                            src={youtube} alt=""/></a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    <Navbar expand="lg" className="sticky-top Navbar">
                        <Container fluid={true}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Link to="/"><img className="main-logo" src={porzotok} alt=""/></Link>
                                <Nav className="ml-auto mr-5">
                                    <Link className="navItem mx-2 my-3 nav-font"
                                          to="/">HOTEL</Link>
                                    <Link to="/" className="btn my-2"><i className="fa h4 fa-heart"> </i> <sup><span
                                        className="badge text-white bg-danger">3</span></sup></Link>
                                    <Link to="/notification" className="btn badgeBtn my-2"><i
                                        className="fa h4 fa-bell"> </i> <sup><span
                                        className="badge text-white bg-danger">1</span></sup></Link>
                                    <Link className="btn my-2 mx-2 logInBtn" to="/user-login"><FaUser/> LOGIN</Link>
                                    <Link className="btn my-2 cartBtn" to="/cartList"><FaCartPlus/> PRE-BOOK</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {this.onHomeRedirect()}
                </Fragment>
            );
        } else{
            return (
                <Fragment>
                    <Container fluid={true} className="nav1BackgroundCard">
                        <Row className="">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <ul className="list-unstyled">
                                    <li className="mt-2"><a className="nav1Text"> <BsFillPhoneVibrateFill/> Call us:
                                        +880
                                        1779224640</a><a className="nav1Text ml-4"><MdEmail/> Email:
                                        info@porzotok.com</a>
                                        <Link to="/helpCenter" className="nav1Text mt-2">HelpLine</Link>
                                        <Link to="/support" className="nav1Text mt-2">Support</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <ul className="nav-social-icons size-sm float-right mt-2">
                                    <li><a className="facebook" target="_blank" href=""><img className="w-50"
                                                                                             src={facebook} alt=""/></a>
                                    </li>
                                    <li><a className="instagram" target="_blank" href=""><img className="w-50"
                                                                                              src={instagram}
                                                                                              alt=""/></a></li>
                                    <li><a className="twitter" target="_blank" href=""><img className="w-50"
                                                                                            src={twitter} alt=""/></a>
                                    </li>
                                    <li><a className="youTube" target="_blank" href=""><img className="w-50"
                                                                                            src={youtube} alt=""/></a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    <Navbar expand="lg" className="sticky-top Navbar">
                        <Container fluid={true}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Link to="/"><img className="main-logo" src={porzotok} alt=""/></Link>
                                <Nav className="ml-auto mr-5">
                                    <Link className="navItem mx-2 my-3 nav-font"
                                                        to="/">HOTEL</Link>
                                    <Link to="/" className="btn my-2"><i className="fa h4 fa-heart"> </i> <sup><span
                                        className="badge text-white bg-danger">3</span></sup></Link>
                                    <Link to="/notification" className="btn badgeBtn my-2"><i
                                        className="fa h4 fa-bell"> </i> <sup><span
                                        className="badge text-white bg-danger">1</span></sup></Link>

                                    {/*   <Link onClick={this.onLogout} className="btn my-2 mx-2 logInBtn" to="/"><FaUser/> LOGOUT</Link>*/}

                                    <Dropdown>
                                        <Dropdown.Toggle className="btn my-2 mx-2 logInBtn" id="dropdown-basic">
                                            <a><FaUser/> Profile</a>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="navDropdownProfile">
                                            <Dropdown.Item><Link className="my-2 mx-2 navDropdownProfileText"
                                                                 to="/order"><FaList/> ORDER LIST</Link></Dropdown.Item>
                                            <Dropdown.Item><Link className="my-2 mx-2 navDropdownProfileText"
                                                                 to="/profile"><FaUser/> PROFILE</Link></Dropdown.Item>
                                            <Dropdown.Item><Link className="my-2 mx-2 navDropdownProfileText"
                                                                 to="/refer-rewards"><GiWallet/> REFER REWARDS</Link></Dropdown.Item>
                                            <Dropdown.Item><Link className="my-2 mx-2 navDropdownProfileText"
                                                                 to="/change-password"><VscKey/> CHANGE PASSWORD</Link></Dropdown.Item>
                                            <Dropdown.Item><Link onClick={this.onLogout}
                                                                 className="my-2 mx-2 navDropdownProfileText"
                                                                 to="/"><MdLogout/> LOGOUT</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Link className="btn my-2 cartBtn" to="/cartList"><FaCartPlus/> PRE-BOOK</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {this.onHomeRedirect()}
                </Fragment>
            );
        }

    }
}

export default NavTopSection;