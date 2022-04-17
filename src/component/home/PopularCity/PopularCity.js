import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../../api/ApiURL";
import {Container, Row} from "react-bootstrap";
import PopularCityPlaceholder from "../../placeholder/PopularCityPlaceholder";
import ApiUrl from "../../../api/ApiURL";

class PopularCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: [],
            isLoading: "",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.MostPopularCity).then(response => {
            this.setState({myData: response.data.data, isLoading: "d-none", MainDiv: " "})
        }).catch(error => {

        });
    }

    render() {
        const myList = this.state.myData;
        const myView = myList.map((myCity, i) => {
            return <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 p-2" key={i}>
                <Link to={"hotel-per-city/" + myCity.city_id + "/" + myCity.city_name}
                      className="card popularCityAnimation">
                    <img className="popularCityImage" src={ApiUrl.BaseUrl1 + myCity.city_image} alt=""/>
                    <div className="popularCityTitle">{myCity.city_name}
                        <hr className="popularCityHrTag"/>
                    </div>
                </Link>
            </div>
        });
        return (
            <Fragment>
                <PopularCityPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container className="whyChooseTop bg-light p-5" fluid={true}>
                        <h6 className="section-title text-center">Popular City<Link to="/all-popular-city"
                                                                                          className="btn SeeMore">See
                            More</Link></h6>
                        <h6 className="sectionSubTitle text-center mb-5">Find your popular city around the bangladesh</h6>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default PopularCity;