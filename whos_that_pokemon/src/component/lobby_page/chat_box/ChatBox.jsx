import React, { useState } from "react";
import "./chatbox.css";
import Messages from "../message_box/Messages";
import { socket } from "../../../services/socket.js";

export default function ChatBox({ data }) {
  const [message, setMessage] = useState("");
  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let info = {
      id: data.roomId,
      userName: data.name,
      sendMessage: message,
    };
    socket.emit("message", info);
    setMessage("");
  }

  return (
    <div className='chat-box'>
      <div className='message-box  '>
        <div className='message-container'>
          <Messages />
        </div>
        <form className='form-style row' onSubmit={handleSubmit}>
          <div className='col-md-10 form-group  '>
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
