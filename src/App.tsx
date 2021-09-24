import React from 'react';
import './App.css';
import CARDS from "./assets/cards.json";
import {CardViewer} from "./components/CardViewer";
import {ControlPanel} from "./components/ControlPanel";
import { Row, Col, Container } from "react-bootstrap";
import { Timestamp } from "./components/Timestamp";


function App(): JSX.Element {
  return (
    <Container>

      <Row>

        <Col>
        
          <ControlPanel />
        
        </Col>

        <Col>
        
          <Timestamp />
        
        </Col>

      </Row>

      <Row>

        <Col>

          <CardViewer />

        </Col>

      </Row>


    </Container>
  );
}

export default App;
