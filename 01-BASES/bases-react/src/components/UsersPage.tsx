import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";
import { useState } from "react";

// https://reqres.in/api/users?page=2

export const UsersPage = () => {
    const [page, setPage] = useState(1);
    const { users, totalPages } = useUsers(page)

    console.log(users)

    const handlePrevious = () => {
        setPage((prev) => Math.max(prev - 1, 1)); // no ir por debajo de 1
    };

    const handleNext = () => {
        setPage((prev) => prev + 1); // puedes mejorar para no superar total_pages
    };
    return (<>
        <h3>Usuarios</h3>
        <table>
            <thead className="w-[500] bg-black rounded-xl text-white">
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <UserRow key={user.id} user={user} />
                ))}
            </tbody>
        </table>
        <div className="flex justify-between w-[500] mt-2 gap-2">
            <button
                onClick={handlePrevious}
                disabled={page === 1} // deshabilitado si estamos en la primera página
                className="p-2 bg-blue-400 text-white rounded-[8px] disabled:bg-gray-400">Anteriores</button>
            <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="p-2 bg-blue-400 text-white rounded-[8px] disabled:bg-gray-400">Siguientes</button>

        </div>
    </>);
}
