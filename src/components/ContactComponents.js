import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Component } from 'react';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree: false,
            contactType:'Tel.',
            message:''
        }
    }

    handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit = (event) =>{
        console.log('Current State is: '+ JSON.stringify(this.state));
        alert('Current State is: '+ JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                       <h5>Our Address</h5>
                        <address>
                          121, Clear Water Bay Road<br/>
                          Clear Water Bay, Kowloon<br/>
                          HONG KONG<br/>
                          <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                          <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                          <i className="fa fa-envelope"></i>:<a href="mailto:confusion@food.net">confusion@food.net</a>
                       </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="skype.com"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>

                    <form className="col-12 col-md-9 mt-3" onSubmit={this.handleSubmit}>
                        <div className="row mb-3">
                            <label for="firstname" className="col-md-2 col-form-label">First Name</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} value={this.state.firstname} type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                            </div>
                        </div>
                    
                        <div className="row mb-3">
                            <label for="lastname" className="col-md-2 col-form-label">Last Name</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} value={this.state.lastname} type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="telnum" className="col-12 col-md-2 col-form-label">Contact Tel.</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} value={this.state.telnum} type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. Number"/>
                            </div>
                        </div>
                    
                        <div className="row mb-3">
                            <label for="email" className="col-md-2 col-form-label">Email</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} value={this.state.email} type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                            </div>
                        </div>
                    
                        <div className="row mb-3">
                            <div className="col-md-6 offset-md-2">
                                <div className="form-check">
                                    <input onChange={this.handleInputChange} type="checkbox" className="form-check-input" name="agree" id="agree" checked={this.state.agree}/>
                                    <label for="agree" className="form-check-label">
                                        <strong>May we contact you ?</strong>
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-3 offset-md-1">
                                <select className="form-select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </select>
                            </div>
                        </div>
                    
                        <div className="row mb-3">
                            <label for="message" className="col-md-2 col-form-label">Your Feedback</label>
                            <div className="col-md-10">
                                <textarea className="form-control" name="message" id="message" rows="12" value={this.state.value} onChange={this.handleInputChange}></textarea>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="offset-md-2 col-md-10">
                                <button type="submit" className="btn btn-primary">Send Deedback</button>
                            </div>
                        </div>
                    </form>

                    <div className="col-12 col-md">
                    </div>
                </div>
            </div>
        )
    } 
}

export default Contact;