import "./welcome.css";
import { useState } from "react";
export default function Welcome({ setName }) {
  const [userName, setUserName] = useState("");
  function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setUserName(value);
  }

  function print() {
    setName(userName);
  }
  return (
    <div className='welcome-page'>
      <h1 className='title'>Who's that Pokemon?</h1>
      <img className='main-image' src='/assets/mainPokemon.png' />
      <p className='input-username'>Please type your name</p>
      <div className='input-group mb-3 w-15'>
        <input
          onChange={handleChange}
          type='text'
          className='w-75 form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <button onClick={print} type='button' className='btn w-15 btn-primary'>
        Submit
      </button>
    </div>
  );
}
