import { React, useState, useEffect } from "react";
import "./chat.css";
import Conversation from "./conversation/Conversation";
import Message from "./message/Message";
import axios from "axios";

function Chat(props) {
  const [conversation, setConversation] = useState([]);

  const getConversation = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/conversation/" + props.donorId
      );
      setConversation(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getConversation();
  }, []);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own={true} />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="messageInput"
              placeholder="Write Something here ..............."
            />
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">Online</div>
      </div>
    </div>
  );
}

export default Chat;
