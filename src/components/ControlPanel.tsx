import { Button, ButtonGroup } from "react-bootstrap";

export const ControlPanel = (): JSX.Element => {

    // button for next card, shuffling cards, and adding cards as well, and tracking points, streaks 

    return(

        <>

            <ButtonGroup vertical>
                
                <Button>Next Card</Button>
                <Button>Shuffle Cards</Button>
                <Button>Add card</Button>
                
                
            </ButtonGroup>

        </>

    );

}