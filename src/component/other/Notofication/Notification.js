import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            FaqModal1:false,
            FaqModal2:false,
            FaqModal3:false,
        }
    }

    handleClose1=()=>{
        this.setState({ FaqModal1:false})
    }

    handleOpen1=()=>{
        this.setState({ FaqModal1:true})
    }

    handleClose2=()=>{
        this.setState({ FaqModal2:false})
    }
    handleOpen2=()=>{
        this.setState({ FaqModal2:true})
    }

    handleClose3=()=>{
        this.setState({ FaqModal3:false})
    }
    handleOpen3=()=>{
        this.setState({ FaqModal3:true})
    }

    render() {
        return (
            <Fragment>
                    <Container className="mt-2">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="card notificationCard p-3">
                                    <h1 className="notificationQuestion">What is Porzotok?</h1>
                                    <button onClick={this.handleOpen1} type="button" className="btn notificationBtn btn-sm">Details</button>
                                </div>
                            </Col>

                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="card notificationCard p-3">
                                    <h1 className="notificationQuestion">What is Porzotok?</h1>
                                    <button onClick={this.handleOpen2} type="button" className="btn notificationBtn btn-sm">Details</button>
                                </div>
                            </Col>

                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="card notificationCard p-3">
                                    <h1 className="notificationQuestion"> What is Porzotok?</h1>
                                    <button onClick={this.handleOpen3} type="button" className="btn notificationBtn btn-sm">Details</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Modal size="lg" show={this.state.FaqModal1} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose1}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">What is Porzotok? </p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={this.state.FaqModal2} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose2}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">What is Porzotok?</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose2}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={this.state.FaqModal3} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose3}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion"> What is the last time of application?</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose3}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </Fragment>
        );
    }
}

export default Notification;