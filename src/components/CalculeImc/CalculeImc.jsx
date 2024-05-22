import React, { useState } from 'react';
import styles from './CalculeImc.module.css';
import { Link } from 'react-router-dom';

function CalculeImc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);
  const [message, setMessage] = useState('');

  const calculateImc = () => {
    const heightInMeters = height / 100;
    const imcValue = weight / (heightInMeters * heightInMeters);
    setImc(imcValue.toFixed(2));

    if (imcValue < 18.5) {
      setMessage('Você está abaixo do peso.');
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setMessage('Seu peso está normal.');
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setMessage('Você está com sobrepeso.');
    } else {
      setMessage('Você está com obesidade.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Cálculo de IMC</h1>
      <div className={styles.formGroup}>
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="height">Altura (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className={styles.calculateButton} onClick={calculateImc}>
        Calcular IMC
      </button>
      {imc && (
        <div className={styles.result}>
          <p>Seu IMC é: {imc}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default CalculeImc;

