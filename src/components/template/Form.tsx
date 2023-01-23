import { useState } from "react";
import Client from "../../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client;
    changed?: (client: Client) => void;
    canceled?: () => void;
}

export default function Form(props: FormProps) {
    const id = props.client?.id;

    const [name, setName] = useState(props.client?.name ?? "");
    const [taxId, setTaxId] = useState(props.client?.taxId ?? "");
    const [ie, setIE] = useState(props.client?.ie ?? "");
    const [zipCode, setZipCode] = useState(props.client?.zipCode ?? "");
    const [state, setState] = useState(props.client?.state ?? "");
    const [city, setCity] = useState(props.client?.city ?? "");
    const [district, setDistrict] = useState(props.client?.district ?? "");
    const [street, setStreet] = useState(props.client?.street ?? "");
    const [number, setNumber] = useState(props.client?.number ?? "");

    return (
        <div>
            <div
                className={`
                flex flex-row items-center mb-5
            `}
            >
                <Input className="grow" text="Name" onChange={setName} type="text" value={name} />
                <Input className="ml-3" text="Tax ID" onChange={setTaxId} type="number" value={taxId} />
                <Input className="ml-3" text="Inscrição Estadual" onChange={setIE} type="number" value={ie} />
            </div>
            <div
                className={`
                flex flex-row items-center mb-5
            `}
            >
                <Input text="Zip Code" onChange={setZipCode} type="number" value={zipCode} />
                <Input className="ml-3" text="State" onChange={setState} type="text" value={state} />
                <Input className="grow ml-3" text="City" onChange={setCity} type="text" value={city} />
            </div>
            <div
                className={`
                flex flex-row items-center
            `}
            >
                <Input text="District" onChange={setDistrict} type="text" value={district} />
                <Input className="grow ml-3" text="Street" onChange={setStreet} type="text" value={street} />
                <Input className="ml-3" text="Number" onChange={setNumber} type="number" value={number} />
            </div>

            <div className="flex justify-end mt-10">
                <Button
                    onClick={() => props.changed?.(new Client(name, +taxId, +ie, +zipCode, state, city, district, street, +number, id))}
                >
                    {id ? "Save Changes" : "Save"}
                </Button>
                <button onClick={props.canceled} className="ml-2 bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600">
                    Cancel
                </button>
            </div>
        </div>
    );
}
