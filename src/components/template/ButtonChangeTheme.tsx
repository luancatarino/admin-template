import { MoonIcon, SunIcon } from "../icons";

interface ButtonChangeThemeProps {
    theme?: string;
    changeTheme?: () => void;
}

export default function ButtonChangeTheme(props: ButtonChangeThemeProps) {
    return props.theme === "dark" ? (
        <div
            onClick={props.changeTheme}
            className={`
            hidden sm:flex items-center cursor-pointer
            bg-white
            w-6 lg:w-16 h-6 p-1 rounded-full
        `}
        >
            <div
                className={`
                flex items-center justify-center
                bg-white text-black
                w-6 h-6 rounded-full
            `}
            >
                {SunIcon(4)}
            </div>
            <div
                className={`
                hidden lg:flex items-center ml-4
                text-white
            `}
            >
                {/* <span className="text-sm">Light</span> */}
            </div>
        </div>
    ) : (
        <div
            onClick={props.changeTheme}
            className={`
        hidden sm:flex items-center justify-end cursor-pointer
        bg-black
        w-6 lg:w-16 h-6 p-1 rounded-full
    `}
        >
            <div
                className={`
            hidden lg:flex items-center mr-4
            text-gray-300
        `}
            >
                {/* <span className="text-sm">Dark</span> */}
            </div>

            <div
                className={`
            flex items-center justify-center
            bg-black text-white
            w-6 h-6 rounded-full
        `}
            >
                {MoonIcon(4)}
            </div>
        </div>
    );
}
