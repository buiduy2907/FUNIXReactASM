import React, { Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  withRouter,
} from "react-router-dom";
import StaffDetail from "./StaffDetailComponent";
import DeptList from "./DeptComponent";
import SlaryList from "./SlaryComponent";
import DeptDetail from "./DeptDetailComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const StaffWithId = () => {
      const params = useParams();
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(params.id, 10)
            )[0]
          }
        />
      );
    };
    const DeptDetailWithId = () => {
      console.log("run");
      const params = useParams();
      return (
        <DeptDetail
          staffs={this.props.staffs.filter(
            (staff) => staff.department.id === params.id
          )}
          dept={
            this.props.departments.filter((dept) => dept.id === params.id)[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/staff"
            element={<StaffList staffs={this.props.staffs} />}
          />
          <Route path="/staff/:id" element={<StaffWithId />} />
          <Route
            path="/dept"
            element={<DeptList depts={this.props.departments} />}
          />
          <Route path="/dept/:id" element={<DeptDetailWithId />} />
          <Route
            path="/salary"
            element={<SlaryList salarys={this.props.staffs} />}
          />
          <Route path="*" element={<Navigate to="/staff" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
