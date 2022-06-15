import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'
import url from "../../../../config/axios"

ChartJS.register(ArcElement, Tooltip, Legend);



export function UserAnalytics() {
    const [beneficiary, setBeneficiary] = useState(0)
    const [donors, setDonors] = useState(0)
    const getData = async () => {
        try {
            const getBen = await url.get("/admin/readBeneficiary")
            const getDon = await url.get("/admin/readDonor")
            console.log(getBen.data.length)
            setBeneficiary(getBen.data.length)
            console.log(getDon.data.length)
            setDonors(getDon.data.length)

        } catch (e) {
            console.log(e)
        }
    }
    const data = {

        labels: [`Number of Beneficiary ${beneficiary}`, `Number of Donors ${donors}`],
        datasets: [
            {
                label: '# of Votes',
                data: [beneficiary, donors],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                width: "80", height: 40,
                labelColor: ["rgba(255, 255, 255, 1)", "white"]


            },
        ],
        scaleFontColor: "white"
    };
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h1 style={{ color: "white" }}>
                UserStats
            </h1>
            <div className='col-lg-6' >

                <Pie

                    data={data} />
            </div>


        </div>
    );
}
