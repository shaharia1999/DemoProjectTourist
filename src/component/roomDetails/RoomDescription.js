import React, {Component, Fragment} from 'react';
import RoomReview from "./RoomReview";

class RoomDescription extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid animated slideInUp">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="container">
                                <div className="row shadow-sm p-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h4 className="ReviewDescriptionText mb-4 mt-2">Description</h4>
                                        <p className="DescriptionDetails text-justify">Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka, also the new business hub, are the neighborhood of Hotel Sarina. Being located in this business district you are not far from any of the important destination of your choice like business district of Gulshan, Baridhara Diplomatic Zone, Airport and so on. It is only thirty minutes drive from the International Airport, about five to ten minutes drive to Gulshan and to the diplomatic zone. Two renowned shopping malls are only a few minutes walking distance from the hotel.</p>
                                        <p className="DescriptionDetails text-justify">Welcome to Hotel Sarina, Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka, also the new business hub, are the neighborhood of Hotel Sarina. Being located in this business district you are not far from any of the important destination of your choice like business district of Gulshan. Two renowned shopping malls are only a few minutes walking distance from the hotel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left">
                            <RoomReview/>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default RoomDescription;