import React, {Component, Fragment} from 'react';
import HomeBannerImg1 from "../../../asset/images/HomeBannerImg1.jpg"

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-light">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <img className="homeBannerImage" src={HomeBannerImg1} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomeBanner;