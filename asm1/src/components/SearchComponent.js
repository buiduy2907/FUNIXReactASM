import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Search = (props) => {
  const sendKey = (event) => {
    event.preventDefault();
    props.parentCallback(event.target[0].value);
  };
  return (
    <Form className="pt-2 ml-auto" inline onSubmit={sendKey}>
      <FormGroup>
        <Input
          type="text"
          placeholder="Tìm theo tên nhân viên"
          size="20"
          id="searchtext"
        ></Input>
      </FormGroup>
      <FormGroup>
        <Button type="submit" value="submit" color="primary">
          Tìm Kiếm
        </Button>
      </FormGroup>
    </Form>
  );
};

export default Search;
