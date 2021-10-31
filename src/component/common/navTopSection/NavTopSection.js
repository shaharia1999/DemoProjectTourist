import React, {Component, Fragment} from 'react';
import {Container, Navbar, Nav, NavLink, Row, Col} from "react-bootstrap";
import facebook from "../../../asset/images/facebook.svg";
import instagram from "../../../asset/images/instagram.svg";
import twitter from "../../../asset/images/twitter.svg";
import youtube from "../../../asset/images/youtube.svg";
import {FaUser, FaCartPlus} from "react-icons/fa";
import {BsFillPhoneVibrateFill, MdEmail} from "react-icons/all";
import porzotok from "../../../asset/images/Porzotok.png";
import {Link} from "react-router-dom";

class NavTopSection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="nav1BackgroundCard">
                    <Row className="">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <ul className="list-unstyled">
                                <li className="mt-2"><a className="nav1Text"> <BsFillPhoneVibrateFill/> Call us: +880
                                    1779224640</a><a className="nav1Text ml-4"><MdEmail/> Email: info@porzotok.com</a>
                                    <Link to="/helpCenter" className="nav1Text mt-2">HelpLine</Link>
                                    <Link to="/support" className="nav1Text mt-2">Support</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <ul className="nav-social-icons size-sm float-right mt-2">
                                <li><a className="facebook" target="_blank" href=""><img className="w-50" src={facebook} alt=""/></a></li>
                                <li><a className="instagram" target="_blank" href=""><img className="w-50" src={instagram} alt=""/></a></li>
                                <li><a className="twitter" target="_blank" href=""><img className="w-50" src={twitter} alt=""/></a></li>
                                <li><a className="youTube" target="_blank" href=""><img className="w-50" src={youtube} alt=""/></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <Navbar expand="lg" className="sticky-top Navbar">
                    <Container fluid={true}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Link to="/">   <img className="main-logo" src={porzotok} alt=""/></Link>
                            <Nav className="ml-auto mr-5">
                                <Nav.Link> <NavLink exact className="navItem mx-2 nav-font"
                                                    to="/">Hotel</NavLink></Nav.Link>
                                <Link exact className="btn my-2 mx-2 logInBtn" to="/userLogin"><FaUser/> Login</Link>
                                <Link exact className="btn my-2 cartBtn" to="/userLogin"><FaCartPlus/> Cart</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/*    <Container fluid={true} className="nav2Background">
                    <Nav className="justify-content-center">
                        <NavDropdown title="Dhaka" className="nav2margin nav2font mx-3" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Chittagong" className="nav2margin mx-3" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="Sylhet" className="nav2margin mx-3" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Rajshahi" className="nav2margin" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Jossore" className="nav2margin" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Barisal" className="nav2margin" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Khulna" className="nav2margin" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Rangpur" className="nav2margin" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Mymanshing" className="nav2margin" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>*/}
            </Fragment>
        );
    }
}

export default NavTopSection;