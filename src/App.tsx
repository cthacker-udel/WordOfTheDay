import React, {useState} from 'react';
import './App.css';
import CARDS from "./assets/cards.json";
import {CardViewer} from "./components/CardViewer";
import {ControlPanel} from "./components/ControlPanel";
import { Row, Col, Container, Dropdown, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FlashCard} from "./interfaces/card";


export const LOCAL_STORAGE_CARDS = "local-storage-cards";

export const getLocalStorageCards = (): FlashCard[] => {

  let cardTitle: string | null = localStorage.getItem(LOCAL_STORAGE_CARDS);
  if(cardTitle === null){
    return [];
  }
  else{
    return JSON.parse(cardTitle);
  }

}

function App(): JSX.Element {

  const [cards,setCards] = useState<FlashCard>(CARDS[0] as FlashCard);
  const [deck,setDeck] = useState<FlashCard[]>(CARDS);

  function addCard(newCard: FlashCard){

    setDeck([...deck,newCard]);

  }


  return (
    <Container>

      <Row>

        <Col>
        
          <h3 style={{textAlign: "center", color: "white"}}>Welcome to the React Quiz!</h3>

        </Col>

      </Row>

      <Row>
    
        <Col>

          <Accordion flush>

            <Accordion.Item eventKey="0">

              <Accordion.Header>Rules </Accordion.Header>

              <Accordion.Body>

                  {"Player accumulates points by answering questions correctly, if player answers wrong, player loses point. | Streaks : If player guesses multiple questions correct in a row, point multiplier increases, however, if player answers incorrectly, point multiplier decreases"}

              </Accordion.Body>

            </Accordion.Item>


          </Accordion>

        </Col>

      </Row>

      <br />
      <br />

      <Row>

        <Col>
        
          <ControlPanel />
        
        </Col>

        <Col>

          <CardViewer />

        </Col>

      </Row>


    </Container>
  );
}

export default App;
