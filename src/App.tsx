import { useState } from 'react'
import './App.css'
import BlocksList from './components/BlocksList'

// TODO Disable button when game starts

const App = () => {
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([])

  const handleStart = () => {
    setListOfNumbers([2, 4, 6])
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
