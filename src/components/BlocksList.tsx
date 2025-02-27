import { Dispatch, FC, SetStateAction } from "react"
import Block from "./Block"
import { GameStatus } from "../App";

interface BlocksListProps {
    listOfNumbers: number[]
    onSetSelectedBlocks: Dispatch<SetStateAction<number[]>>
    selectedBlocks: number[];
    onSetGameStatus: Dispatch<SetStateAction<GameStatus>>
    onHandleIncreaseLevel: () => void;
}

const BlocksList: FC<BlocksListProps> = (props) => {

    console.log("List of props", props)

    const colors = ["red", "blue", "green", "magenta", "yellow", "pink", "orange", "purple", "white"]

    const handleClickBlock = (blockNumber: number) => {
        const numbersToCheck = [...props.listOfNumbers];

        const updatedSelectedBlocks = [...props.selectedBlocks, blockNumber];
        props.onSetSelectedBlocks(updatedSelectedBlocks);

        const currentNumberOfItems = updatedSelectedBlocks.length;

        numbersToCheck.forEach((numberToCheck, index, array) => {
            if (index === currentNumberOfItems - 1) {
                const selectedNumberIsCorrect = numberToCheck === blockNumber;
                const levelCompleted = currentNumberOfItems === array.length;

                if (selectedNumberIsCorrect) {
                    if (levelCompleted) {
                        props.onHandleIncreaseLevel();
                    }
                } else {
                    props.onSetGameStatus("failed");
                }
            }
        });
    };

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