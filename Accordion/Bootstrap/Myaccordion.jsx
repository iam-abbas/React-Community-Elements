import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Myaccordion = () => {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4 className="text-center">Accordion using React and Bootstrap</h4>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click Here !
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              This is an Accordion using React and Bootstrap
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Myaccordion;
