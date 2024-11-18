// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Appeler le service de login
      const data = await login(email, password);
      
      // Stocker le token JWT dans localStorage
      localStorage.setItem('token', data.access_token);
      
      // Rediriger vers la page d'accueil ou la page protégée
      router.push('/');
    } catch (error: any) {
      // Gérer les erreurs
      setError(error.response?.data?.message || 'Une erreur est survenue');
    }
  };

  return (
    <div>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Se connecter</button>
      </form>
      <div>
        Pas encore de compte ? <a href="/register">S'inscrire ici</a>
      </div>
    </div>
  );
};

export default Login;
