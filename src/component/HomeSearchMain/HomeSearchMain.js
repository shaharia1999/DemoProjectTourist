import React, {Component,Fragment} from 'react';
import {Container, Navbar, Nav, NavLink, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaHotel} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import room1 from "../../asset/images/room/room1.jpg"
import room2 from "../../asset/images/room/room2.jpg"
import room3 from "../../asset/images/room/room3.jpg"
import room4 from "../../asset/images/room/room4.jpg"
import room5 from "../../asset/images/room/room5.jpg"
import room6 from "../../asset/images/room/room6.jpg"
import room7 from "../../asset/images/room/room7.jpg"

class HomeSearchMain extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title text-center">Search</h5>
                    <h6 className="sectionSubTitle text-center mb-5">We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                      <Row>
                          <Col xl={4} lg={4} md={4} sm={4} xs={12}>

                          </Col>
                          <Col xl={8} lg={8} md={8} sm={8} xs={12}>
                              <Row className="mt-2 mb-2 p-2">
                                  <Link to="/roomDetails" className="TwentyFourHoursCard card">
                                      <img className="twentyFourImage" src={room1} alt="Photo of sunset"/>
                                      <div className="TwentyFourHoursHotelDiscountCard">
                                          <h6 className="TwentyFourHoursHotelDiscountTitle">50% OFF</h6>
                                      </div>
                                      <div className="TwentyFourHoursHotelBoxCard">
                                          <h6 className="TwentyFourHoursHotelTitle">&nbsp;<FaHotel className="TwentyFourHoursHotelIcon"/>  Hotel Sarina</h6>
                                          <h6 className="TwentyFourHoursHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                      </div>
                                      <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                      <h6 className="room-price"><strike class="text-dark">৳2800</strike> ৳2300 <span className="text-dark">/Night</span></h6>
                                  </Link>
                              </Row>

                          </Col>
                      </Row>


                </Container>
            </Fragment>
        );
    }
}

export default HomeSearchMain;