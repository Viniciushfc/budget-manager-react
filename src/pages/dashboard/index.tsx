// Dashboard.tsx
import React, { useState, useEffect } from "react";
import Receitas from "../../components/receitas";
import Despezas from "../../components/despezas";
import GraficoDespesasReceitas from "../../components/GraficoDespesasReceitas";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../service/firebase-config";

const Dashboard: React.FC = () => {
  const [receitas, setReceitas] = useState<any[]>([]);
  const [despesas, setDespesas] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribeReceitas = onSnapshot(collection(db, "receitas"), (snapshot) => {
      const receitasData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReceitas(receitasData);
    });

    const unsubscribeDespesas = onSnapshot(collection(db, "despesas"), (snapshot) => {
      const despesasData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDespesas(despesasData);
    });

    return () => {
      unsubscribeReceitas();
      unsubscribeDespesas();
    };
  }, []);

  const adicionarReceita = (receita: any) => {
    setReceitas([...receitas, receita]);
  };

  const excluirReceita = (id: string) => {
    setReceitas(receitas.filter((receita) => receita.id !== id));
  };

  const editarReceita = (id: string, descricao: string, valor: number) => {
    setReceitas(receitas.map((receita) =>
      receita.id === id ? { ...receita, descricao, valor } : receita
    ));
  };

  const adicionarDespesa = (despesa: any) => {
    setDespesas([...despesas, despesa]);
  };

  const excluirDespesa = (id: string) => {
    setDespesas(despesas.filter((despesa) => despesa.id !== id));
  };

  const editarDespesa = (id: string, descricao: string, valor: number) => {
    setDespesas(despesas.map((despesa) =>
      despesa.id === id ? { ...despesa, descricao, valor } : despesa
    ));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <Receitas
          receitas={receitas}
          adicionarReceita={adicionarReceita}
          excluirReceita={excluirReceita}
          editarReceita={editarReceita}
        />
        <Despezas
          despesas={despesas}
          adicionarDespesa={adicionarDespesa}
          excluirDespesa={excluirDespesa}
          editarDespesa={editarDespesa}
        />
      </div>
      <div className="dashboard-column">
        <GraficoDespesasReceitas receitas={receitas} despesas={despesas} />
      </div>
    </div>
  );
};

export default Dashboard;
