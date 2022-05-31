import { React, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Table, Upload, DatePicker } from "antd";
import axios from "axios";
import { Tab } from "@material-ui/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/User";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import url from "../../config/axios"
import { Redirect, withRouter } from "react-router";
function Audit() {
    const [auditTeam, setAuditTeams] = useState([])
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const user = useSelector(selectUser);
    console.log(user.userId)
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const viewTeams = async () => {
        try {
            const res = await url.get("/Admin/viewAudits")
            let obj;
            let array = []
            console.log(res.data.view, "viewing Teams")
            for (let i = 0; i < res.data.view.length; i++) {
                for (let j = 0; j < res.data.view[i].subAdmins.length; j++) {
                    if (user.userId === res.data.view[i].subAdmins[j]?.Sid?._id || user.userId === res.data.view[i].subAdmins[j]?.Sid2?._id || user.userId === res.data.view[i].subAdmins[j]?.Sid3?._id) {
                        console.log(res.data.view[i].fileName, "we are here")

                        obj = {
                            _id: res.data.view[i]._id, auditTeamname: res.data.view[i].auditTeamname, Member1: res.data.view[i]?.subAdmins[j]?.Sid?.name, Member2: res.data.view[i].subAdmins[j]?.Sid2?.name, Member3: res.data.view[i].subAdmins[j]?.Sid3?.name,
                            email1: res.data.view[i].subAdmins[j]?.Sid?.email, email2: res.data.view[i].subAdmins[j]?.Sid2?.email, email3: res.data.view[i].subAdmins[j]?.Sid3?.email, campaignname: res.data.view[i].Cid.name, fileName: res.data.view[i]?.fileName
                        }
                        array.push(obj)

                    }


                }
            }


            setAuditTeams(array)



        } catch (e) {
            console.log(e)
        }
    }
    const uploadReport = async (_id) => {
        const formData = new FormData();
        formData.append("_id", _id);
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
            const res = await url.post("/Admin/UploadReport",
                formData
            )
            if (!res) {
                console.log("Couldnt add")
            }
            alert(`doc uploaded`)
            console.log(res)

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
            render: (key, record) => (
                <a href={
                    "https://cryptic-taiga-42129.herokuapp.com/uploads/" + record.fileName
                }
                    download>
                    <Button icon={<DownloadOutlined />}>
                        Download {record.fileName}
                    </Button>
                </a>


            )
        },
        {
            title: "Upload Report",
            render: (key, record) => (
                <Form.Item
                    rules={[{ required: true, message: "Please uplaod doc" }]}
                    onChange={saveFile}
                >
                    <Upload
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined />}>
                            upload
                        </Button>
                    </Upload>
                </Form.Item>
            )
        }, {
            title: "Confirm Report",
            render: (key, record) => (
                <Form.Item
                    rules={[{ required: true, message: "Please uplaod doc" }]}

                >

                    <Button onClick={() => {
                        uploadReport(record._id)
                    }} icon={<UploadOutlined />}>
                        Confirm Audit
                    </Button>

                </Form.Item>
            )
        }
    ]
    return (
        <div>

            <h1>
                Assigned Teams
            </h1>
            <Table columns={TeamColumn} dataSource={auditTeam} scroll={{ x: 1500 }} />

        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(Audit));


//  if i need this someday
 // setAuditTeams(res.data.view.map((i) => {
            //     let obj;
            //     if (user.userId === i.subAdmins[0]?.Sid?._id) {
            //         obj = {
            //             ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
            //             email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
            //         }


            //     }
            //     else if (user.userId === i.subAdmins[0]?.Sid2?._id) {
            //         obj = {
            //             ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
            //             email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
            //         }


            //     } else if (user.userId === i.subAdmins[0]?.Sid3?._id) {
            //         obj = {
            //             ...i, Member1: i.subAdmins[0]?.Sid?.name, Member2: i.subAdmins[0]?.Sid2?.name, Member3: i.subAdmins[0]?.Sid3?.name,
            //             email1: i.subAdmins[0]?.Sid?.email, email2: i.subAdmins[0]?.Sid2?.email, email3: i.subAdmins[0]?.Sid3?.email, campaignname: i.Cid.name
            //         }


            //     }
            //     return obj
            // }))
            // setSubAdmin(res.data)