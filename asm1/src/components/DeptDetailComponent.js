import React from "react";
import StaffList from "./StaffListComponent";

function DeptDetail(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
        </div>
      </div>
      <StaffList staffs={props.staffs} />
    </div>
  );
}
export default DeptDetail;