import { Card, CardBody, CardImg, CardText } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

function RenderCard({item,isLoading,errMess}){
    if(isLoading){
        return(
            <Loading/>
        )
    }else if(errMess){
        return(
            <h4>{errMess}</h4>
        )
    }else{
        
        return(
            <Card>
                <CardImg src={baseUrl+ item.image} alt={item.name}></CardImg>
                <CardBody>
                    <h5 className="card-title">{item.name}</h5>
                    {item.designation ? <h6 className="card-subtitle mb-2">{item.designation}</h6> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
}

function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 mb-1 mt-1">
                    <RenderCard item ={props.dish} isLoading = {props.dishesLoading} errMess= {props.dishesErrMess}></RenderCard>
                </div>
                <div className="col-12 col-md-4 mb-1 mt-1">
                    <RenderCard item ={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}></RenderCard>
                </div>
                <div className="col-12 col-md-4 mb-1 mt-1">
                    <RenderCard item ={props.leader}></RenderCard>
                </div>
            </div>
        </div>
    )
}

export default Home;