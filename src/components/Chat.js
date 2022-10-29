import React from "react";
import Cam from "../Images/cam.png";
import More from "../Images/more.png";
import Add from "../Images/add.png";
import Messages from "./Messages";
import Input from "./Input";
function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
