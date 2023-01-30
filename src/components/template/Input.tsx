interface InputProps {
    text: string;
    type?: "text" | "number" | "select";
    value: any;
    readOnly?: boolean;
    onChange?: (value: any) => void;
    className?: string;
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">{props.text}</label>
            {props.type === "select" ? (
                <select
                    className={`
                        text-gray-700
                        border border-gray-300 rounded-lg
                        focus:outline-none bg-gray-300
                        ${props.readOnly ? "" : "focus:bg-white"}
                        px-4 py-2
            `}
                    value={props.value}
                    onChange={(e) => props.onChange?.(e.target.value)}
                    name="Unit"
                    id="unit"
                >
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="sacks">Sacks</option>
                </select>
            ) : (
                <input
                    type={props.type ?? "text"}
                    value={props.value}
                    readOnly={props.readOnly}
                    onChange={(e) => props.onChange?.(e.target.value)}
                    className={`
                    text-gray-700
                    border border-gray-300 rounded-lg
                    focus:outline-none bg-gray-300
                    ${props.readOnly ? "" : "focus:bg-white"}
                    px-4 py-2
                `}
                />
            )}
        </div>
    );
}
