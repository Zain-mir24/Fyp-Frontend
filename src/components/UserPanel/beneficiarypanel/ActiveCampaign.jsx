import { React, useState } from "react";

import axios from "axios";
// import { selectUser } from "../../../store/reducers/User";
// const user = useSelector(selectUser);

export default function ActiveCampaign() {
  const [data, setData] = useState([]);
  const viewCamp = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewCampaign/");
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return <div>ActiveCampaign</div>;
}
