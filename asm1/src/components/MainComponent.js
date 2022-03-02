import React, { Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import { STAFFS,DEPARTMENTS } from "../shared/staffs";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import StaffDetail from "./StaffDetailComponent";
import DeptList from './DeptComponent';
import SlaryList from "./SlaryComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments:DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = () => {
      const params = useParams(); 
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(params.id, 10) //condition
            )[0] // 0 la index cua mang
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
            element={<StaffList staffs={this.state.staffs} />}
          />
          <Route path="/staff/:id" element={<StaffWithId />} />
          <Route path="/dept" element={<DeptList depts={this.state.departments} />} />
          <Route path="/salary" element={<SlaryList salarys={this.state.staffs} />} />
          <Route path="*" element={<Navigate to="/staff" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
