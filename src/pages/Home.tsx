import React, { useEffect } from "react";
import { useToDo } from "../hooks";
import UserDelete from "../modal/UserDelete";
import Header from "./Header";
import styles from "./Home.module.css";

export const Home = () => {
  const { getAll, users } = useToDo();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <div className={styles.home}>
      <Header />
      <table>
        <tr className={styles.user_title}>
          <td>Id</td>
          <td>Nome</td>
          <td>Telefone</td>
          <td>Email</td>
          <td>Usuário</td>
          <div className={styles.cad}>
            <td>Opções</td>
            <a href="/Registration">Cadastrar</a>
          </div>
        </tr>
        {users.map((user) => (
          <tr className={styles.user}>
            <td>{user.id}</td>
            <td>
              {user.name.firstname} {user.name.lastname}
            </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <div className={styles.options}>
              <button>Info</button>
              <button>Editar</button>
              <button>Excluir</button>
              {/* <p>
                <UserDelete id={user.id} />
              </p> */}
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
