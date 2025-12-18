import type { User } from "../interfaces/reqres.response";

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {
    return (
        <tr className="p-2">
            <td>
                {user.avatar ? (
                    <img src={user.avatar}
                        className="p-2 rounded-full w-14"
                        alt={`${user.first_name} avatar`} />
                ) : (
                    <span>No avatar</span>
                )}

            </td>
            <td>
                {user.first_name} {user.last_name}
            </td>
            <td>{user.email}</td>
        </tr>
    );
}

