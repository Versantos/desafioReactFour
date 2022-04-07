import React, { Component } from "react";

class Mensagem extends Component {
  state = {
    nome: "Carolina Maria de Jesus."
  };

  mensage = () => {
    return <h2>Autora brasileira famosa no século 20.</h2>;
  };

  Multiplica = (num1, num2) => {
    return num1 * num2;
  };

  render() {
    return (
      <div>
        <h1>
          {" "}
          A obra "A casa de alvenaria" é o segundo livro da {
            this.state.nome
          }{" "}
        </h1>
        {this.mensage()}
        <h2>
          Ela foi primeira mulher a vender Best seller em{" "}
          {this.Multiplica(7, 2)} países.
        </h2>
      </div>
    );
  }
}

export default Mensagem;
