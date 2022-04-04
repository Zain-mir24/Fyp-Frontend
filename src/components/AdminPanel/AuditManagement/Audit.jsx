import { React, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Table, DatePicker } from "antd";
import axios from "axios";
import { Tab } from "@material-ui/icons";
function Audit() {
    // Creating subAdmin UseStates
    const [subAdmin, setSubAdmin] = useState([])
    const [Sid, setSid] = useState("")
    const [Sid2, setSid2] = useState("")
    const [Sid3, setSid3] = useState("")
    const [dis, setDis] = useState(false)
    // Creating Campaigns UseStates
    const [campaigns, setCampaigns] = useState([])
    const [Cid, setCid] = useState("")

    // Team creation UseStates
    const [subAdmins, setSubAdmins] = useState([])
    const [count, setCount] = useState(0)
    const getSubAdmin = async () => {
        try {
            const res = await axios.get("http://localhost:9000/Admin/viewsubAdmin")
            console.log(res.data, "viewing SubAdmins")
            setSubAdmin(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const getCampaigns = async () => {
        try {
            const res = await axios.get("http://localhost:9000/Admin/viewCampaigns")
            console.log(res.data.campaign, "viewing Campaigns")
            setCampaigns(res.data.campaign)
            // setSubAdmin(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const createTeams = async () => {

    }

    const viewTeams = async () => {

    }
    useEffect(() => {
        getSubAdmin()
        getCampaigns()
    }, [])
    const subAdminColumn = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Location",
            dataIndex: "Location",
            key: "Location"
        },
        {
            title: "Select",
            render: (text, record) => (
                <div>
                    <Button
                        disabled={dis}
                        onClick={() => {
                            console.log(record._id)
                            console.log(count)

                            if (count == 0) {
                                setSid(record._id)
                                setCount(count + 1);

                            } else if (count == 1) {
                                setSid2(record._id)
                                setCount(count + 1);

                            } else if (count == 2) {
                                setSid3(record._id)
                                setDis(true)

                            } else if (count > 2) {
                                setDis(true)
                            }
                        }}
                    >
                        Select this Admin
                    </Button>
                </div >
            )
        }
    ]

    const CampaignsColumn = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        }, {
            title: "Required Donation",
            dataIndex: "donation",
            key: "donation"
        },
    ]
    return (
        <div>
            {/* 3 steps are in this module
          -> Admins 
          -> campaigns
          -> the table where we see all the teams assigned to each campaign           
            */}

            <h1>
                SubAdmins
            </h1>
            <Table dataSource={subAdmin} columns={subAdminColumn} />
            <h1>
                Campaigns
            </h1>
            <Table dataSource={campaigns} columns={CampaignsColumn} />
            <h1>
                Assigned Teams
            </h1>
            <Table />
        </div>
    )
}

export default Audit