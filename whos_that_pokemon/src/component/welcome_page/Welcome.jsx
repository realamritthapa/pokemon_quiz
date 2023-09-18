import "./welcome.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Welcome({ setName }) {
  const [userName, setUserName] = useState(null);
  const [placeholder, setPlaceHolder] = useState("Please type your name");
  function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setUserName(value);
  }
  const navigate = useNavigate();
  function handleSubmit() {
    if (userName) {
      setName(userName);
      navigate("/lobby");
    } else {
      setPlaceHolder("This field can not be empty");
    }
  }
  return (
    <div className='welcome-page'>
      <h1 className='title'>Who's that Pokemon?</h1>
      <img className='main-image' src='/assets/pokeomnBackground.png' />
      <div className='input-group mb-3 w-15'>
        <input
          onChange={handleChange}
          type='text'
          className='w-75 form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
          placeholder={placeholder}
        />
      </div>
      <button
        onClick={handleSubmit}
        type='button'
        className='btn w-25 btn-primary '
      >
        Enter the lobby
      </button>
    </div>
  );
}
