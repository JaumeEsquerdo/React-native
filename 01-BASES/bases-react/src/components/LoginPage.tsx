import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } = useAuthContext()

    if (isChecking === true) {
        return < h1 >Verificando sesión</h1 >
    }

    return (
        <>
            {isAuthenticated ? (
                <>

                    <h3>Bienvenido</h3>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <button
                        onClick={() => logout()}
                        className="p-3 m-2 text-white bg-blue-500 rounded-xl">Salir</button>
                </>
            ) :
                <>
                    <h3>Entrar en la aplicación</h3>
                    <button
                        onClick={() => loginWithEmailPassword('fernadno@gmail.es', 'FERNAN')}
                        className="p-3 m-2 text-white bg-blue-500 rounded-xl">Entrar</button>
                </>
            }

        </>
    );
}

