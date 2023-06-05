import { useState, useEffect, useRef } from 'react'

import './App.css'

import List from './components/List'
import Form from './components/Forms'

import { Sub } from './types'


interface AppState {
  subscriber: Array<Sub>
  // subscriber: <Sub[]>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'monica', 
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=monica',
    description: 'Monica is a moderator sometimes'
  },
  {
    nick: 'adolfo', 
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=adolfo',
  }
]

function App() {
  // const [subscriber, setSubscriber] = useState<Sub[]>([])  // first form
  const [subscriber, setSubscriber] = useState<AppState["subscriber"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubscriber(INITIAL_STATE)
  }, [])

  const handleSubmit = (newSubscriber: Sub): void => {
    setSubscriber(subscriber => [... subscriber, newSubscriber])
  }

  return (
    <>
      <h5 
        style={{
          marginBlockStart: '0'
        }}
      >
        App in React with Typescript
      </h5>
      
      <div className="app" ref={divRef}>
        <h2 
          style={{
            textTransform: 'uppercase'
          }}
        >
          subscribers
        </h2>

        <List subscriber={subscriber}/>

        <Form onNewSubscriber={handleSubmit}/>
        
      </div>
    </>
  )
}

export default App
