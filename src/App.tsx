import { useState } from 'react';
import styles from './App.module.css';
import image from './assets/imc.png';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/gridItem/GridItem';
import 'materialize-css/dist/css/materialize.min.css'

import { levels, calculaIMC, Level } from './logic/imc';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculate = () => {
    if (heightField && weightField) {
      setToShow(calculaIMC(heightField, weightField));
    } else {
      alert('Preencha todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <div className="row">
        <div className="switch">
          <label className='itemLabel'>OFF
            <input id='swith' type="checkbox"></input>
            <span className="lever"></span>ON
          </label>
        </div>
      </div>
      <header>
        <div className={styles.headerContainer}>
          <img src={image} alt="" width={90} />
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

          <button className='pulse-button' onClick={handleCalculate}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img className='pulse-button' src={leftArrowImage} width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;
