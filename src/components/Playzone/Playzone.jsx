import React,{useState} from 'react'
import styles from "./Playzone.module.css"
import Rules from '../Rules/Rules';


const Playzone = () => {
    const arrNum=[1,2,3,4,5,6];
    const [score,setScore]=useState(0)
    const[selectedNum,setSelectedNum]=useState()
    const [currentDice,setCurrentDice]=useState(1)
    const[error,setError]=useState("")
    const [rules,setRules]=useState(false)
    const GenerateRandomNum=(min,max)=>{
      
      return Math.floor(Math.random() * (max - min) + min);
    }
    const diceRolled=()=>{
      if(!selectedNum){
        setError("You have not selected any number")
        return;
      }
      setError("")
      const roller=GenerateRandomNum(1,7);
      setCurrentDice(roller);
      if(roller==selectedNum){
       setScore(score+selectedNum);
      }else{
        setScore(score-2);
      }
      setSelectedNum(undefined)
    }
   const clickHandler=(value)=>{
    setSelectedNum(value);
    setError("")
   }
   const resetScore=()=>{
    setScore(0);
   }
  return (
    <>
    
      <div className={styles.upper}>
    
        <div className={styles.uppleft}>
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
        <div className={styles.uppright}>
          <p className={styles.error}>{error}</p>
            <div className={styles.boxes}>
            {arrNum.map((value,id)=>(
                <div  className={`${styles.box} ${selectedNum==value ? styles.selected :""} `} onClick={()=>clickHandler(value)} key={id}>{value}</div>
            ))}
            </div>
            <p>Select Number</p>
        </div>
      </div>
      <div className={styles.lower} >
        <img src={`./images/dice/dice_${currentDice}.png`} alt='Dice' onClick={diceRolled} />
        <p>Click on Dice to roll</p>
        <button onClick={resetScore} className={styles.resetbtn}>Reset Score</button>
        <button onClick={()=>setRules(!rules)} className={styles.rulesbtn}>{rules ? "Hide" : "Show"} Rules</button>
        {rules && <Rules/>}
      </div>
    </>
  )
}

export default Playzone
