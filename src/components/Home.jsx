import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Bem vindo ao React Diet</h1>
      </header>
      <nav className={styles.navigation}>
        <Link to="/create-user" className={styles.link}>
          Criar usuário
        </Link>
        <Link to="/create-diet" className={styles.link}>
          Adicionar dieta
        </Link>
        <Link to="/calcule-imc" className={styles.link}>
          Calcular IMC
        </Link>
      </nav>
    </div>
  );
};

export default Home;
