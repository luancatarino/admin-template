import Client from "../../core/Client";
import Sale from "../../core/Sale";
import { EditIcon } from "../icons";

interface TableClientSalesProps {
    client: Client;
    editSale?: (sale: Sale) => void;
}

export default function TableClientSales(props: TableClientSalesProps) {
    const renderHeader = () => {
        return (
            <tr>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Quantity</th>
                <th className="text-left p-4">Value</th>
                <th className="text-left p-4">Bonus</th>
                <th className="text-left p-4">Total</th>
                <th className="flex justify-center items-center py-4">Edit</th>
            </tr>
        );
    };

    const renderData = () => {
        return props.client.sales?.map((sale, i) => {
            return (
                <tr
                    key={sale.id}
                    className={`
                    ${i % 2 === 0 ? "bg-gray-200" : "bg-gray-300"} hover:bg-gradient-to-r from-gray-600 to-gray-300 text-gray-700 
                `}
                >
                    <td className="cursor-pointer hover:text-gray-100 text-left p-4">{sale.quantity}</td>
                    <td className="text-left p-4">{sale.date}</td>
                    <td className="text-left p-4">{sale.value}</td>
                    <td className="text-left p-4">{sale.bonus}</td>
                    <td className="text-left p-4">{sale.total}</td>
                    <td className="flex justify-center items-center py-4" onClick={() => props.editSale?.(sale)}>
                        {EditIcon(6)}
                    </td>
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
