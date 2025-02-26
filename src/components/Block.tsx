import { FC } from "react";

interface BlockProps {
    color: string;
    onClick: () => void;
    id: number;
}

const Block: FC<BlockProps> = (props) => {



    return <div className="block" style={{ backgroundColor: props.color }} id={`block-${props.id}`} />
}


export default Block;