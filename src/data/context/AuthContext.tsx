import Cookies from "js-cookie";
import Router from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/User";

interface AuthContextProps {
    user?: User;
    loading?: any;
    register?: (email: string, password: string) => Promise<void>;
    login?: (email: string, password: string) => Promise<void>;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function userNormalized(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken();
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0]?.providerId,
        imageURL: userFirebase.photoURL,
    };
}

const cookieManager = (logged: any) => {
    if (logged) {
        Cookies.set("admin-template-auth", logged, { expires: 7 });
    } else {
        Cookies.remove("admin-template-auth");
    }
};

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(true);

    const configureSession = async (userFirebase: any) => {
        if (userFirebase?.email) {
            const user = await userNormalized(userFirebase);
            setUser(user);
            cookieManager(true);
            setLoading(false);
            return user.email;
        } else {
            setUser(null);
            cookieManager(false);
            setLoading(false);
            return false;
        }
    };

    const register = async (email: string, password: string) => {
        try {
            setLoading(true);
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);

            await configureSession(resp.user);
            Router.push("/");
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password);

            await configureSession(resp.user);
            Router.push("/");
        } finally {
            setLoading(false);
        }
    };

    const loginGoogle = async () => {
        try {
            setLoading(true);
            const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

            await configureSession(resp.user);
            Router.push("/");
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configureSession(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Cookies.get("admin-template-auth")) {
            const cancel = firebase.auth().onIdTokenChanged(configureSession);

            return () => cancel();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                register,
                login,
                loginGoogle,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
