import React from "react";
import Input from "../input/Input";
import Header from "./Header";

const Registration = () => {
  return (
    <div>
      <Header />

      <div>
        <h2>Cadastro</h2>
        <Input label="Usuário" type="text" name="username" />
      </div>
    </div>
  );
};

export default Registration;
