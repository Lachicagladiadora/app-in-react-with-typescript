import React, { useState } from "react"
import { Sub } from "../types"

interface  FormState { 
  inputValues: Sub
}

interface FormProps {
  onNewSubscriber: React.Dispatch<React.SetStateAction<Sub[]>>
}

const Form = ({onNewSubscriber}: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>
  ({
    nick: '',    
    avatar: '',    
    subMonths: 0,    
    description: '',      
  })


  const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
    _event.preventDefault()
    onNewSubscriber(subscriber => ([...subscriber, inputValues]))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  return(
    <div>
      <form 
        onSubmit={handleSubmit}

        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick"/>
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
        <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths"/>
        <textarea onChange={handleChange} value={inputValues.description} type="text" name="description" placeholder="description"/>

        <button>
          Save new SUBSCRIBER!
        </button>
      </form>
    </div>
  )
}

export default Form