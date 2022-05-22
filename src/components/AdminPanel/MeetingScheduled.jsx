import React, { useEffect, useState } from 'react'
import { Table, Button, Input, Upload, Col, Form } from "antd";
import SendEmail from "./SendEmail"
const axios = require("axios");

function MeetingScheduled() {
    const [data, setData] = useState([])
    const [content, setContent] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const viewingMeeting = async () => {
        try {
            const res = await axios.get("http://localhost:9000/User/appointments")
            console.log(res.data)
            setData(res.data.map((d) => {
                let obj = { ...d, childName: d.childId.name, fileName: d.childId.fileName }
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
        }, {
            title: "Picture",
            dataIndex: "fileName",
            key: "fileName",
            render: (text, record) => {
                console.log(record)
                return (
                    <div style={{ width: "40%" }}>
                        <img src={"http://localhost:9000/uploads/" + record.fileName} style={{ height: '20%', width: '100%' }} />
                    </div>
                );
            },
            width: '20%',
        },
        {
            title: "Child to Adopt",
            dataIndex: "childName",
            key: "childName"
        }, {
            title: "Send mail to donor",
            render: (text, record) => (
                <div>
                    <Button onClick={() => {
                        setName(record.name)
                        setEmail(record.email)
                        setContent("mail")
                    }}>
                        Create email
                    </Button>
                </div>
            )
        }
    ]

    return (

        <div className="col-lg-12">
            {content == "mail" ?
                <SendEmail name={name} email={email} />
                : <Table
                    title={() => " Meetings Scheduled for adoption"}
                    columns={columns}
                    dataSource={data} />}
        </div>
    )
}

export default MeetingScheduled