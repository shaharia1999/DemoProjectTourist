import React, {Component, Fragment} from 'react';
import {Breadcrumb, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class Privacy extends Component {
    render() {
        return (
            <Fragment>
                <Container className="">
                    <Breadcrumb className="mt-2">
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="/privacy">Privacy</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="des-card">
                        <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-5">
                            <h3 className="aboutTitle text-center">Privacy Policy</h3>
                            <p className="text-justify aboutDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p className="text-justify aboutDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p className="text-justify aboutDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p className="text-justify aboutDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Privacy;