import { Card, CardImg, CardImgOverlay,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderMenuItem({dish,onClick}){
    return(
        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>
                <CardImg src={dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                    <h4>{dish.name}</h4>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

const Menu = (props) => {
        const menu = props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }

export default Menu;