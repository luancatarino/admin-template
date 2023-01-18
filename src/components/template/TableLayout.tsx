import TableTitle from "./TableTitle";

interface TableLayoutProps {
    title: string;
    children: any;
}

export default function TableLayout(props: TableLayoutProps) {
    return (
        <div
            className={`
            flex flex-col w-full
            bg-white text-gray-800 rounded-md
        `}
        >
            <TableTitle>{props.title}</TableTitle>
            <div className="p-6">{props.children}</div>
        </div>
    );
}
