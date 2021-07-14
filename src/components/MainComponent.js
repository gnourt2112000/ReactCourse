import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes'
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      dishes : DISHES,
      selectedDish :null
    }
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
}

  render(){
    return (
      <div className="App">
        <Header></Header>
        <Menu dishes ={this.state.dishes} onClick ={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}></DishDetail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;