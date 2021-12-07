import React, { useState } from "react";
import { defaultButtonStyles } from "./Button/Button";

const SendMessage = (props) => {
  const [messageToSend, setMessageToSend] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendMessage(messageToSend);
    setMessageToSend('')
  }

  return (
    <form className="message-send flex" onSubmit={handleSubmit}>
      <input
        name="nooooo"
        className="bg-inputBg m-4 w-full rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
        placeholder="Write A message"
        value={messageToSend}
        onChange={(event) => setMessageToSend(event.target.value)}
        autoComplete="hidden"
      />
      <button
        type='submit'
        disabled={messageToSend ? false : true}
        className={`${defaultButtonStyles} m-4`}
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
