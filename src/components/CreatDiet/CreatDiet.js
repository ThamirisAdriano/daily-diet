import React, { useState } from 'react';

function CreateDiet() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOnDiet, setIsOnDiet] = useState(false);
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const diet = { name, description, isOnDiet, date };

    try {
      const response = await fetch('http://localhost:3333/meals', { // Substitua com a URL correta do seu backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diet),
      });

      if (response.ok) {
        // Dieta criada com sucesso
        const result = await response.json();
        console.log('Dieta criada:', result);
        // Redirecionar ou atualizar a UI conforme necessário
      } else {
        // Tratar erros de resposta
        console.error('Falha ao criar dieta');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor', error);
    }
  };

  return (
    <div>
      <h2>Criar Dieta</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div>
          <label>Nome da Dieta:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Está na Dieta?</label>
          <input type="checkbox" checked={isOnDiet} onChange={(e) => setIsOnDiet(e.target.checked)} />
        </div>
        <div>
          <label>Data:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit">Criar Dieta</button>
      </form>
    </div>
  );
}

export default CreateDiet;
