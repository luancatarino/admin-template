interface ButtonProps {
    color: "gray" | "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "black" | "white";
    className?: string;
    children: any;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className={`
            bg-${props.color}-500 text-white
            px-4 py-2 rounded-md
            hover:bg-${props.color}-600
            ${props.className} 
        `}
        >
            {props.children}
        </button>
    );
}
