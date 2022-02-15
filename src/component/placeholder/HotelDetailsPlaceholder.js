import React, {Component} from 'react';
import HotelReview from "../hotelDetails/HotelReview";

class HotelDetailsPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <div className="container-fluid bg-light">
                    <div className="row p-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row shadow-sm bg-white">

                                <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="ph-picture PreviewImgLarge"/>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                    <div className="ph-item p-0">
                                        <div className="ph-col-12 p-0">
                                            <div className="ph-row">
                                                <div className="ph-col-8 big"/>
                                                <div className="ph-col-6"/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-100"/>
                                    <div className="ph-item p-0">
                                        <div className="ph-col-12 p-0">
                                            <div className="ph-row">
                                                <div className="ph-col-6 big"/>
                                                <div className="ph-col-8"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                        <div className="ph-item p-0">
                                            <div className="ph-col-12 p-0">
                                                <div className="ph-row p-0">
                                                    <div className="ph-col-6 big"/>
                                                </div>
                                                <div className="ph-picture"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white">
                            <div className="container">
                                <div className="row shadow-sm p-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="ph-item p-0">
                                            <div className="ph-col-12 p-0">
                                                <div className="ph-row">
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                </div>
                                                <div className="ph-row mt-4">
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left bg-white">
                            <div className="p-5">
                                <div className="ph-item p-0">
                                    <div className="ph-col-12 p-0">
                                        <div className="ph-row">
                                            <div className="ph-col-4 big"/>
                                        </div>
                                        <div className="ph-row mt-4">
                                            <div className="ph-col-4 big"/>
                                            <div className="ph-col-12"/>
                                            <div className="ph-col-8"/>
                                        </div>
                                        <div className="ph-row mt-3">
                                            <div className="ph-col-4 big"/>
                                            <div className="ph-col-12"/>
                                            <div className="ph-col-8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default HotelDetailsPlaceholder;