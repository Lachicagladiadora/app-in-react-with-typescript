import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState<number | string>(5)

  const changeNumber = () => {
    setNumber('2')
  }

  return (
    <>
      <h1>App in React with Typescript</h1>
      <div className="card">
        {number}
        <button onClick={changeNumber}>
          Change number
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
