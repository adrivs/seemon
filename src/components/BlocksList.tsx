import { Dispatch, FC, SetStateAction } from "react"
import Block from "./Block"
import { GameStatus } from "../App";

interface BlocksListProps {
    listOfNumbers: number[]
    onSetSelectedBlocks: Dispatch<SetStateAction<number[]>>
    selectedBlocks: number[];
    onSetGameStatus: Dispatch<SetStateAction<GameStatus>>
}

const BlocksList: FC<BlocksListProps> = (props) => {

    console.log("List of props", props)

    const colors = ["red", "blue", "green", "magenta", "yellow", "pink", "orange", "purple", "white"]

    const handleClickBlock = (blockNumber: number) => {
        const numbersToCheck = [...props.listOfNumbers]
        props.onSetSelectedBlocks(prev => [...prev, blockNumber]);

        const currentNumberOfItems = props.selectedBlocks.length;

        numbersToCheck.forEach((numberToCheck, index) => {
            if (index === currentNumberOfItems) {
                const selectedNumberIsCorrect = numberToCheck === blockNumber;
                if (selectedNumberIsCorrect) {
                    console.log("Correct")
                } else {
                    props.onSetGameStatus("failed")
                }
            }

        })
    }

    return (
        <div className='block-layout'>
            {Array.from({ length: 9 }).map((_, index) => {
                return (
                    <Block key={index} onClick={() => handleClickBlock(index)} color={colors[index]} id={index} />
                )
            })}
        </div>
    )
}

export default BlocksList