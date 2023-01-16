import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?: string;
    changeTheme?: () => void;
    children?: any;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
    const [theme, setTheme] = useState("dark");

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
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
