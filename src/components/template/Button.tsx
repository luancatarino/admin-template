interface ButtonProps {
    // color: "gray" | "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "black" | "white";
    className?: string;
    children: any;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className={`
            bg-blue-500 text-white
            px-4 py-2 rounded-md
            hover:bg-blue-600
            ${props.className} 
        `}
        >
            {props.children}
        </button>
    );
}
