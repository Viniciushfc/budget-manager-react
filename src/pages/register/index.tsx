import React, { useState } from 'react';
import './index.css'; 
import { authService } from '../../service/authService'; 
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await authService.registerWithEmail(email, password);
      navigate('/'); 
    } catch (err) {
      setError('Erro ao fazer registro: ' + (err as Error).message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Cadastrar</h1>
        {error && <p className="register-error">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            className="register-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="register-input"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-button">Registrar</button>
        </form>
        <p className="register-footer">
          Já tem uma conta? <a href="/login">Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
