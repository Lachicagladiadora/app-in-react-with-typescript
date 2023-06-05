import useNewSubscriberForm from "../hooks/useNewSubscriberForm"
import { Sub } from "../types"


// interface  FormState { 
//   inputValues: Sub
// }

interface FormProps {
  onNewSubscriber:(newSubscriber: Sub) => void
}


const Form = ({onNewSubscriber}: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const [inputValues, dispatch] = useNewSubscriberForm()

  const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
    _event.preventDefault()
    onNewSubscriber(inputValues)
    // handleClear()
    dispatch({type: "clear"})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      }
    })
    // setInputValues({
    //   ...inputValues,
    //   [e.target.name]: e.target.value
    // })
  }

  const handleClear = () => {
    dispatch({type: "clear"})
    // setInputValues(INITIAL_STATE)
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
        <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths"/>
        <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>

        <button onClick={handleClear} type="button" >Clear the form</button>
        <button type="submit">Save new SUBSCRIBER!</button>

      </form>
    </div>
  )
}

export default Form