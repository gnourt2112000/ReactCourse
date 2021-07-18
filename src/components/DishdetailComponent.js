import { Component } from 'react';
import { Control, LocalForm,Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,Breadcrumb,BreadcrumbItem, Button, Modal, ModalBody} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length
const maxLength = (len) => (val) => !val || (val.length <= len)
const minLength = (len) => (val) => val && (val.length >= len)

class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFormOpen: false
        }
    }

    toggleForm = ()=>{
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    handleSubmit = (values) =>{
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
    }

    render(){
        return(
            <div>
                <Button outline type="submit" value="submit" color="secondary" onClick={this.toggleForm}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
                    <div className="modal-header" toggle={this.toggleModal}>
                        <h5 className="modal-title">Submit Comment</h5>
                        <button type="button" class="btn-close" onClick={this.toggleForm}></button>
                    </div>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                            <div className="row mb-3">
                                <label for="rating">Rating</label>
                                <div>
                                    {/* eslint-disable-next-line */} 
                                    <Control.select model=".rating" className="form-select" name="rating" id ="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="author">Your Name</label>
                                <div>
                                    {/* eslint-disable-next-line */}
                                    <Control.text model=".author" className="form-control" name="youtname" id="author" placeholder="Your Name"
                                        validators={{
                                            required,minLength: minLength(3), maxLength:maxLength(15)
                                        }}
                                    />
                                    <Errors className="text-danger" model=".author" show="touched"
                                        messages={{
                                            required:"Required! ",
                                            minLength: "Must be greater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className= "row mb-3">
                                <label for="comment">Comment</label>
                                <div>
                                    {/* eslint-disable-next-line */}
                                    <Control.textarea model=".comment" className="form-control" name="comment" id="comment" rows="6"></Control.textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


   function RenderComment({comments,postComment,dishId}){
        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                        return(
                        <li key = {comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    )})}
                    </ul>
                    <CommentForm postComment={postComment} dishId={dishId}></CommentForm>
                </div> 
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    function RenderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={baseUrl+ dish.image} alt={dish.name}/>
                        <CardBody>
                            <h5>{dish.name}</h5>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                    
            );
        }else{
            return(
                <div>
                </div>
            );
        }
    }

    const DishDetail = (props) => {
            if(props.isLoading){
                return(
                    <div className="container">
                        <div className="row">
                            <Loading/>
                        </div>
                    </div>
                )
            }else if(props.errMess){
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                )
            } else if(props.dish != null){
                return(
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            {RenderDish(props.dish)}
                            <RenderComment comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>   
                        </div>
                    </div>  
                )
            }else{
                return(
                    <div></div>
                )
            }
    }
export default DishDetail;