import { React, useState, useEffect } from "react";
import "./conversation.css";
import axios from "axios";

export default function Conversation(props) {
  const [donor, setDonor] = useState("");
  const viewData = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:9000/admin/users/" + props.userId
      );
      setDonor(resp.data);

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    viewData();
  }, []);

  return (
    <div className="conversation">
      <span className="conversationName">{donor.name}</span>
    </div>
  );
}
