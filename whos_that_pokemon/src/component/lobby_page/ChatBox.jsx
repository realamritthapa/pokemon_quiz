import React from "react";
import "./chatbox.css";

export default function ChatBox() {
  return (
    <div class='row d-flex justify-content-center '>
      <div className='message-box  '>
        <div className='message-container'></div>
        <form class='row'>
          <div class='col-md-10 form-group  '>
            <label for='message-input'></label>
            <textarea
              class='w-100 h-100'
              type='text'
              id='message-input'
              placeholder='type here'
            ></textarea>
          </div>

          <button class='col btn btn-primary btn-sm '>Send</button>
        </form>
      </div>
    </div>
  );
}
