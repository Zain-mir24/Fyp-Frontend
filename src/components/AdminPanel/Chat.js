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
  const [donor, setDonor] = useState([]);
  const [beneficiary, setBeneficiary] = useState([]);
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
      const res = await axios.get("http://localhost:9000/conversation/");
      setConversation(res.data);
      console.log(res.data, "conversation");
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

  const viewData = async () => {
    try {
      const resp = await axios.get("http://localhost:9000/admin/donor");
      setDonor(resp.data);

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };

  const viewBeneficiary = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:9000/admin/readBeneficiary"
      );
      setBeneficiary(resp.data);

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    viewData();
    viewBeneficiary();
  }, []);
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWr">
          <h1>
            Global reach users
          </h1>
          {conversation.map((item) => {
            return (
              <div onClick={() => setCurrentChat(item)}>

                <Conversation userId={item.member[0]} />
              </div>
            );
          })}
          {/* <h1>Donors</h1>
          {donor.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <br />
              </div>
            );
          })}

          <h1>Beneficiary</h1>
          {beneficiary.map((item) => {
            return (
              <div onClick={}>
                <p>{item.name}</p>
                <br />
              </div>
            );
          })} */}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrap">
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
            <button className="chatSubmitButton" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
      {/* <div className="chatOnline">
        <div className="chatOnlinebox">Online</div>
      </div> */}
    </div>
  );
}

export default Chat;
