import React, { useState, useRef, useEffect } from 'react'

import { Table, Button, Input, Upload, Col, Form, Select } from "antd";
import axios from 'axios'
import url from "../../../../config/axios"

function Monthlyanalysis() {
    const [monthly, setMonthly] = useState()
    const getMonthlyData = async () => {
        try {
            const res = await url.get("/admin/Monthlydonation");

            setMonthly(res.data)

        } catch (e) {
            console.log(e, "error")
        }
    }
    const columns = [

        {
            title: "Month",
            dataIndex: "Month",
            key: "Month",
        },
        {
            title: "Donation",
            dataIndex: "Donation",
            key: "Donation"
        },
    ];
    useEffect(() => {
        getMonthlyData()

    }, [])
    return (
        <div className='col-lg-12'>
            <Table columns={columns} dataSource={monthly} />

        </div>
    )
}

export default Monthlyanalysis