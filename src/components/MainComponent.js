import Menu from './MenuComponents';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponents';
import Contact from './ContactComponents';
import DishDetail from './DishdetailComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import About from './AboutComponents';
import { connect } from 'react-redux';
import { addComment,fetchDishes,fetchComments,fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes :() =>{dispatch(fetchDishes())},
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
  fetchComments:()=>{dispatch(fetchComments())},
  fetchPromos: ()=>{dispatch(fetchPromos())}
})



class Main extends Component {
  // constructor(props){
  //   super(props);
  // }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render(){
    const HomePage = () =>{
      return(
        <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading = {this.props.dishes.isLoading}
              dishesErrMess = {this.props.dishes.errMess}
              promotion = {this.props.promotions.promos.filter((promo) => promo.featured)[0]}
              promosLoading = {this.props.promotions.isLoading}
              promosErrMess = {this.props.promotions.errMess}
              leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
        ></Home>
      )
    }

    const DishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading = {this.props.dishes.isLoading}
                    errMess = {this.props.dishes.errMess}
                    comments ={this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess = {this.props.comments.errMess}
                    addComment = {this.props.addComment}            
        ></DishDetail>
      )
    }

    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} ></Menu>}></Route>
          <Route exact path='/contactus' component ={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}></Route>
          <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}></About>}></Route>
          <Route path='/menu/:dishId' component={DishWithId}></Route>
          <Redirect to ='/home'></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));