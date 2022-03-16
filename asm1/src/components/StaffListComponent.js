import React, { Component } from "react";
import { CardText, Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "./SearchComponent";
import AddNewStaff from "./AddStaffComponent";

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

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      newStaff: {},
    };
    this.getSearchkey = this.getSearchkey.bind(this);
  }

  getSearchkey(key) {
    this.setState({
      searchName: key,
    });
  }
  getNewStaffInfo = (info) => {
    this.setState({
      newStaff: info,
    });
  };

  render() {
    const stafflist = this.props.staffs
      .filter((staff) =>
        staff.name.toLowerCase().includes(this.state.searchName.toLowerCase())
      )
      .map((staff) => {
        return (
          <div
            key={staff.id}
            className="col-xs-6 col-sm-4 col-md-2 col-lg-2 my-1"
          >
            <RenderStaff staff={staff} />
          </div>
        );
      });
    return (
      <div className="container">
        <div className="row mt-2">
          <h2 className="col-lg-3">NHÂN VIÊN</h2>
          <AddNewStaff
            className="col-lg-4"
            staffs={this.props.staffs}
            sendInfo={this.getNewStaffInfo}
          />
          <Search className="col-lg-4" parentCallback={this.getSearchkey} />
        </div>
        <div className="row">{stafflist}</div>
      </div>
    );
  }
}

export default StaffList;
