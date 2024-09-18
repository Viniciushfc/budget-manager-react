// Receitas.tsx
import React, { useState } from "react";
import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../service/firebase-config";
import './index.css';

const Receitas: React.FC<{ adicionarReceita: (receita: any) => void; excluirReceita: (id: string) => void; editarReceita: (id: string, descricao: string, valor: number) => void; receitas: any[] }> = ({ adicionarReceita, excluirReceita, editarReceita, receitas }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState<number>(0);

  const handleAdicionarReceita = async () => {
    if (descricao && valor > 0) {
      try {
        const docRef = await addDoc(collection(db, "receitas"), { descricao, valor });
        adicionarReceita({ id: docRef.id, descricao, valor });
        setDescricao("");
        setValor(0);
      } catch (e) {
        console.error("Erro ao adicionar receita: ", e);
      }
    }
  };

  const handleExcluirReceita = async (id: string) => {
    try {
      await deleteDoc(doc(db, "receitas", id));
      excluirReceita(id);
    } catch (e) {
      console.error("Erro ao excluir receita: ", e);
    }
  };

  const handleEditarReceita = async (id: string) => {
    const novaDescricao = prompt("Nova descrição:");
    const novoValor = parseFloat(prompt("Novo valor:", "0") || "0");

    if (novaDescricao && !isNaN(novoValor)) {
      try {
        await updateDoc(doc(db, "receitas", id), { descricao: novaDescricao, valor: novoValor });
        editarReceita(id, novaDescricao, novoValor);
      } catch (e) {
        console.error("Erro ao atualizar receita: ", e);
      }
    }
  };

  return (
    <div className="receitas-container">
      <div className="receitas-box">
        <h2 className="receitas-title">Adicionar Receita</h2>
        <input
          type="text"
          className="receitas-input"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          className="receitas-input"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button onClick={handleAdicionarReceita} className="receitas-button">
          Adicionar Receita
        </button>
      </div>
      <div className="receitas-list">
        {receitas.map((receita) => (
          <div key={receita.id} className="receitas-list-item">
            <span>{receita.descricao} - R$ {receita.valor.toFixed(2)}</span>
            <button className="receitas-list-item-button edit" onClick={() => handleEditarReceita(receita.id)}>Editar</button>
            <button className="receitas-list-item-button delete" onClick={() => handleExcluirReceita(receita.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receitas;
