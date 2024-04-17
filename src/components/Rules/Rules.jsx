import React from 'react'
import styles from "./Rules.module.css"

const Rules = () => {
  return (
    <>
      <div className={styles.container}>
         <h2>How to play dice game</h2>
         <p className={styles.p1}>Select any number</p>
         <p className={styles.p2}>Click on dice imag</p>
         <p className={styles.p3}>after click on  dice  if selected number is equal to dice number you will get same point as dice 
         if you get wrong guess then  2 point will be dedcuted</p>
      </div>
    </>
  )
}

export default Rules
