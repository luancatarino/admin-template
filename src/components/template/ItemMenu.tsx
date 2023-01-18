import Link from "next/link";

interface ItemMenuProps {
    url?: string;
    text: string;
    icon: any;
    className?: string;
    onClick?: (event: any) => void;
}

export default function ItemMenu(props: ItemMenuProps) {
    const renderLink = () => {
        return (
            <div
                className={`
                    flex flex-col justify-center items-center 
                    h-20 w-20 
                    text-gray-600 
                    dark:text-gray-200
                    ${props.className}
        `}
            >
                {props.icon}
                <span
                    className={`
                    text-xs font-light mt-1
                `}
                >
                    {props.text}
                </span>
            </div>
        );
    };

    return (
        <li
            onClick={props.onClick}
            className={`
            hover:bg-gray-100 cursor-pointer
            dark:hover:bg-gray-800
        `}
        >
            {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
        </li>
    );
}
