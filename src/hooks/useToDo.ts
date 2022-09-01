import { useCallback, useState } from "react";
import { toServices } from "../services";
import { ToDo } from "../interfaces";

export const useToDo = () => {
  const [users, setUsers] = useState<ToDo[]>([]);
  const getAll = useCallback(async () => {
    const { status, data } = await toServices.getAll();
    if (status === 200) setUsers(data);
    throw new Error();
  }, []);

  const createUser = useCallback(
    async (user: Pick<ToDo, "email" | "username" | "password">) => {
      const { status } = await toServices.createUser(user);

      if (status !== 201) throw new Error();
    },
    []
  );

  return {
    users,
    getAll,
    createUser,
  };
};
