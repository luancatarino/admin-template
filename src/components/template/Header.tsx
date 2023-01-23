import useAppData from "../../data/hook/useAppData";
import AvatarUser from "./AvatarUser";
import ButtonChangeTheme from "./ButtonChangeTheme";
import Title from "./Title";

interface HeaderProps {
    title: string;
    subtitle: string;
}

export default function Header(props: HeaderProps) {
    const { theme, changeTheme, headerName, client } = useAppData();

    return (
        <div className={`flex`}>
            {headerName === "clients" ? (
                <Title title={props.title} subtitle={props.subtitle} />
            ) : (
                <Title title={client.name} subtitle={props.subtitle} />
            )}
            
            <div className={`flex flex-grow justify-end items-center`}>
                <ButtonChangeTheme theme={theme} changeTheme={changeTheme} />
                <AvatarUser className="ml-3" />
            </div>
        </div>
    );
}
