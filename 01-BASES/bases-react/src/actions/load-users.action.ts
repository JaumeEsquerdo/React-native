// import { type ReqResUserListResponse } from "../interfaces/reqres.response";

// export const loadUsersAction = async (
//   page: number
// ): Promise<ReqResUserListResponse> => {
//   try {
//     const fetchUsers = await fetch(`https://reqres.in/api/users?page=${page}`);

//     if (!fetchUsers.ok) {
//       throw new Error("Error al obtener los datos");
//     }
//     const data = await fetchUsers.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

export const loadUsersAction = async (page: number) => {
  try {
    // fetch desde public
    const res = await fetch("/data/users.json");
    if (!res.ok) throw new Error("No se pudo cargar el JSON");

    const usersData = await res.json();

    const perPage = usersData.per_page;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return {
      ...usersData,
      page,
      data: usersData.data.slice(start, end),
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
