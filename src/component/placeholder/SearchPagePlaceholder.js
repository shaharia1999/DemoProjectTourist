import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import img1 from '../../asset/images/h1.jpg'
import img2 from '../../asset/images/h2.jpg'
import img3 from '../../asset/images/h3.jpg'
import img4 from '../../asset/images/h4.webp'
import img5 from '../../asset/images//h5.jpg'
import img6 from '../../asset/images/h6.jpg'


class SearchPagePlaceholder extends Component {
 
    render()
     {
        // let isLoading = this.props.isLoading;
   
        return (
            // <div className={isLoading}>
                <Container className="">
                    <Row className="justify-content-center mb-4 mt-2">
                        {/* <Col xl={8} lg={8} md={8} sm={8} xs={8} className="input-group searchUpText mb-3">
                            <Row className="SearchPageHotelCardPlaceholder mt-2 w-100 bg-danger" >
                                <Col className="pl-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <h1 className="">Visional</h1>
                                                <h1 className="d-none">hello</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col> */}
                        <div class="py-2 text-center bg-light w-100 bodyCard ">
                                <h1 class="mb-3 w-100">Visional City</h1>
                            
                        </div>
                    </Row>

                    <Row className="">
                        {/* <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                            <div className="pr-3" style={{width: 'auto'}}>
                                <div className="ph-item ph-item-padding1 mt-4 w-100">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12 m-0 p-0 big "></div>
                                            <div className="ph-col-12 m-0 p-0 big"></div>
                                        </div>

                                        <div className="ph-row mt-3">
                                            <div className="ph-col-6 m-0 pr-1 big "></div>
                                            <div className="ph-col-6 m-0 pl-1 big"></div>
                                            <div className="ph-col-6 m-0 pr-1 big"></div>
                                            <div className="ph-col-6 m-0 pl-1 big"></div>
                                        </div>

                                        <div className="ph-row mt-3">
                                            <div className="ph-col-12 m-0 p-0 big "></div>
                                            <div className="ph-col-12 m-0 p-0 big"></div>
                                        </div>

                                        <div className="ph-row mt-3">
                                            <div className="ph-col-12 p-0 big"></div>
                                            <div className="ph-col-12 p-0 big"></div>
                                            <div className="ph-col-12 p-0 big"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pr-3" style={{width: 'auto'}}>

                            </div>
                        </Col> */}
                        <Col xl={12} lg={12} md={9} sm={12} xs={12}>
                            <Row className="SearchPageHotelCardPlaceholder w-100">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    {/* <div className="ph-picture PreviewImgLargePlaceholder"/> */}
                                    <img className="w-100" src={img2} alt=""/>
                                </Col>
                                <Col className="p-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    {/* <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-3"></div>
                                                <div className="ph-col-10"></div>
                                                <div className="ph-col-2 empty"></div>

                                                <div className="mt-4"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-6 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>

                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-4 big mx-1"></div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className=" ph-item h-100 w-100">
                                               <div className="ph-col-12">
                                      <Card.Body className='p-0 m-0 bodyCard'>
                                           <h4>Holiday Inn Express</h4>
                                           <p>
                                                Some quick example text to build on the card .
                                            </p>
                                       </Card.Body>
                                    </div>
                                    </div>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="d-flex justify-content-center itmes-center align-items-center bodyCard  h-100 mt-5">

                                                {/* <div className="ph-col-8 mt-4 text-center big"></div>
                                                <div className="ph-col-4 empty big"></div> */}
                                                    <Button className='bg-white rounded-pill' onClick={()=>{alert("This Web Page Desing For Demo Purpose!!!!")}}>Booking</Button>
                                                {/* <div className="mt-5"></div>
                                                <div className="ph-col-10 mt-5"></div>
                                                <div className="ph-col-2 empty"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCardPlaceholder mt-2 w-100">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    {/* <div className="ph-picture PreviewImgLargePlaceholder"/> */}
                                    <img className="w-100" src={img6} alt=""/>
                                </Col>
                                <Col className="p-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    {/* <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-3"></div>
                                                <div className="ph-col-10"></div>
                                                <div className="ph-col-2 empty"></div>

                                                <div className="mt-4"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-6 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>

                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-4 big mx-1"></div>
                                            </div>
                                        </div>
                                    </div> */}
                                       <div className=" ph-item h-100 w-100">
                                               <div className="ph-col-12">
                                      <Card.Body className='p-0 m-0 bodyCard'>
                                           <h4>Holiday Inn Express</h4>
                                           <p>
                                                Some quick example text to build on the card .
                                            </p>
                                       </Card.Body>
                                    </div>
                                    </div>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            {/* <div className="ph-row p-0">

                                                <div className="ph-col-8 mt-4 text-center big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-5"></div>
                                                <div className="ph-col-10 mt-5"></div>
                                                <div className="ph-col-2 empty"></div>
                                            </div> */}
                                             <div className="d-flex justify-content-center itmes-center align-items-center bodyCard  h-100 mt-5">

                                            {/* <div className="ph-col-8 mt-4 text-center big"></div>
                                            <div className="ph-col-4 empty big"></div> */}
                                                <Button className='bg-white rounded-pill' onClick={()=>{alert("This Web Page Desing For Demo Purpose!!!!")}}>Booking</Button>
                                            {/* <div className="mt-5"></div>
                                            <div className="ph-col-10 mt-5"></div>
                                            <div className="ph-col-2 empty"></div> */}
                                            </div>
                                    </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCardPlaceholder mt-2 w-100">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    {/* <div className="ph-picture PreviewImgLargePlaceholder"/> */}
                                    <img className="w-100" src={img4} alt=""/>
                                </Col>
                                <Col className="p-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    {/* <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-3"></div>
                                                <div className="ph-col-10"></div>
                                                <div className="ph-col-2 empty"></div>

                                                <div className="mt-4"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-6 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>

                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-4 big mx-1"></div>
                                            </div>
                                        </div>
                                    </div> */}
                                       <div className=" ph-item h-100 w-100">
                                               <div className="ph-col-12">
                                      <Card.Body className='p-0 m-0 bodyCard'>
                                           <h4>Holiday Inn Express</h4>
                                           <p>
                                                Some quick example text to build on the card .
                                            </p>
                                       </Card.Body>
                                    </div>
                                    </div>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            {/* <div className="ph-row p-0">
                                                <div className="ph-col-8 mt-4 text-center big"> </div>
                                                <div className="ph-col-4 empty big"> </div>

                                                <div className="mt-5"> </div>
                                                <div className="ph-col-10 mt-5"> </div>
                                                <div className="ph-col-2 empty"> </div>
                                            </div> */}
                                             <div className="d-flex justify-content-center itmes-center align-items-center bodyCard  h-100 mt-5">

                                                {/* <div className="ph-col-8 mt-4 text-center big"></div>
                                                <div className="ph-col-4 empty big"></div> */}
                                                    <Button className='bg-white rounded-pill' onClick={()=>{alert("This Web Page Desing For Demo Purpose!!!!")}}>Booking</Button>
                                                {/* <div className="mt-5"></div>
                                                <div className="ph-col-10 mt-5"></div>
                                                <div className="ph-col-2 empty"></div> */}
                                                </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            // </div>
        );
    }
}

export default SearchPagePlaceholder;