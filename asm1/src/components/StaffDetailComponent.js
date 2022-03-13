import React from "react";
import {
  CardText,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";

function StaffDetail({ staff }) {
  if (staff != null) {
    const department = staff.department.name;
    return (
      <Container className="my-3">
        <Breadcrumb>
          <BreadcrumbItem href="/staff" tag="a">
            Nhân Viên
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="span">
            {staff.name}
          </BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col xs="12" sm="4" md="3" lg="3">
            <CardImg width="100%" src={staff.image} alt={staff.name}></CardImg>
          </Col>
          <Col xs="12" sm="8" md="9" lg="9">
            <Card>
              <CardBody>
                <CardTitle className="h4">Họ và tên: {staff.name}</CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban:{department}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                <CardText>Hệ số lương: {staff.salaryScale}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

export default StaffDetail;
