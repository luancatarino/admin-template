import { createContext, useEffect, useState } from "react";
import Client from "../../core/Client";

interface AppContextProps {
    theme?: string;
    changeTheme?: () => void;
    show?: "table" | "form";
    setShow?: any;
    client?: Client;
    setClient?: (client: Client) => void;
    clients?: Client[];
    setClients?: any;
    children?: any;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
    const [theme, setTheme] = useState("dark");
    const [show, setShow] = useState<"table" | "form">("table");
    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

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
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
