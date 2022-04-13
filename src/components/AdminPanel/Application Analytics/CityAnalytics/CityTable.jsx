import React, { useState, useRef, useEffect } from 'react'

import { Table, Button, Input, Upload, Col, Form, Select } from "antd";
import axios from 'axios'

function Cityanalysis() {
    const [City, setCity] = useState()
    const getCityData = async () => {
        try {
            const res = await axios.get("http://localhost:9000/admin/Citydonation");

            setCity(res.data)

        } catch (e) {
            console.log(e, "error")
        }
    }
    const columns = [

        {
            title: "City",
            dataIndex: "City",
            key: "City",
        },
        {
            title: "Donation",
            dataIndex: "Donation",
            key: "Donation"
        },
    ];
    useEffect(() => {
        getCityData()

    }, [])
    return (
        <div className='col-lg-12'>
            <Table columns={columns} dataSource={City} />

        </div>
    )
}

export default Cityanalysis