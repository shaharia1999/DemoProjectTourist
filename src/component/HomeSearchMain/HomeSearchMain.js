import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Collapse, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaMapMarkerAlt} from "react-icons/all";
import hotel1 from "../../asset/images/Hotel/HotelSarina.jpg"
import hotel2 from "../../asset/images/Hotel/InterContinentalDhaka.jpg"
import hotel3 from "../../asset/images/Hotel/PanPacificSonargaonDhaka.jpg"
import hotel4 from "../../asset/images/Hotel/TheRaintreeHotel.jpg";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";

class HomeSearchMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            open1: true,
            open2: true,
            CityData: [],
        };
    }


/*    myCityFunction = () => {
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let btnText = document.getElementById("myCityBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "See All";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "See Less";
            moreText.style.display = "inline";
        }

    }*/

    componentDidMount() {
        axios.get(ApiUrl.City).then((response) => {
            this.setState({CityData: response.data})
        }).catch(error => {

        });
    }

    myFacilitiesFunction = () => {
        let dots1 = document.getElementById("dots1");
        let moreText1 = document.getElementById("more1");
        let btnText1 = document.getElementById("myFacilitiesBtn");

        if (dots1.style.display === "none") {
            dots1.style.display = "inline";
            btnText1.innerHTML = "See All";
            moreText1.style.display = "none";
        } else {
            dots1.style.display = "none";
            btnText1.innerHTML = "See Less";
            moreText1.style.display = "inline";
        }

    }

    function=()=>{
        ('[data-toggle="tooltip"]').tooltip()
    }

    render() {
        const open = this.state.open;
        const open1 = this.state.open1;
        const open2 = this.state.open2;
        return (
            <Fragment>
                <Container className="">
                    <Row className="justify-content-center mb-4">
                        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="input-group searchUpText mb-3">
                            <input type="text" className="form-control search-placeholder"
                                   placeholder="Search by City, Hotel or Location"
                                   aria-label="Recipient's username"
                                   aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <Link to="/homeSearch" className="btn pt-3 search-btn" type="button">Search</Link>
                            </div>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                            <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open: !open})}
                                    aria-controls="example0"
                                    aria-expanded={open}>
                                    <h6 className="float-left">Price Range</h6>
                                </Button>
                                <Collapse in={this.state.open}>
                                    <Form id="example0">
                                        <Form.Group className="mb-3 input-group" controlId="formBasicEmail">
                                            <Form.Control className="mx-1" type="number" placeholder="Min Price"/>
                                            <Form.Control className="mx-1" type="number" placeholder="Max Price"/>
                                        </Form.Group>
                                    </Form>
                                </Collapse>
                            </div>

                        {/*    <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open1: !open1})}
                                    aria-controls="example0"
                                    aria-expanded={open1}>
                                    <h6 className="float-left">City</h6>
                                </Button>
                                <Collapse in={this.state.open1}>
                                    <Form id="example0">
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Dhaka"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox2">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Rangpur"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox3">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Narayanganj"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox4">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Chittagong"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox5">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Barisal"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox6">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Khulna"/>
                                        </Form.Group>
                                        <span id="dots"> </span>
                                        <span id="more">
                                          <Form.Group className="mb-2" controlId="formBasicCheckbox7">
                                              <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                          label="Gazipur"/>
                                          </Form.Group>
                                          <Form.Group className="mb-2" controlId="formBasicCheckbox8">
                                              <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                          label="Sylhet"/>
                                          </Form.Group>
                                          <Form.Group className="mb-2" controlId="formBasicCheckbox9">
                                              <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                          label="Rajshahi"/>
                                          </Form.Group>
                                          </span>
                                        <Button className="btn-sm SeeAllBtn" onClick={this.myCityFunction}
                                                id="myCityBtn">See All</Button>
                                    </Form>
                                </Collapse>
                            </div>*/}


                            <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open1: !open1})}
                                    aria-controls="example0"
                                    aria-expanded={open1}>
                                    <h6 className="float-left">City</h6>
                                </Button>
                                <Collapse in={this.state.open1}>
                                    <Form id="example0">
                                        {this.state.CityData.map((AllCity) => (
                                            <Form.Group className="mb-2" controlId="formBasicCheckbox1">
                                                 <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                  label={AllCity.city_name}/>
                                            </Form.Group>
                                        ))}
                                    </Form>
                                </Collapse>
                            </div>

                         {/*   <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open2: !open2})}
                                    aria-controls="example0"
                                    aria-expanded={open2}>
                                    <h6 className="float-left">Facilities</h6>
                                </Button>
                                <Collapse in={this.state.open2}>
                                    <Form id="example0">
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1001">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Car Parking"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1002">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Wi-fi"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1003">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Breakfast"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1004">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Swimming pool"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1005">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Public computer"/>
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicCheckbox1006">
                                            <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                        label="Poolside bar"/>
                                        </Form.Group>
                                        <span id="dots1"> </span>
                                        <span id="more1">
                                          <Form.Group className="mb-2" controlId="formBasicCheckbox1007">
                                              <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                          label="Air conditioning"/>
                                          </Form.Group>
                                          <Form.Group className="mb-2" controlId="formBasicCheckbox1008">
                                              <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                          label="Complimentary Bicycle"/>
                                          </Form.Group>
                                          <Form.Group className="mb-2" controlId="formBasicCheckbox1009">
                                              <Form.Check className="porzotokCollapseBodyTitle" type="checkbox"
                                                          label="Laundry Service"/>
                                          </Form.Group>
                                          </span>
                                        <Button className="btn-sm SeeAllBtn" onClick={this.myFacilitiesFunction}
                                                id="myFacilitiesBtn">See All</Button>
                                    </Form>
                                </Collapse>
                            </div>*/}
                        </Col>
                        <Col xl={9} lg={9} md={9} sm={9} xs={9}>

                            <Row className="SearchPageHotelCard w-100 mb-4">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <img className="SearchPageImage" src={hotel1} alt=""/>
                                </Col>
                                <Col className="" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <Link to="/hotelDetails" className="HotelSearchTitle">
                                    <h5 className="HotelSearchTitle">Six Seasons Hotel
                                        <span className="SearchStarText">
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        </span>
                                    </h5>
                                    </Link>
                                    <h6 className="SearchLocationMapTitle"><FaMapMarkerAlt
                                        className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <ul className="list-unstyled mb-2 d-md-flex">
                                        <li className="">
                                            <Button className="btn mx-1 FacilitiesBtn">WiFi</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Car Parking</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Swimming pool</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Breakfast</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Air conditioning</Button>
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <h6 className="HotelSearchReview"> 20 Review</h6>
                                    <h6 className="HotelPriceStart">From 3000 Tk/night</h6>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCard w-100 mb-4">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <img className="SearchPageImage" src={hotel2} alt=""/>
                                </Col>
                                <Col className="" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <Link to="/hotelDetails" className="HotelSearchTitle">
                                    <h5 className="HotelSearchTitle">InterContinental Dhaka
                                        <span className="SearchStarText">
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        </span>
                                    </h5>
                                    </Link>
                                    <h6 className="SearchLocationMapTitle"><FaMapMarkerAlt
                                        className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <ul className="list-unstyled mb-2 d-md-flex">
                                        <li className="">
                                            <Button className="btn mx-1 FacilitiesBtn">WiFi</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Swimming pool</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Breakfast</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Air conditioning</Button>
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <h6 className="HotelSearchReview"> 20 Review</h6>
                                    <h6 className="HotelPriceStart">From 3000 Tk/night</h6>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCard w-100 mb-4">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <img className="SearchPageImage" src={hotel3} alt=""/>
                                </Col>
                                <Col className="" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <Link to="/hotelDetails" className="HotelSearchTitle">
                                        <h5 className="HotelSearchTitle">The Raintree Hotel
                                            <span className="SearchStarText">
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            </span>
                                        </h5>
                                    </Link>
                                    <h6 className="SearchLocationMapTitle"><FaMapMarkerAlt
                                        className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <ul className="list-unstyled mb-2 d-md-flex">
                                        <li className="">
                                            <Button className="btn mx-1 FacilitiesBtn">WiFi</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Car Parking</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Breakfast</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Swimming pool</Button>
                                            {/*<button type="button" className="btn mx-1 FacilitiesBtn" data-toggle="tooltip"
                                                    data-placement="top" title="WiFi">
                                                <FaWifi/>
                                            </button>
                                            <button type="button" className="btn mx-1 FacilitiesBtn" data-toggle="tooltip"
                                                    data-placement="top" title="Car Parking">
                                                <FaCar/>
                                            </button>
                                            <button type="button" className="btn mx-1 FacilitiesBtn" data-toggle="tooltip"
                                                    data-placement="top" title="Breakfast">
                                                <IoFastFood/>
                                            </button>
                                            <button type="button" className="btn mx-1 FacilitiesBtn" data-toggle="tooltip"
                                                    data-placement="top" title="Swimming pool">
                                                <FaSwimmingPool/>
                                            </button>*/}
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <h6 className="HotelSearchReview"> 20 Review</h6>
                                    <h6 className="HotelPriceStart">From 3000 Tk/night</h6>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCard w-100 mb-4">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <img className="SearchPageImage" src={hotel4} alt=""/>
                                </Col>
                                <Col className="" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <Link to="/hotelDetails" className="HotelSearchTitle">
                                    <h5 className="HotelSearchTitle">Six Seasons Hotel
                                        <span className="SearchStarText">
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        <i className="fa fa-star"> </i>
                                        </span>
                                    </h5>
                                    </Link>
                                    <h6 className="SearchLocationMapTitle"><FaMapMarkerAlt
                                        className="LocationMapFont"/> Dhaka, bangladesh</h6>
                                    <ul className="list-unstyled mb-2 d-md-flex">
                                        <li className="">
                                            <Button className="btn mx-1 FacilitiesBtn">WiFi</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Car Parking</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Swimming pool</Button>
                                            <Button className="btn mx-1 FacilitiesBtn">Air conditioning</Button>
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <h6 className="HotelSearchReview"> 20 Review</h6>
                                    <h6 className="HotelPriceStart">From 3000 Tk/night</h6>
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