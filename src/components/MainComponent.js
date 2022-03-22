import React, { Component } from "react";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/ActionCreator";
import { actions } from "react-redux-form";

const mapStatetoProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

const mapDispatchtoProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    const Homepage = () => {
      console.log(this.props.dishes);

      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = () => {
      let params = useParams();
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (cmt) => cmt.dishId === parseInt(params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route
            path="/contactme"
            element={
              <Contact resetFeedbackForm={() => this.props.resetFeedbackForm} />
            }
          />
          <Route
            path="/aboutme"
            element={<About leaders={this.props.leaders} />}
          />
          <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Main);
