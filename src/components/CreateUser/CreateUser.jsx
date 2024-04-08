// src/components/CreateUser/CreateUser.js

import React, { useState } from 'react';
import styles from './CreateUser.module.css'
import { Link } from 'react-router-dom';


function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:3333/users', {
            method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuário criado:', data);
        // Aqui você pode redirecionar o usuário ou limpar o formulário
      } else {
        console.error('Falha ao criar usuário');
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div className={styles.container}>
    <h2>Criar Usuário</h2>
    <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Criar Usuário</button>
      </form>
      <Link to="/" className={styles.backButton}>Voltar para Início</Link>
    </div>
  );
}

export default CreateUser;
