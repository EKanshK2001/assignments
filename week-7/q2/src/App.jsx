import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BackgroundChanger from './components/BackgroundChanger'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [colorState, setColorState] = useState("white");
  document.body.style.backgroundColor = colorState;
  // document.getElementById("root").style.backgroundColor = colorState;

  return (
    <>
      <BackgroundChanger setColorState={setColorState}/>
      {/* <div className='box' style={{backgroundColor: colorState}}></div> */}
    </>
  )
}

export default App
