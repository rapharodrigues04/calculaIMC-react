import { useState } from 'react';
import styles from './App.module.css';
import image from './assets/logoImc.png';
import { levels, calculaIMC } from './logic/imc';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculate = () => {
    if (heightField && weightField) {

    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={image} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

          <input
            type="number"
            placeholder='Digite sua altura'
            value={heightField > 0 ? heightField : ""}
            onChange={event => setHeightField(parseFloat(event.target.value))}
          />

          <input
            type="number"
            placeholder='Digite seu peso'
            value={weightField > 0 ? weightField : ""}
            onChange={event => setWeightField(parseFloat(event.target.value))}
          />

          <button onClick={handleCalculate}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
} 
export default App;
