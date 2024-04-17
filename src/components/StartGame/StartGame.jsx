import { useState } from 'react';
import styles from "./StartGame.module.css";


const StartGame = ({ toggle }) => {


  return (
    <>
      <div className={styles.container}>
       
        <div className={styles.img}><img src='./images/dices 1.png' alt='diceimg' /></div>
        <div className={styles.text}>
          <h1>DICE GAME</h1>
          <button onClick={toggle} className={styles.button}>Play Now</button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
