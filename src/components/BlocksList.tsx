import { FC } from "react"
import Block from "./Block"

interface BlocksListProps {
    listOfNumbers: number[]
}

const BlocksList: FC<BlocksListProps> = (props) => {

    console.log("List of props", props)

    const colors = ["red", "blue", "green", "magenta", "yellow", "pink", "orange", "purple", "white"]

    return (
        <div className='block-layout'>
            {Array.from({ length: 9 }).map((_, index) => {
                return (
                    <Block key={index} onClick={() => null} color={colors[index]} id={index} />
                )
            })}
        </div>
    )
}

export default BlocksList