import { createContext, useEffect, useState } from "react";
import Client from "../../core/Client";
import Sale from "../../core/Sale";

interface AppContextProps {
    theme?: string;
    changeTheme?: () => void;
    show?: "table" | "form" | "tableSales" | "formSale";
    setShow?: any;
    client?: Client;
    setClient?: (client: Client) => void;
    clients?: Client[];
    setClients?: any;
    children?: any;
    sale?: any;
    setSale?: any;
    headerName?: string;
    setHeaderName?: any;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
    const [theme, setTheme] = useState("dark");
    const [show, setShow] = useState<"table" | "form" | "tableSales" | "formSale">("table");
    const [headerName, setHeaderName] = useState<"selectedClient" | "clients">("clients");
    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);
    const [sale, setSale] = useState<Sale>(Sale.empty());

    const changeTheme = () => {
        const newTheme = theme === "" ? "dark" : "";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme);
    }, []);

    return (
        <AppContext.Provider
            value={{
                theme,
                changeTheme,
                show,
                setShow,
                client,
                setClient,
                clients,
                setClients,
                sale,
                setSale,
                headerName,
                setHeaderName,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
