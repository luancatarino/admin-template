import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";
import { BellIcon, ClipBoardIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
    const { logout } = useAuth();
    const { setShow, setHeaderName } = useAppData();
    
    const renderTable = () => {
        setShow("table") 
        setHeaderName("clients")
    }

    return (
        <aside
            className={`
            flex flex-col
            bg-gray-200 text-grey-700
            dark:bg-gray-900
        `}
        >
            <div
                className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}
            >
                <Logo />
            </div>
            <ul className="flex-1">
                <ItemMenu onClick={() => setHeaderName("clients")} url="/" text="Home" icon={HomeIcon} />
                <ItemMenu onClick={renderTable} url="/clients" text="Clients" icon={ClipBoardIcon} />
                <ItemMenu onClick={() => setHeaderName("clients")} url="/settings" text="Settings" icon={SettingsIcon} />
                <ItemMenu onClick={() => setHeaderName("clients")} url="/notifications" text="Notifications" icon={BellIcon} />
            </ul>
            <ul>
                <ItemMenu
                    text="Logout"
                    icon={LogoutIcon}
                    onClick={logout}
                    className={`
                    text-red-600  dark:text-red-500
                    hover:bg-red-500 hover:text-white                   
                    dark:hover:text-white
                `}
                />
            </ul>
        </aside>
    );
}
