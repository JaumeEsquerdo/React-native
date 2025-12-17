import type { User } from "../interfaces/reqres.response";

export const UserRow = ({ user }: { user: User }) => {
    return (
        <tr className="p-2">
            <td>
                {user.avatar ? (
                    <img src={user.avatar}
                        className="rounded-full w-14"
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

