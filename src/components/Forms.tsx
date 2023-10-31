import useNewSubscriberForm from "../hooks/useNewSubscriberForm";
import { Sub } from "../types";

interface FormProps {
  onNewSubscriber: (newSubscriber: Sub) => void;
}

const Form = ({ onNewSubscriber }: FormProps) => {
  const [inputValues, dispatch] = useNewSubscriberForm();

  const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
    _event.preventDefault();
    onNewSubscriber(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />

        <div className="button-contain">
          <button onClick={handleClear} type="button">
            Clear the form
          </button>
          <button type="submit">Save new SUBSCRIBER!</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
