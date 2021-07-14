import Menu from './MenuComponents';
//import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes'
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponents';
import {Switch,Route,Redirect} from 'react-router-dom';

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
    const HomePage = () =>{
      return(
        <Home></Home>
      )
    }
    return (
      <div className="App">
        <Header></Header>
        {/* <Menu dishes ={this.state.dishes} onClick ={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}></DishDetail> */}
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route path='/menu' component={() => <Menu dishes={this.state.dishes} ></Menu>}></Route>
          <Redirect to ='/home'></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;