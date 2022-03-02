import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

const SlaryList = ({ salarys }) => {
  const salaryslist = salarys.map((salary) => {
    const current_salary =
      parseInt(salary.salaryScale * 3000000) +
      parseInt((salary.overTime * 200000) / 8);
    return (
      <Col xs="12" sm="6" md="4" lg="4" className="my-2">
        <Card>
          <CardHeader>{salary.name}</CardHeader>
          <CardBody>
            <CardText>Mã nhân viên:{salary.id}</CardText>
            <CardText>Hệ số lương:{salary.salaryScale}</CardText>
            <CardText>Số giờ làm thêm:{salary.overTime}</CardText>
          </CardBody>
          <CardFooter>Lương:{current_salary}</CardFooter>
        </Card>
      </Col>
    );
  });
  return (
    <Container>
        <Breadcrumb className="mt-2">
          <BreadcrumbItem href="/staff" tag="a">
            Nhân Viên
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="span">
            Bảng Lương
          </BreadcrumbItem>
        </Breadcrumb>
      <Row>
        {salaryslist}
      </Row>
    </Container>
  );
};

export default SlaryList;
