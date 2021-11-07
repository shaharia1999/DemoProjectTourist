import React, {Component,Fragment} from 'react';
import {Container, Row, Col, Accordion, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaHotel} from "react-icons/fa";
import {IoMdPin} from "react-icons/all";
import room1 from "../../asset/images/room/room1.jpg"
import room4 from "../../asset/images/room/room4.jpg";
/*import room2 from "../../asset/images/room/room2.jpg"
import room3 from "../../asset/images/room/room3.jpg"
import room4 from "../../asset/images/room/room4.jpg"
import room5 from "../../asset/images/room/room5.jpg"
import room6 from "../../asset/images/room/room6.jpg"
import room7 from "../../asset/images/room/room7.jpg"*/

class HomeSearchMain extends Component {
    render() {
        return (
            <Fragment>
                <Container className="">
                    <Row className="justify-content-center mb-5">
                        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="input-group searchUpText mb-3">
                            <input type="text" className="form-control search-placeholder" placeholder="Search by City, Hotel or Location" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <Link to="/homeSearch" className="btn pt-3 search-btn" type="button">Search</Link>
                            </div>
                        </Col>
                    </Row>

                      <Row>
                          <Col xl={4} lg={4} md={4} sm={4} xs={4}>

                          </Col>
                          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Row className="SearchPageHotelCard w-100 mb-4">
                                  <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                      <img className="SearchPageImage" src={room4} alt=""/>
                                  </Col>
                                  <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                      <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                  </Col>
                                  <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                      <h6 className="CartListCartTitle">3000 TK</h6>
                                  </Col>
                              </Row>
                              <Row className="SearchPageHotelCard w-100">
                                  <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                      <img className="SearchPageImage" src={room1} alt=""/>
                                  </Col>
                                  <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                      <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                  </Col>
                                  <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                      <h6 className="CartListCartTitle">3000 TK</h6>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>


                </Container>
            </Fragment>
        );
    }
}

export default HomeSearchMain;