import React, {Component, Fragment} from 'react';
import city5 from "../../../asset/images/city/city5.jpg"
import {Container} from "react-bootstrap";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="bg-light" fluid={true}>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <img className="homeBannerImage" src={city5} alt=""/>
                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default HomeBanner;