import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../../api/ApiURL";
import {Container, Row} from "react-bootstrap";
import PopularCityPlaceholder from "../../placeholder/PopularCityPlaceholder";
class PopularCity extends Component {
    constructor(props) {
        super(props);
        this.state={
            myData:[],
            isLoading:"",
            MainDiv:"d-none",
        }
    }

    componentDidMount() {
        axios.get(ApiURL.HomeCity).then(response=> {
            this.setState({myData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

        });
    }
    render() {
        const myList=this.state.myData;
        const myView=myList.map(myCity=>{
            return <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 p-2">
                <Link to="/hotelPerCity" className="card popularCityAnimation">
                    <img className="popularCityImage" src={myCity.city_image} alt=""/>
                    <div className="popularCityTitle">{myCity.city_name} <hr className="popularCityHrTag"/></div>
                </Link>
            </div>
        });
        return (
            <Fragment>
                <PopularCityPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container className="whyChooseTop bg-light p-5" fluid={true}>
                        <h5 className="section-title text-center">Popular City</h5>
                        <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                        <Row>
                            {myView}

                            {/*<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 p-2">
                            <Link to="/hotelPerCity" className="card popularCityAnimation">
                                <img className="popularCityImage" src={city8} alt="Photo of sunset"/>
                                <div className="popularCityTitle">Dhaka City <hr className="popularCityHrTag"/></div>
                            </Link>
                        </div>*/}
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default PopularCity;