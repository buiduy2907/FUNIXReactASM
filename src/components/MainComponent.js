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
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreator";
import { actions } from "react-redux-form";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const mapStatetoProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

const mapDispatchtoProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render() {
    const Homepage = () => {
      console.log(this.props.dishes);

      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
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
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition in={false} classNames="page" timeout={300}>
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route
                path="/contactme"
                element={
                  <Contact
                    resetFeedbackForm={() => this.props.resetFeedbackForm}
                  />
                }
              />
              <Route
                path="/aboutus"
                element={<About leaders={this.props.leaders} />}
              />
              <Route
                path="/menu"
                element={<Menu dishes={this.props.dishes} />}
              />
              <Route path="/menu/:dishId" element={<DishWithId />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Main);
