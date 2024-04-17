import "./App.css"


import Playzone from "./components/Playzone/Playzone"
import StartGame from "./components/StartGame/StartGame"
import react,{useState} from "react"


function App() {
 const [isStarted,setIsStarted]=useState(false)
 const toggle=()=>{
  setIsStarted(!isStarted);
 }
  return (
    <>
    
    {isStarted ? <Playzone/> :  <StartGame toggle={toggle}/>
}
   
    </>
  )
}

export default App
