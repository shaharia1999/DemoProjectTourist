import React, {Component,Fragment} from 'react';
import {Container,Navbar,Nav,NavLink,NavDropdown} from "react-bootstrap";
import ios from "../../../asset/images/apple.png"

class NavTopSection extends Component {
    render() {
        return (
            <Fragment>
                {/*<div className="container-fluid">
                    <div className="row mt-2 mb-2">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 justify-content-center">
                            <NavLink exact to="/"><img className="w-25 img-Center" src={ios} alt=""/></NavLink>
                        </div>
                    </div>
                </div>*/}

                <Navbar expand="lg" className="sticky-top Navbar">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link> <NavLink exact className="navItem mx-2 nav-font" to="/">Become a Member</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact className="navItem mx-2 nav-font" to="/About">List your Property</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact className="navItem mx-2 nav-font" to="/">Login/Signup</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar variant="light" bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown id="nav-dropdown-dark-example" title="Dhaka" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Chittagong" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Sylhet" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Rajshahi" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Jossore" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Barisal" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Khulna" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Rangpur" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Mymanshing" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="nav-dropdown-dark-example" title="Narayangan" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavTopSection;