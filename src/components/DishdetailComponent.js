import { Component } from "react";
import { Card, CardImg, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)
        this.state ={};
    }

    renderComment(comments){
        const commentsDish = comments.map((comment)=>{
            return(
                <div key = {comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
                )
            })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {commentsDish}
            </div> 
        )
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <h5>{dish.name}</h5>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComment(dish.comments)}
                </div>
            );
        }else{
            return(
                <div>
                </div>
            );
        }
    }


    render(){
            return(
                <div className="container">
                    {this.renderDish(this.props.dish)}
                </div>  
            )
        
    }
}

export default DishDetail;