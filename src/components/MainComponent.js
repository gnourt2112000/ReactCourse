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
import DishDetail from './DishdetailComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import About from './AboutComponents';

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

    const DishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments ={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}></DishDetail>
      )
    }

    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} ></Menu>}></Route>
          <Route exact path='/contactus' component ={Contact}></Route>
          <Route exact path='/aboutus' component={()=><About leaders={this.state.leaders}></About>}></Route>
          <Route path='/menu/:dishId' component={DishWithId}></Route>
          <Redirect to ='/home'></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;