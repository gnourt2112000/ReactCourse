import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Jumbotron, Navbar, NavbarBrand ,Nav,NavbarToggler,Collapse,NavItem, Modal, ModalBody, Button, Input} from "reactstrap";
class Header extends Component{
    constructor(props){
        super(props);
        //this.toggleNav = this.toggleNav.bind(this)
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
    }

    toggleNav = ()=>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    toggleModal = () =>{
        this.setState({
            isModalOpen :!this.state.isModalOpen
        })
    }

    handleLogin = (event) =>{
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler> 
                        <NavbarBrand className="me-auto" href="/"><img src="../assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"></img></NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to = '/home'><span className="fa fa-home"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = '/aboutus'><span className="fa fa-info"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = '/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = '/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar className="ms-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <div className="modal-header" toggle={this.toggleModal}>
                        <h5 className="modal-title">Login</h5>
                        <button type="button" class="btn-close" onClick={this.toggleModal}></button>
                    </div>
                    <ModalBody>
                        <form onSubmit = {this.handleLogin}>
                            <div className="mb-3">
                                <label for="username">Username</label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                            </div>
                            <div className="mb-3">
                                <label for="password">Password</label>
                                <Input type="text" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                            </div>
                            <div className="mb-3">
                                <Input type="checkbox"  name="remember" innerRef={(input) => this.remember = input}></Input>
                                &nbsp;Remember me
                            </div>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </form>
                    </ModalBody>

                </Modal>
            </React.Fragment>
        )
    }
}

export default Header