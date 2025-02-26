import { useState } from 'react'
import './App.css'
import BlocksList from './components/BlocksList'
import getRandomNumber from './lib/getRandomNumber'
import generateBeep from './lib/generateBeep'

// TODO Disable button when game starts
// TODO Create a stop game button?

const HIGHEST_NUMBER_TO_RANDOMIZE = 9

const App = () => {
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([])

  const handleStart = () => {
    const mockArray = Array.from(Array(3)) as number[];

    mockArray.forEach((_, index) => {
      const randomNumber = getRandomNumber(HIGHEST_NUMBER_TO_RANDOMIZE)

      mockArray[index] = randomNumber
    })

    setListOfNumbers(mockArray)

    mockArray.forEach((number, index) => {
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



  return (
    <main id='main-layout'>
      <div>
        <h3>SEEMON</h3>
      </div>
      <BlocksList listOfNumbers={listOfNumbers} />
      <div>
        <button onClick={handleStart}>Start</button>
      </div>
    </main>
  )
}

export default App
