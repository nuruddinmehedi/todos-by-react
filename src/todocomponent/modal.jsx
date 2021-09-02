import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

function Modalbutton(props){
  const {
    buttonLabel,
    className,
    addtask
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  

  const closeBtn = <Button className="close" onClick={toggle}>&times;</Button>;

  return (
    <React.Fragment>
        <Button className="mb-1" color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>Add New Task</ModalHeader>
        <ModalBody>
        <Form onSubmit={addtask}>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input type="text" name="title" id="titleid" placeholder="Enter title" />
      </FormGroup>
      <FormGroup>
        <Label for="description ">Description</Label>
        <Input type="textarea" name="description" id="description" placeholder="Describe about your task" />
      </FormGroup>
      <ModalFooter>
          <Button value="submit" color="primary" >Submit</Button>{'  '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default Modalbutton;