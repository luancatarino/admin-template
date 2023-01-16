import Head from "next/head";
import Image from "next/image";
import Router from "next/router";

import loadingImage from "../../../public/images/loadingImage.svg";
import useAuth from "../../data/hook/useAuth";

export default function ForceAuth(props: any) {
    const { user, loading } = useAuth();

    const renderContent = () => {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        if(!document.cookie?.includes("admin-template-auth")) {
                            window.location.href = "/authentication"
                        }
                    `,
                        }}
                    />
                </Head>
                {props.children}
            </>
        );
    };

    const renderLoading = () => {
        return (
            <div
                className={`
        flex justify-center items-center h-screen
    `}
            >
                <Image src={loadingImage} alt="Loading" />
            </div>
        );
    };

    if (!loading && user?.email) {
        return renderContent();
    } else if (loading) {
        return renderLoading();
    } else {
        Router.push("/authentication");
        return null;
    }
}
