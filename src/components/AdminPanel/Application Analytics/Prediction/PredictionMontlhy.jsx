import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';


function PredictionMontlhy() {
    const chartRef = useRef();
    const onClick = (event) => {
        console.log(getDatasetAtEvent(chartRef.current, event));
    }


    let PredictionData = []

    const getPredictionData = async () => {
        var average = 0
        var Difference = 0
        try {
            const res = await axios.get("http://localhost:9000/admin/Monthlydonation");
            console.log(res.data, "Prediction")
            for (let i = 0; i < res.data.length; i++) {

                PredictionData.push(res.data[i].Donation)
                average = average + res.data[i].Donation
            }

            average = average / res.data.length;
            for (let i = 0; i < 9; i++) {
                Difference = PredictionData[i] - PredictionData[i + 1]
                PredictionData.push(Difference + average)
                console.log(Difference + average, "is the Prediction")
            }

            console.log(PredictionData, "Final prediction")


        } catch (e) {
            console.log(e, "error")
        }
    }
    const state2 = {
        labels: ["jan", "feb", "march", "April", "may", "june", "july", "August", "September", "october", "November", "December"],
        datasets: [
            {
                label: 'Prediction(rs)',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: PredictionData

            }
        ]
    }
    useEffect(() => {

        getPredictionData()

    }, [])

    return (
        <div>PredictionMontlhy
            <div>
                <h1>
                    Prediction
                </h1>
                <Bar
                    onClick={onClick}
                    ref={chartRef}
                    data={state2}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Employee Salary per Month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default PredictionMontlhy