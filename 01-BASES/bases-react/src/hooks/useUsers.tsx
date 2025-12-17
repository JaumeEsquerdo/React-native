import { useEffect, useState } from "react";
import { type User } from '../interfaces/reqres.response'
import { loadUsersAction } from "../actions/load-users.action";

export const useUsers = (page: number) => {
    const [users, setUsers] = useState<User[]>([])
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await loadUsersAction(page)
                setUsers(data.data)
                setTotalPages(data.total_pages);
            } catch (err) {
                console.log('No se pudieron cargar los users, error:', err)
            }
        }
        getUsers()
    }, [page])
    return { users, totalPages }

}

