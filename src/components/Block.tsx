import { FC } from "react";

interface BlockProps {
    color: string;
    onClick: () => void;
}

const Block: FC<BlockProps> = (props) => {
    return <div className="block" style={{ backgroundColor: props.color }} />
}


export default Block;