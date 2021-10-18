import React, {Component, Fragment} from 'react';
import HomeBannerImg from "../../../asset/images/HomeBannerImg.jpg"

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row p-4">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <img className="homeBannerImage" src={HomeBannerImg} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomeBanner;