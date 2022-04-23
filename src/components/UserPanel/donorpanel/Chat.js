import { React, useState, useEffect, useRef } from "react";
import "./chat.css";
import Conversation from "./conversation/Conversation";
import Message from "./message/Message";
import axios from "axios";
import { io } from "socket.io-client";

function Chat(props) {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:4000");
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", props.donorId);
    socket.current.on("getUsers", (user) => {
      console.log(user);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: props.donorId,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post("http://localhost:9000/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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

  const getMessages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/message/" + currentChat._id
      );
      setMessages(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    getConversation();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          {conversation.map((item) => {
            return (
              <div onClick={() => setCurrentChat(item)}>
                <Conversation />
              </div>
            );
          })}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((item) => {
                  return (
                    <div ref={scrollRef}>
                      <Message
                        message={item}
                        own={item.sender === props.donorId}
                      />
                    </div>
                  );
                })}
                {/* <Message />
                <Message own={true} />
                <Message /> */}
              </div>
            </>
          ) : (
            <span>Open A Conversation To Start A Chat</span>
          )}

          <div className="chatBoxBottom">
            <textarea
              className="messageInput"
              placeholder="Write Something here ..............."
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
              value={newMessage}
            />
            <button onClick={handleSubmit}>Send</button>
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
