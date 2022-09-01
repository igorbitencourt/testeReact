import React from "react";
import { USER_DELETE } from "../ApiFake";
import useFetch from "../hooks/useFetch";
import styles from "./UserDelete.module.css";

const UserDelete = ({ id }: any) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = USER_DELETE(id);
      const { response } = await request(url, options);
      if (response?.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default UserDelete;
