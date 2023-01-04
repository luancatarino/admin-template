
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {
    const {changeTheme} = useAppData()

    return (
        <Layout title="Notifications" subtitle="Adjust your notifications here">
            <button onClick={changeTheme}>Change Theme</button>
        </Layout>
    );
}
