import React, {Component, Fragment} from 'react';

class RoomReview extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row shadow-sm p-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 className="mt-2 mb-4 ReviewDescriptionText">Review</h6>

                            <p className=" p-0 m-0"><span className="ReviewTitle">Monirul Islam Akand</span> <span className="StarText2 ml-2"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></span> </p>
                            <p className="ReviewDes">Lorem ipsum dolor sit amet, consecrated advising elite, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            <p className=" p-0 m-0"><span className="ReviewTitle">Joy Islam </span> <span className="StarText2 ml-2"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                            <p className="ReviewDes">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            <p className=" p-0 m-0"><span className="ReviewTitle">Abdullah Vai </span> <span className="StarText2 ml-2"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  <i className="fa fa-star"></i></span> </p>
                            <p className="ReviewDes">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RoomReview;