import { createContext, useContext, type PropsWithChildren, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unauthenticated' = 'unauthenticated'
}

interface AuthState {
    status: AuthStatus,
    token?: string,
    user?: User,
    isChecking: boolean,
    isAuthenticated: boolean,
    loginWithEmailPassword: (emailç: string, password: string) => void
}

interface User {
    name: string,
    email: string
}


export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking)
    const [user, setUser] = useState<User>()

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated)
        }, 1500)
    }, [])


    const loginWithEmailPassword = (email: string, password: string) => {
        console.log(password)
        setUser({
            name: 'Fernando Herrera',
            email: email
        })
        setStatus(AuthStatus.authenticated)
    };

    const logout = () => { }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,
            loginWithEmailPassword

        }}>
            {children}
        </AuthContext.Provider>
    )
}
