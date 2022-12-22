import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
    return (
        <aside className="flex flex-col">
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
                <ItemMenu url="/" text="Home" icon={HomeIcon} />
                <ItemMenu url="/settings" text="Settings" icon={SettingsIcon} />
                <ItemMenu url="/notifications" text="Notifications" icon={BellIcon} />
            </ul>
            <ul>
                <ItemMenu
                    text="Logout"
                    icon={LogoutIcon}
                    onClick={() => console.log("logout")}
                    className={`
                    text-red-600
                    hover:bg-red-400 hover:text-white
                `}
                />
            </ul>
        </aside>
    );
}
