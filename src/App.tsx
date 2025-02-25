import { useState } from 'react'
import './App.css'
import BlocksList from './components/BlocksList'
import findUniqueRandomNumber from './lib/findUniqueRandomNumber'

// TODO Disable button when game starts
// TODO Create a stop game button?


const App = () => {
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([])

  const handleStart = () => {
    setListOfNumbers([])

    const mockArray = Array.from(Array(3)) as number[];

    mockArray.forEach((_, index, array) => {
      const numberGenerated = findUniqueRandomNumber(array);
      mockArray[index] = numberGenerated as number
    })

    setListOfNumbers(mockArray)

    listOfNumbers.forEach((number, index) => {
      const blockId = `block-${number}`
      const element = document.getElementById(blockId) as HTMLElement

      setTimeout(() => {
        element.style.opacity = "1";
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
