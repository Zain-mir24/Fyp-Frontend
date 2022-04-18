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
        var sum = 0;
        try {
            const res = await axios.get("http://localhost:9000/admin/Predictionanalysis");
            for (let i = 0; i < res.data.length; i++) {
                sum = 0;
                for (let j = 0; j < res.data[i].Donation.length; j++) {
                    sum = sum + res.data[i].Donation[j]
                }
                console.log(sum, "yaha tak arha hai")
                average = sum / res.data[i].Donation.length;
                PredictionData.push(average)
            }

        } catch (e) {
            console.log(e, "error")
        }
    }
    const state2 = {
        labels: ["january(2022)", "feburary(2022)", "march(2022)", "April(2022)", "may(2021)", "june(2022)", "july(2022)", "August(2022)", "September(2022)", "october(2022)", "November(2022)", "December(2022)"],
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

    )
}

export default PredictionMontlhy