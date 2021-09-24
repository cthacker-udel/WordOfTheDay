//export type flashCardType = "Easy" | "Medium" | "Hard";

//export enum FlashCardKind{

//    Easy = "Easy", Medium = "Medium", Hard = "Hard"

//}

export interface FlashCard {

    Q: string
    A: string
    B: string
    C: string
    D: string
    AS: string
    P: number
    kind: string

}