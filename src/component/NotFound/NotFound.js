import React, {Component, Fragment} from 'react';
import Logo404 from '../../asset/images/404Logo.svg'
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-5">
                            <img className="NotFoundLogoImg d-flex" src={Logo404} alt=""/>
                            <Link className="btn mt-5 btn-sm GoHomeBtn" to="/">Go Home <i className="fa fa-arrow-right"> </i></Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NotFound;