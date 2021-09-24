import { Button, ButtonGroup, OverlayTrigger,Tooltip } from "react-bootstrap";
import { convertToObject } from "typescript";


export const ControlPanel = (): JSX.Element => {

    // button for next card, shuffling cards, and adding cards as well, and tracking points, streaks 

    const nextCardTooltip = (props: object) => {

        return(
        <Tooltip id="nextcard-tooltip" {...props}>
            Add flash card to current collection
        </Tooltip>
        );
    
    }

    const shuffleCardsTooltip = (props: object) => {

        return(

            <Tooltip id="shufflecards-tooltip" {...props}>
                Shuffle cards currently in deck
            </Tooltip>

        );

    }

    const addCardTooltip = (props: object) => {

        return(

            <Tooltip id="addcard-tooltip" {...props}>

                Add card to deck, card is now in play

            </Tooltip>

        );

    }

    return(

        <>
            <ButtonGroup vertical>

                <OverlayTrigger placement="right" delay={{show: 300, hide: 400}} overlay={nextCardTooltip}>      
                    <Button>Next Card</Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" delay={{show: 300, hide: 400}} overlay={shuffleCardsTooltip}>
                    <Button>Shuffle Cards</Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" delay={{show: 300, hide: 400}} overlay={addCardTooltip}>
                    <Button>Add card</Button>
                </OverlayTrigger>
                
                
            </ButtonGroup>

        </>

    );

}