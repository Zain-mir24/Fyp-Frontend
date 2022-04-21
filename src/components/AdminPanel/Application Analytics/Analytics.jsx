import React, { useState, useRef, useEffect } from "react";
import { Bar, getDatasetAtEvent } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import axios from "axios";
import { Table, Button, Input, Upload, Col, Form, Select } from "antd";
import Monthlyanalysis from "./MontlyAnalysis/Monthlyanalysis";
import CityAnalysis from "./CityAnalytics/CityAnalysis";
import { UserAnalytics } from "./UserAnalytics/UserAnalytics";
import Prediction from "./Prediction/PredictionMontlhy";
import FindingDonor from "./FindingDonor/Finding";
function Analytics() {
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  };

  // const [data, setData] = useState([])
  let Labels = [];
  let data = [];

  const getMonthlyData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/admin/Monthlydonation"
      );
      // console.log(res.data)
      for (let i = 0; i < res.data.length; i++) {
        Labels.push(res.data[i].Month);
        data.push(res.data[i].Donation);
      }
      // setMonthly(res.data)

      console.log(Labels);
      console.log(data);
    } catch (e) {
      console.log(e, "error");
    }
  };

  // manhoos
  const state = {
    labels: Labels,
    datasets: [
      {
        label: "Donation per month(rs)",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: data,
      },
    ],
  };

  useEffect(() => {
    getMonthlyData();

    console.log(data);
    // console.log(labels)
    // Show data
  }, []);

  return (
    <div>
      <h1>Donation per month Analytics</h1>
      <div>
        <Bar
          onClick={onClick}
          ref={chartRef}
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Employee Salary per Month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>

      <Monthlyanalysis />
      <Prediction />
      <CityAnalysis />
      <UserAnalytics />
      <FindingDonor />
    </div>
  );
}

export default Analytics;
