import React, {Component, Fragment} from 'react';
import RoomReview from "./RoomReview";

class RoomDescription extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid animated slideInUp">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="container ml-2">
                                <div className="row shadow-sm p-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h4 className="ReviewDescriptionText mb-4 mt-2">Description</h4>
                                        <p className="DescriptionDetails text-justify">Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka, also the new business hub, are the neighborhood of Hotel Sarina. Being located in this business district you are not far from any of the important destination of your choice like business district of Gulshan, Baridhara Diplomatic Zone, Airport and so on. It is only thirty minutes drive from the International Airport, about five to ten minutes drive to Gulshan and to the diplomatic zone. Two renowned shopping malls are only a few minutes walking distance from the hotel.</p>
                                        <p className="DescriptionDetails text-justify">Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka, also the new business hub, are the neighborhood of Hotel Sarina. Being located in this business district you are not far from any of the important destination of your choice like business district of Gulshan. Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. Two renowned shopping malls are only a few minutes walking distance from the hotel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left">
                            <div className="container mr-2">
                                <div className="row shadow-sm p-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-2 mb-4 ReviewDescriptionText">Map View</h6>
                                        <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.492105191647!2d90.42510111543172!3d23.765484494115775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1635144082545!5m2!1sen!2sbd"
                                                width="100%" height="300" allowFullScreen="" loading="lazy">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RoomDescription;