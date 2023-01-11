import Image from "next/image";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon, WarningIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Authentication() {
    const { user, loginGoogle } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [mode, setMode] = useState<"login" | "register">("login");

    const showError = (msg: any, time = 5) => {
        setError(msg);
        setTimeout(() => setError(null), time * 1000);
    };

    const submit = () => {
        if (mode === "login") {
            showError("An error has occurred during login!");
        } else {
            showError("An error has occurred during register!");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <Image
                    width={10000}
                    height={10000}
                    src="https://source.unsplash.com/random"
                    alt="Authentication Page Image"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1
                    className={`
                        text-3xl font-bold mb-5
        `}
                >
                    {mode === "login" ? "Log Into Your Account" : "Sign Up"}
                </h1>

                {error ? (
                    <div
                        className={`
                    flex items-center
                    bg-red-400 text-white py-3 px-5 my-2
                    border border-red-700 rounded-lg
                `}
                    >
                        {WarningIcon()}
                        <span className="ml-3">{error}</span>
                    </div>
                ) : (
                    false
                )}

                <AuthInput label="Email" value={email} type="email" valueChanged={setEmail} required></AuthInput>
                <AuthInput label="Password" value={password} type="password" valueChanged={setPassword} required></AuthInput>
                <button
                    onClick={submit}
                    className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
        `}
                >
                    {mode === "login" ? "Login" : "Register"}
                </button>

                <hr className="w-full my-6 border-gray-300" />

                <button
                    onClick={loginGoogle}
                    className={`
            flex items-center justify-center
            w-full bg-gray-300 hover:bg-gray-200
            text-white rounded-lg px-4 py-3
        `}
                >
                    {GoogleIcon(25)}
                </button>

                {mode === "login" ? (
                    <p className="mt-5">
                        New here?
                        <a
                            onClick={() => setMode("register")}
                            className={`
                            text-blue-500 hover:text-blue-500 font-semibold
                            cursor-pointer
                        `}
                        >
                            {" "}
                            Create a new account
                        </a>
                    </p>
                ) : (
                    <p className="mt-5">
                        Already have a account?
                        <a
                            onClick={() => setMode("login")}
                            className={`
                        text-blue-500 hover:text-blue-500 font-semibold
                        cursor-pointer
                    `}
                        >
                            {" "}
                            Login with your account
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}
