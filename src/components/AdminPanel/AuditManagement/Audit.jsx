import { React, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Table, DatePicker } from "antd";
import axios from "axios";
import { Tab } from "@material-ui/icons";
import "./Audit.css"
function Audit() {
    // Creating subAdmin UseStates
    const [subAdmin, setSubAdmin] = useState([])
    const [auditTeamname, setTeamName] = useState("")
    const [Sid, setSid] = useState(null)
    const [Sid2, setSid2] = useState(null)
    const [Sid3, setSid3] = useState(null)
    const [dis, setDis] = useState(false)
    const [dis1, setDis1] = useState(false)
    // const [dis2, setDis2] = useState(false)
    let dis2 = false;
    let camp1 = false
    // Creating Campaigns UseStates
    const [campaigns, setCampaigns] = useState([])
    const [Cid, setCid] = useState("")

    // Team creation UseStates
    const [auditTeam, setAuditTeams] = useState([])
    const [count, setCount] = useState(0)
    const [campCount, setcampCount] = useState(0)
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
        try {
            const res = await axios.post("http://localhost:9000/Admin/createAudit", {
                auditTeamname,
                Sid,
                Sid2,
                Sid3,
                Cid

            })
            if (res) {
                alert('Audit Team has been created')
            }
            // setSubAdmin(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const viewTeams = async () => {
        try {
            const res = await axios.get("http://localhost:9000/Admin/viewAudits")
            console.log(res.data.view, "viewing Teams")
            setAuditTeams(res.data.view.map((i) => {
                let obj = {
                    ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
                    email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid?.name
                }
                console.log(obj, "new obj")
                return obj
            }))
            // setSubAdmin(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getSubAdmin()
        getCampaigns()
        viewTeams()
    }, [count])
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
                                setCount(count + 1)
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
        }, {
            title: "remove subAdmin",
            render: (text, record) => (
                <div>
                    <Button
                        disabled={dis2}
                        onClick={() => {
                            console.log(record._id)


                            if (record._id == Sid) {
                                setSid(null)
                                setCount(count - 1);
                                console.log(count)
                                setDis(false)

                            } else if (record._id == Sid2) {
                                setSid2(null)
                                setCount(count - 1);
                                setDis(false)

                                console.log(count)

                            } else if (record._id == Sid3) {
                                setSid3("")
                                setCount(count - 1);
                                setDis(false)


                            }
                        }}
                    >
                        Remove this Admin from team
                    </Button>
                </div >
            )
        },
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
        }, {
            title: "Select Campaign",
            render: (text, record) => (
                <div>
                    <Button
                        disabled={dis1}
                        onClick={() => {
                            console.log(record._id)
                            console.log(count)

                            if (campCount == 0) {
                                setCid(record._id)
                                setcampCount(campCount + 1);
                                setDis1(true)

                            }
                        }}
                    >
                        Select this campaign
                    </Button>
                </div >
            )
        },
        {
            title: "UnSelect Campaign",
            render: (text, record) => (
                <div>
                    <Button

                        onClick={() => {
                            console.log(record._id)
                            console.log(count)

                            if (record._id == Cid) {
                                setCid("")
                                setcampCount(campCount - 1);
                                setDis1(false)



                            }
                        }}
                    >
                        Select this campaign
                    </Button>
                </div >
            )
        },
    ]
    const TeamColumn = [
        {
            title: "Team",
            dataIndex: "auditTeamname",
            key: "auditTeamname"
        },
        {
            title: "Audit member1",
            dataIndex: "Member1",
            key: "Member1"
        }, {
            title: "Audit member2",
            dataIndex: "Member2",
            key: "Member2"
        }, {
            title: "Audit member3",
            dataIndex: "Member3",
            key: "Member3"
        }, {
            title: "Audit member1 email",
            dataIndex: "email1",
            key: "email1"
        }, {
            title: "Audit member2 email",
            dataIndex: "email2",
            key: "email2"
        }, {
            title: "Audit member3 email",
            dataIndex: "email3",
            key: "email3"
        }, {
            title: "Campaign Name",
            dataIndex: "campaignname",
            key: "campaignname"
        }, {
            title: "Audit Report",
            dataIndex: "fileName",
            key: "fileName",
            render: (text, record) => (
                record.fileName ?
                    <a
                        href={
                            "http://localhost:9000/uploads/" + record.fileName
                        }
                        download
                    >
                        <Button>Download {record.fileName}</Button>
                    </a> : null
            ),
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
                Enter Team name
                <Input
                    placeholder="Enter Team Name"
                    onChange={(e) => {
                        setTeamName(e.target.value)
                    }}
                />
            </h1>
            <h1>
                Number of SubAdmins selected {count}
            </h1>
            <Table dataSource={subAdmin} columns={subAdminColumn} />
            <h1>
                Campaigns select {campCount}
            </h1>
            <Table dataSource={campaigns} columns={CampaignsColumn} />
            <Button
                onClick={() => {
                    createTeams()
                }}>
                Create an audit Team
            </Button>

            <h1>
                Assigned Teams
            </h1>
            <Table columns={TeamColumn} dataSource={auditTeam} scroll={{ x: 1500 }} />
        </div>
    )
}

export default Audit