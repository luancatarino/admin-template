import Client from "../../core/Client";
import { EditIcon } from "../icons"

interface TableProps {
    clients: Client[];
    selectedClient?: (client: Client) => void;
    editClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
    const renderHeader = () => {
        return (
            <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Tax Id</th>
                <th className="text-left p-4">City</th>
                <th className="flex justify-center items-center py-4">Edit</th>
            </tr>
        );
    };

    const renderData = () => {
        return props.clients?.map((client, i) => {
            return (
                <tr
                    key={client.id}
                    className={`
                    ${i % 2 === 0 ? "bg-gray-200" : "bg-gray-300"} hover:bg-gradient-to-r from-gray-600 to-gray-300 text-gray-700 
                `}
                >
                    <td className="cursor-pointer hover:text-gray-100 text-left p-4" onClick={() => props.selectedClient(client)}>
                        {client.name}
                    </td>
                    <td className="text-left p-4">{client.taxId}</td>
                    <td className="text-left p-4">{client.city}</td>
                    <td className="flex justify-center items-center py-4" onClick={() => props.editClient?.(client)}>{EditIcon(6)}</td>
                </tr>
            );
        });
    };

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead
                className={`
                bg-gray-600 text-white
            `}
            >
                {renderHeader()}
            </thead>
            <tbody>{renderData()}</tbody>
        </table>
    );
}
