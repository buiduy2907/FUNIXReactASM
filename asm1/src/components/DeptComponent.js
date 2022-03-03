import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  CardBody,
} from "reactstrap";

const DeptList = (props) => {
  const deptlist = props.depts.map((dept) => {
    return (
      <Col xs="12" sm="6" md="4" lg="4" className="my-2">
        <Link to={`/dept/${dept.id}`}>
          <Card>
            <CardTitle className="mx-4">{dept.name}</CardTitle>
            <CardBody>
              <CardText>Số lượng nhân viên: {dept.numberOfStaff}</CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    );
  });
  return (
    <Container>
      <h5 className="mt-2">PHÒNG BAN</h5>
      <Row>{deptlist}</Row>
    </Container>
  );
};

export default DeptList;
