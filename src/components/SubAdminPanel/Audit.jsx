import { React, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Table, DatePicker } from "antd";
import axios from "axios";
import { Tab } from "@material-ui/icons";

function Audit() {
    const [auditTeam, setAuditTeams] = useState([])

    const viewTeams = async () => {
        try {
            const res = await axios.get("http://localhost:9000/Admin/viewAudits")
            console.log(res.data.view, "viewing Teams")
            setAuditTeams(res.data.view.map((i) => {
                let obj = {
                    ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
                    email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
                }
                console.log(obj, "new obj")
                return obj
            }))
            // setSubAdmin(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>

            Audit

        </div>
    )
}

export default Audit