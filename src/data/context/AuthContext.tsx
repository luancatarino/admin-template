import firebase from "../../firebase/config";
import Router from "next/router";
import { createContext, useState } from "react";
import User from "../../model/User";

interface AuthContextProps {
    user?: User;
    loginGoogle?: () => Promise<void>;
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

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>(null);

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

        if (resp.user?.email) {
            const newUser = await userNormalized(resp.user);
            setUser(newUser);
            Router.push("/");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loginGoogle,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
