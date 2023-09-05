import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [atividade, setAtividade] = useState("");
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);
  const [gol, setGol] = useState(1);
  const [idade, setIdade] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        atividade: atividade,
        id: id,
        gol: gol,
        idade: idade,
      },
    ]);
    setId(id + 1);
    setAtividade("");
  };
  const remover = (id) => {
    /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
    const auxLista = [];
    lista.map((lista) => {
      if (lista.id !== id) {
        auxLista.push(lista);
      }
    });
    setLista(auxLista);
  };
  return (
    <div>
      <Link to="/">home</Link>
      <h1>Jogadores de futebol</h1>
      <form onSubmit={salvar}>
        <p>Nome:</p>
        <input
          type="text"
          value={atividade}
          onChange={(e) => {
            setAtividade(e.target.value);
          }}
        />

        <p>Gol:</p>
        <input
          type="number"
          value={gol}
          onChange={(e) => {
            setGol(e.target.value);
          }}
        />
        <p>Idade:</p>
        <input
          type="text"
          value={idade}
          onChange={(e) => {
            setIdade(e.target.value);
          }}
        />
        <button>ADICIONAR</button>
      </form>
      {lista.map((ativ) => (
        <ul key={ativ.id}>
          <li>
            <p>{ativ.atividade}</p>
            <p>gol:{ativ.gol}</p>
            <p>idade:{ativ.idade}</p>
            <button onClick={() => remover(ativ.id)}>Remover</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
