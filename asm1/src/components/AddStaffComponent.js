import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { LocalForm, Control, Errors } from "react-redux-form";
import {
  Col,
  Row,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class AddNewStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isModalOpen: false,
      id: "",
      salaryScale: 1,
      department: "Finance",
      annualLeave: 0,
      overTime: 0,
      salary: "",
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
      staffs: this.props.staffs,
    };
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onHandleAddStaff = this.onHandleAddStaff.bind(this);
  }

  onToggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  onHandleAddStaff(values) {
    console.log(values);
    this.onToggleModal();
    const newStaff = {
      id: this.props.staffs.length,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: this.defineDep(values.department),
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      salary: this.state.salary,
      image: this.state.image,
    };
    this.state.staffs.push(newStaff);
    this.props.sendInfo(newStaff);
  }

  render() {
    return (
      <div>
        <Button onClick={this.onToggleModal} color="primary">
          <span className="fa fa-plus"></span>
        </Button>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.onToggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.onHandleAddStaff(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    validators={{
                      minLength: minLength(2),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      minLength: "Yêu cầu nhập từ 2 kí tự trở lên ",
                      maxLength: "Yêu cầu nhập tối đa 30 kí tự",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Control
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    pattern="\d{2}-\d{2}-d{4}"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập ",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>{" "}
                <Col md={8}>
                  <Control
                    type="date"
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    pattern="\d{2}-\d{2}-d{4}"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập ",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    defaultValue={this.state.department}
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>{" "}
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    className="form-control"
                    validators={{
                      isNumber,
                    }}
                    defaultValue={this.state.salaryScale}
                  />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập số ",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    className="form-control"
                    validators={{
                      isNumber,
                    }}
                    defaultValue={this.state.annualLeave}
                  />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập số ",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    className="form-control"
                    validators={{
                      isNumber,
                    }}
                    defaultValue={this.state.overTime}
                  />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập số ",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Button
                  type="submit"
                  value="submit"
                  color="primary"
                  className="offset-5 mt-2"
                >
                  Thêm
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddNewStaff;
