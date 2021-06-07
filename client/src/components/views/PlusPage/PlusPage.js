import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//login이용하기
const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="serialNumber">Serial Number</Label>
        <Input type="text" name="serial" id="serialNumber" placeholder=""/>
      </FormGroup>
      <Button>ADD</Button>
    </Form>
  ); 
}

export default Example;