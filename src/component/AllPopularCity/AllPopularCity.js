import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import AllPopularCityPlaceholder from "../placeholder/AllPopularCityPlaceholder";

class AllPopularCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: [],
            isLoading: "",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.AllPopularCity).then(response => {
            this.setState({myData: response.data, isLoading: "d-none", MainDiv: " "})
        }).catch(error => {

        });
    }
    render() {
        const myList = this.state.myData;
        const myView = myList.map((myCity, i) => {
            return <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-2" key={i}>
                <Link to={"hotel-per-city/" + myCity.city_id + "/" + myCity.city_name}
                      className="card popularCityAnimation">
                    <img className="popularCityImage" src={myCity.city_image} alt=""/>
                    <div className="popularCityTitle">{myCity.city_name}
                        <hr className="popularCityHrTag"/>
                    </div>
                </Link>
            </div>
        });
        return (
            <Fragment>
                <AllPopularCityPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container className="whyChooseTop p-2">
                        <h5 className="section-title text-center">All Popular City</h5>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default AllPopularCity;