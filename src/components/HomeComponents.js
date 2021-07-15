import { Card, CardBody, CardImg, CardText } from "reactstrap";

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}></CardImg>
            <CardBody>
                <h5 className="card-title">{item.name}</h5>
                {item.designation ? <h6 className="card-subtitle mb-2">{item.designation}</h6> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 mb-1 mt-1">
                    <RenderCard item ={props.dish}></RenderCard>
                </div>
                <div className="col-12 col-md-4 mb-1 mt-1">
                    <RenderCard item ={props.promotion}></RenderCard>
                </div>
                <div className="col-12 col-md-4 mb-1 mt-1">
                    <RenderCard item ={props.leader}></RenderCard>
                </div>
            </div>
        </div>
    )
}

export default Home;