import React from "react";
import { CardText, Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  return (
    <Card key={staff.id}>
      <CardBody>
        <Link to={`/staff/${staff.id}`}>
          <CardImg width="100%" src={staff.image} alt={staff.name} />{" "}
        </Link>
      </CardBody>
      <CardText className="text-center">{staff.name}</CardText>
    </Card>
  );
}
const StaffList = (props) => {
  const stafflist = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-xs-6 col-sm-4 col-md-2 col-lg-2 my-1">
        <RenderStaff staff={staff} />
      </div>
    );
  });

  return (
    <div className="container">
      <h5 className="mt-2">NHÂN VIÊN</h5>
      <div className="row">{stafflist}</div>
    </div>
  );
};

export default StaffList;