import React, { useState } from "react";
import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../service/firebase-config";
import './index.css';

const Despezas: React.FC<{ adicionarDespesa: (despesa: any) => void; excluirDespesa: (id: string) => void; editarDespesa: (id: string, descricao: string, valor: number) => void; despesas: any[] }> = ({ adicionarDespesa, excluirDespesa, editarDespesa, despesas }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState<number>(0);

  const handleAdicionarDespesa = async () => {
    if (descricao && valor > 0) {
      try {
        const docRef = await addDoc(collection(db, "despesas"), { descricao, valor });
        adicionarDespesa({ id: docRef.id, descricao, valor });
        setDescricao("");
        setValor(0);
      } catch (e) {
        console.error("Erro ao adicionar despesa: ", e);
      }
    }
  };

  const handleExcluirDespesa = async (id: string) => {
    try {
      await deleteDoc(doc(db, "despesas", id));
      excluirDespesa(id);
    } catch (e) {
      console.error("Erro ao excluir despesa: ", e);
    }
  };

  const handleEditarDespesa = async (id: string) => {
    const novaDescricao = prompt("Nova descrição:");
    const novoValor = parseFloat(prompt("Novo valor:", "0") || "0");

    if (novaDescricao && !isNaN(novoValor)) {
      try {
        await updateDoc(doc(db, "despesas", id), { descricao: novaDescricao, valor: novoValor });
        editarDespesa(id, novaDescricao, novoValor);
      } catch (e) {
        console.error("Erro ao atualizar despesa: ", e);
      }
    }
  };

  return (
    <div className="despesas-container">
      <div className="despesas-box">
        <h2 className="despesas-title">Adicionar Despesa</h2>
        <input
          type="text"
          className="despesas-input"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          className="despesas-input"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button onClick={handleAdicionarDespesa} className="despesas-button">
          Adicionar Despesa
        </button>
      </div>
      <div className="despesas-list">
        {despesas.map((despesa) => (
          <div key={despesa.id} className="despesas-list-item">
            <span>{despesa.descricao} - R$ {despesa.valor.toFixed(2)}</span>
            <button className="despesas-list-item-button edit" onClick={() => handleEditarDespesa(despesa.id)}>Editar</button>
            <button className="despesas-list-item-button delete" onClick={() => handleExcluirDespesa(despesa.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Despezas;
