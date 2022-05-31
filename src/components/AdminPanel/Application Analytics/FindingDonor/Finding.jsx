import { React, useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Finding() {
  const [find, setFind] = useState([]);
  const getData = async () => {
    try {
      const getBen = await axios.get("http://localhost:5000");

      setFind(getBen.data);
      console.log(getBen.data, "Data");
    } catch (e) {
      console.log(e);
    }
  };
  const data = {
    labels: [`Potential Donor ${find[1]}`, `Non Potential Donors ${find[2]}`],
    datasets: [
      {
        label: "# of Votes",
        data: [find[1], find[2]],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        width: "80",
        height: 40,
      },
    ],
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ marginTop: "-35px", textAlign: "center" }}>
      <h1>Potential Donor</h1>
      <div className="col-lg-6">
        <Pie data={data} />
        <br />
        <p>
          <b>Total Donor Data:</b> {find[0]} <br />
          <b>Percentage of Potential Donors:</b> {find[3]} %
        </p>
      </div>
      <br /> <br />
    </div>
  );
}
