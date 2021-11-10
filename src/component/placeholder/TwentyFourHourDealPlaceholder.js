import React, {Component} from 'react';
import cardPhotoPlaceholder from "../../asset/images/cardPhotoPlaceholder.svg"
import {Container} from "react-bootstrap";

class TwentyFourHourDealPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title mt-4 text-center">24 Hours Deal</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <div className="row p-0">
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-10"/>
                                        <div className="ph-col-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-10"/>
                                        <div className="ph-col-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-10"/>
                                        <div className="ph-col-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-10"/>
                                        <div className="ph-col-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-10"/>
                                        <div className="ph-col-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-10"/>
                                        <div className="ph-col-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default TwentyFourHourDealPlaceholder;