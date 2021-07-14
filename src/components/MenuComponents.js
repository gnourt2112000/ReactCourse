import { Card, CardImg, CardImgOverlay} from 'reactstrap';


function RenderMenuItem({dish,onClick}){
    return(
        <Card key={dish.id} onClick={()=> onClick(dish.id)}>
            <CardImg src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <h4>{dish.name}</h4>
            </CardImgOverlay>
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
                    {menu}
                </div>
            </div>
        )
    }

export default Menu;