import React, {Component, Fragment} from 'react';
import city5 from "../../../asset/images/city/city5.jpg"
import {Container} from "react-bootstrap";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="bg-light m-0 p-0" fluid={true}>
                    <div className="row m-0 p-0">
                        <div className="homeBannerImage col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default HomeBanner;