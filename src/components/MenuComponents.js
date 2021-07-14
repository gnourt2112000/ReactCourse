import { Component } from 'react';
import { Card, CardImg, CardImgOverlay} from 'reactstrap';

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state ={
            selectedDish: null 
        };
    }


    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=> this.props.onClick(dish.id)}>
                        <CardImg src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <h4>{dish.name}</h4>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;