import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import cardPhotoPlaceholder from "../../asset/images/cardPhotoPlaceholder.svg";
import img1 from '../../asset/images/h1.jpg'
import img2 from '../../asset/images/h2.jpg'
import img3 from '../../asset/images/h3.jpg'
import img4 from '../../asset/images/h4.webp'
import img5 from '../../asset/images//h5.jpg'
import img6 from '../../asset/images/h6.jpg'

class CartListPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container className="TopSection pb-5 text-center shadow-sm bg-white">
                    <Row className="p-2 bg-light text-center">
                        <Col className="p-3" key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div class="py-2 text-center bg-light w-100 bodyCard ">
                                <h1 class="mb-3 w-100">ROOM CART LIST</h1>
                            
                        </div>
                        </Col>
                    </Row>
                    <div className="p-5">
                        <Row>
                            <Col className="p-2" key={1} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard w-100">
                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">IMAGE</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">ROOM NAME</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">CHECK IN</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">CHECK OUT</h6>
                                    </Col>

                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                        <h6 className="CartListTitle">PRICE</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">TOTAL PRICE</h6>
                                    </Col>

                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                        <h6 className="CartListTitle">ACTION</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="p-2" xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard mb-2 w-100">
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <img className="CartRoomImagePH" src={img1} alt=""/>
                                    </Col>
                                    <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                    <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="RoomOnCartCard mb-2 w-100">
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <img className="CartRoomImagePH" src={img2} alt=""/>
                                    </Col>
                                    <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="RoomOnCartCard mb-2 w-100">
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <img className="CartRoomImagePH" src={img3} alt=""/>
                                    </Col>
                                    <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <div className="CartItemCardPH ph-item h-100 w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row>
                            <Col className="" xl={8} lg={8} md={8} sm={8} xs={8} >
                            </Col>
                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="w-100">
                                    <Col className="" xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <div className="ph-item CartSmallItemCardPH w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="" xl={6} lg={6} md={6} sm={6} xs={6} >
                            </Col>
                            <Col className="" xl={6} lg={6} md={6} sm={6} xs={6} >
                                <Row className="w-100">
                                    <Col className="" xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <div className="ph-item CartSmallItemCardPH w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p>Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="" xl={8} lg={8} md={8} sm={8} xs={8} >
                            </Col>
                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="w-100">
                                    <Col className="" xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <div className="ph-item CartSmallItemCardPH w-100">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                     <p className='text-right'>$50000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default CartListPlaceholder;