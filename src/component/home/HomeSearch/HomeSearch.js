import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeWriterEffect from 'react-typewriter-effect';
import {Redirect} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

class HomeSearch extends Component {
    constructor() {
        super();
        this.state={
            SearchKey:"",
            SearchRedirectStatus: false,
        }
        this.SearchOnChange=this.SearchOnChange.bind(this);
        this.SearchOnClick=this.SearchOnClick.bind(this);
        this.searchRedirect=this.searchRedirect.bind(this);
    }

    SearchOnChange(event){
        let SearchKey=  event.target.value;
        this.setState({SearchKey:SearchKey});
    }

    SearchOnClick(){
        if(this.state.SearchKey.length>=2){
            this.setState({SearchRedirectStatus:true})
        }else{
            toast.error('Please write minimum 2 letter!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
    }

    searchRedirect(){
        if(this.state.SearchRedirectStatus===true){
            return <Redirect to={"/hotel-search/"+this.state.SearchKey}/>
        }
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="homeSearch">
                    <Row className="justify-content-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="text-center">

                            <div className="input-group searchUpText mb-3">
                                <input onChange={this.SearchOnChange} type="text" className="form-control search-placeholder" placeholder="Search by City, Hotel or Location" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                  <button onClick={this.SearchOnClick} className="btn pt-1 search-btn" type="button">Search</button>
                                </div>
                            </div>

                            <TypeWriterEffect
                                textStyle={{
                                    color: '#ffffff',
                                    fontFamily: 'Poppins',
                                    fontWeight: 700,
                                    fontSize: '26px',
                                    letterSpacing: '0.9px',
                                    marginBottom: '10px',
                                    textAlign: 'center',
                                }}
                                cursorColor="white"
                                multiText={[
                                    // 'HEY THERE, THIS IS A PORZOTOK WEBSITE',
                                    //  'IT CONTAINS OF TWO TYPES...',
                                     'LET’S DISCOVER BANGLADESH TOGETHER'
                                ]}
                                loop={true}
                                nextTextDelay={1000}
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </Col>
                    </Row>
                </Container>
                <ToastContainer/>
                {this.searchRedirect()}
            </Fragment>
        );
    }
}

export default HomeSearch;