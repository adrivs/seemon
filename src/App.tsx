import { useState } from 'react'
import './App.css'
import BlocksList from './components/BlocksList'
import generateBeep from './lib/generateBeep'
import getArrayWithNumbers from './lib/getArrayWithNumbers'

export type GameStatus = "off" | "running" | "failed"

const App = () => {
  // TODO Use context to handle all this states? -> Avoid passing multiple props?
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([])
  const [selectedBlocks, setSelectedBlocks] = useState<number[]>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>("off")
  const [currentLevel, setCurrentLevel] = useState<number>(0)


  const handleStart = () => {
    setGameStatus("running");

    const arrayOfNumbers = getArrayWithNumbers(3 + currentLevel)

    setListOfNumbers(arrayOfNumbers)

    arrayOfNumbers.forEach((number, index) => {
      const blockId = `block-${number}`
      const element = document.getElementById(blockId) as HTMLElement

      setTimeout(() => {
        element.style.opacity = "1";

        const frecuency = 400 + (number * 100)
        console.log("frecuency", frecuency)
        generateBeep(frecuency)
      }, index * 1000);

      setTimeout(() => {
        element.style.opacity = "0.5";
      }, index * 1000 + 500);
    })
  }

  const handleRestart = () => {
    setListOfNumbers([]);
    setSelectedBlocks([]);
    setCurrentLevel(0);
    setGameStatus("off");
  }

  const handleIncreaseLevel = () => {
    setTimeout(() => {
      setCurrentLevel(prev => prev + 1);
      setListOfNumbers([]);
      setSelectedBlocks([]);
      handleStart()
    }, 5000)
  }

  return (
    <main id='main-layout'>
      <div>
        <h3 style={{
          color: gameStatus !== "failed" ? "white" : "red"
        }}>
          SEEMON
        </h3>
        <span>Current Level: {currentLevel + 1}</span>
      </div>
      <BlocksList
        listOfNumbers={listOfNumbers}
        onSetSelectedBlocks={setSelectedBlocks}
        selectedBlocks={selectedBlocks}
        onSetGameStatus={setGameStatus}
        onHandleIncreaseLevel={handleIncreaseLevel}
      />
      <div id='buttons-layout'>
        <button onClick={handleStart} disabled={gameStatus !== "off"}>{gameStatus === "running" ? "Running" : "Start"}</button>
        <button onClick={handleRestart} disabled={gameStatus !== "failed"}>Restart</button>
      </div>
    </main>
  )
}

export default App
