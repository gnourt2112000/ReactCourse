import Menu from './MenuComponents';
//import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponents';
import Contact from './ContactComponents';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      dishes : DISHES,
      comments : COMMENTS,
      leaders : LEADERS,
      promotions : PROMOTIONS,
    }
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
}

  render(){
    const HomePage = () =>{
      return(
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
              leader = {this.state.leaders.filter((leader) => leader.featured)[0]}></Home>
      )
    }
    return (
      <div className="App">
        <Header></Header>
        {/* <Menu dishes ={this.state.dishes} onClick ={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}></DishDetail> */}
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} ></Menu>}></Route>
          <Route exact path='/contactus' component ={Contact}></Route>
          <Redirect to ='/home'></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;