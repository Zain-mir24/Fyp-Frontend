import { React, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Table, DatePicker } from "antd";
import axios from "axios";
import { Tab } from "@material-ui/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/User";
import { Redirect, withRouter } from "react-router";
function Audit() {
    const [auditTeam, setAuditTeams] = useState([])
    const user = useSelector(selectUser);
    console.log(user.userId)
    const viewTeams = async () => {
        try {
            const res = await axios.get("http://localhost:9000/Admin/viewAudits")
            console.log(res.data.view, "viewing Teams")

            setAuditTeams(res.data.view.map((i) => {
                let obj;
                if (user.userId === i.subAdmins[0]?.Sid?._id) {
                    obj = {
                        ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
                        email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
                    }


                }
                else if (user.userId === i.subAdmins[0]?.Sid2?._id) {
                    obj = {
                        ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
                        email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
                    }


                } else if (user.userId === i.subAdmins[0]?.Sid3?._id) {
                    obj = {
                        ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
                        email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
                    }


                }
                return obj
            }))
            // setSubAdmin(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        viewTeams()
    }, [])
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
            title: "Report",
            dataIndex: "fileName",
            key: "fileName",
        }
    ]
    return (
        <div>

            <h1>
                Assigned Teams
            </h1>
            <Table columns={TeamColumn} dataSource={auditTeam} />

        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(Audit));