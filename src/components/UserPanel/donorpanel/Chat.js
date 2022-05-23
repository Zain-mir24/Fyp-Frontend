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
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:4000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.member.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", props.donorId);
    socket.current.on("getUsers", (user) => {
      console.log(user, "TESTING");
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: props.donorId,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.member.find(
      (member) => member != props.donorId
    );
    socket.current.emit("sendMessage", {
      senderId: props.donorId,
      receiverId: receiverId,
      text: newMessage,
    });

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
        <div className="chatMenuWr">
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
                  console.log(item.sender, "HELLLO");
                  console.log(props.donorId);
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
