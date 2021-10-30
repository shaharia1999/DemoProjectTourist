import React, {Component, Fragment} from 'react';

class RoomReview extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row shadow-sm p-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 className="mt-2 mb-4 ReviewDescriptionText">Map View</h6>
                            <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.492105191647!2d90.42510111543172!3d23.765484494115775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1635144082545!5m2!1sen!2sbd"
                                width="100%" height="300" allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RoomReview;