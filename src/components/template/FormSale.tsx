import { useState } from "react";
import Sale from "../../core/Sale";
import Client from "../../core/Client";
import Button from "./Button";
import Input from "./Input";


interface FormSaleProps {
    sale: Sale;
    client: Client;
    changed?: (client: Client, sale: Sale) => void;
    canceled?: () => void;
}

export default function FormSale(props: FormSaleProps) {
    
    const id = props.sale?.id;

    const currentSale = props.sale.id;

    const [date, setDate] = useState(props.sale?.date ?? "");
    const [quantity, setQuantity] = useState(props.sale?.quantity ?? 0);
    const [unit, setUnit] = useState(props.sale?.unit ?? "");
    const [value, setValue] = useState(props.sale?.value ?? 0);
    const [bonus, setBonus] = useState(props.sale?.bonus ?? 0);
    const [total, setTotal] = useState(props.sale?.total ?? 0);

    return (
        <div>
            <div
                className={`
                flex flex-row items-center justify-between mb-5
            `}
            >
                <Input text="Date" onChange={setDate} type="text" value={date} />
                <Input text="Quantity" onChange={setQuantity} type="number" value={quantity} />
                <Input text="Unit" onChange={setUnit} type="select" value={unit} />
                <Input text="Value" onChange={setValue} type="number" value={value} />
                <Input text="Total" onChange={setTotal} type="number" value={total} />
                <Input text="Bonus" onChange={setBonus} type="number" value={bonus} />
            </div>

            <div className="flex justify-end mt-10">
                <Button onClick={() => props.changed?.(props.client, new Sale(date, +quantity, unit, +value, +bonus, +total, id))}>
                    {id ? "Save Changes" : "Save"}
                </Button>
                <button onClick={props.canceled} className="ml-2 bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600">
                    Cancel
                </button>
            </div>
        </div>
    );
}
