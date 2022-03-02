import React, { useEffect, useState } from 'react'
import { Table, Button, Input, Upload, Col, Form } from "antd";
const axios = require("axios");
function MeetingScheduled() {
    const [data, setData] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const viewingMeeting = async () => {
        try {
            const res = await axios.get("http://localhost:9000/User/appointments")
            console.log(res.data)
            setData(res.data.map((d) => {
                let obj = { ...d, childName: d.childId.name }
                return obj
            }))

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(viewingMeeting, [])
    const columns = [
        {
            title: "Donor name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Time",
            dataIndex: "SlotTime",
            key: "SlotTime"
        },
        {
            title: "Date",
            dataIndex: "SlotDate",
            key: "SlotDate"
        },
        {
            title: "Child to Adopt",
            dataIndex: "childName",
            key: "childName"
        }
    ]

    return (

        <div className="col-lg-12">
            <Table
                title={() => " Meetings Scheduled for adoption"}
                columns={columns}
                dataSource={data}

            />
        </div>
    )
}

export default MeetingScheduled