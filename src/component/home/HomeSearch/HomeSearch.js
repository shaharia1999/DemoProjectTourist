import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeWriterEffect from 'react-typewriter-effect';
import {Link} from "react-router-dom";

class HomeSearch extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="homeSearch">
                    <Row className="justify-content-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="text-center">
                            {/* <div className="input-group searchTop">
                                    <input type="text" className="formSearch-control" aria-label="Text input with segmented dropdown button"/>
                                    <button type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                                </div>*/}
                            {/*   <h4 className="searchUpText justify-content-center mb-4">*/}
                            <TypeWriterEffect
                                textStyle={{
                                    color: '#ffffff',
                                    fontFamily: 'Poppins',
                                    fontWeight: 700,
                                    fontSize: '26px',
                                    marginTop: '40px',
                                    letterSpacing: '0.9px',
                                    marginBottom: '10px',
                                    textAlign: 'center',
                                }}
                                cursorColor="white"
                                multiText={[
                                    'HEY THERE, THIS IS A PORZOTOK WEBSITE',
                                    'IT CONTAINS OF TWO TYPES...',
                                    'LET’S DISCOVER BANGLADESH TOGETHER'
                                ]}
                                loop={true}
                                nextTextDelay={1000}
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />

                            <div className="input-group mb-3">
                                <input type="text" className="form-control search-placeholder" placeholder="Search by City, Hotel or Location" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                  <Link to="/homeSearch" className="btn pt-3 search-btn" type="button">Search</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeSearch;