import React, {Component, Fragment} from 'react';
import homeBanner from "../../../asset/images/homeBanner.webp"

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <img className="homeBannerImage" src={homeBanner} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomeBanner;