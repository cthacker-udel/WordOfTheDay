import React from 'react';
import './App.css';
import CARDS from "./assets/cards.json";
import {CardViewer} from "./components/CardViewer";
import {ControlPanel} from "./components/ControlPanel";
import { Row, Col, Container } from "react-bootstrap";


function App(): JSX.Element {
  return (
    <Container>

      <Row>

        <Col>
        
        <h3 style={{textAlign: "center", color: "white"}}>Welcome to the React Quiz!</h3>

        </Col>

      </Row>

      <Row>

        <Col>
        
          <ControlPanel />
        
        </Col>

      </Row>

      <Row>

        <Col>

        </Col>

        <Col>

          <CardViewer />

        </Col>

      </Row>


    </Container>
  );
}

export default App;
