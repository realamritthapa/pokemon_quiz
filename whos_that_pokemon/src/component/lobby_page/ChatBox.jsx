import React, { useState } from "react";
import "./chatbox.css";
import Messages from "./messages";
import { socket } from "../../services/socket.js";
export default function ChatBox() {
  const [message, setMessage] = useState("");
  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    socket.emit("message", message);
    setMessage("");
  }

  return (
    <div className='row d-flex justify-content-center '>
      <div className='message-box  '>
        <div className='message-container'>
          <Messages />
        </div>
        <form className='row' onSubmit={handleSubmit}>
          <div className='col-md-10 form-group  '>
            {/* <label for='message-input'></label> */}
            <textarea
              className='w-100 h-100'
              type='text'
              id='message-input'
              placeholder='type here'
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type='submit' className='col btn btn-primary btn-sm '>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
