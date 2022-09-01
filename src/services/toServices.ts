import { Api } from "../Api";
import { ToDo } from "../interfaces";

const getAll = () => Api.get<ToDo[]>("/users");

const createUser = (user: Pick<ToDo, "email" | "username" | "password">) =>
  Api.post("/users", user);

export const toServices = {
  getAll,
  createUser,
};
