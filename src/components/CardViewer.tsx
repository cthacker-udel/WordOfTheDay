import {Card, Button} from 'react-bootstrap';

export const CardViewer = (): JSX.Element => {

    return(

        <>

            <Card style={{width: "18px"}}>
            
                <Card.Body>

                    <Card.Title>{""}</Card.Title>
                    <Card.Text>{""}</Card.Text>
                    <Button variant="primary" onClick={() => {console.log("hello");}}>Show Answer</Button>
                </Card.Body>
            
            </Card>

        </>


    );

}