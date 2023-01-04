import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
    theme?: Theme;
    changeTheme?: () => void;
    children?: any;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
    const [theme, setTheme] = useState<Theme>("dark");

    const changeTheme = () => {
        setTheme(theme === "" ? "dark" : "");
    };

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
