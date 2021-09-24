import {Card, Button} from 'react-bootstrap';

export const CardViewer = (): JSX.Element => {

    return(

        <>

            <Card style={{width: "280px"}}>
            
                <Card.Body>

                    <Card.Title>{"This is a card title"}</Card.Title>
                    <Card.Text>{"This is a card text"}</Card.Text>
                    <Button variant="primary" onClick={() => {console.log("hello");}}>Show Answer</Button>
                </Card.Body>
            
            </Card>

        </>


    );

}