//export type flashCardType = "Easy" | "Medium" | "Hard";

export enum FlashCardKind{

    Easy = "Easy", Medium = "Medium", Hard = "Hard"

}

export interface flashCard {

    Q: string
    A: string
    P: number
    kind: FlashCardKind

}