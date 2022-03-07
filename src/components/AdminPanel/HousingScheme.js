import React, { useState } from 'react'
import { Table, Button, Input, Upload, Col, Form, Select, Row, DatePicker } from "antd";
import { useEffect } from 'react';
const axios = require("axios");
function HousingScheme() {
    const [ProposalNo, setProposalNo] = useState()
    const [Deservername, setDeservername] = useState("")
    const [Guardian, setGuardian] = useState("")
    const [Status, setStatus] = useState("")
    const [cnic, setcnic] = useState(0)
    const [cell, setcell] = useState(0)
    const [Dependents, setDependents] = useState("")
    const [Sourceofincome, setSourceofincome] = useState("")
    const [Monthlyincome, setMonthlyincome] = useState(0)
    const [address, setaddress] = useState("")
    const [accomodationself, setaccomodationself] = useState("")
    const [accomodationdonated, setaccomodationdonated] = useState("")
    const [accomodationrental, setaccomodationrental] = useState("")
    const [accomodationrent, setaccomodationrent] = useState("")
    const [ownerofland, setownerofland] = useState("")
    const [PlotDimensions, setPlotDimensions] = useState("")
    const [EstimatedCost, setEstimatedCost] = useState(0)
    const [EstimatedTimeFrame, setEstimatedTimeFrame] = useState("")
    const [contructionDetail, setcontructionDetail] = useState("")
    const [plan, setplan] = useState("")
    // useState for view route
    const [data, setData] = useState()
    // function onChange(date, dateString) {
    //     console.log(dateString);
    //     setDate(dateString)

    // }
    // function onChange1(date, dateString) {
    //     console.log(dateString)
    //     setDonationDate(dateString)
    // }

    const viewData = async () => {
        try {
            const res = await axios.get("http://localhost:9000/admin/viewhousingscheme");
            setData(res.data)

            console.log(res.data, "view for amount detail");
        } catch (err) {
            console.log(err);
        }
    }
    const columns = [
        {
            title: "ProposalNo",
            dataIndex: "ProposalNo",
            key: "ProposalNo",
        },

        {
            title: "Deservername",
            dataIndex: "Deservername",
            key: "Deservername",
        },
        {
            title: "Guardian",
            dataIndex: "Guardian",
            key: "Guardian",
        }, {
            title: "Status",
            dataIndex: "Status",
            key: "Status",
        }, {
            title: "cnic",
            dataIndex: "cnic",
            key: "cnic",
        },

        {
            title: "cell",
            dataIndex: "cell",
            key: "cell",
        },
        {
            title: "Dependents",
            dataIndex: "Dependents",
            key: "Dependents",
        },
        {
            title: "Sourceofincome",
            dataIndex: "Sourceofincome",
            key: "Sourceofincome",
        },
        {
            title: "Monthlyincome",
            dataIndex: "Monthlyincome",
            key: "Monthlyincome",
        },
        {
            title: "address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "accomodationself",
            dataIndex: "accomodationself",
            key: "accomodationself",
        },
        {
            title: "accomodationdonated",
            dataIndex: "accomodationdonated",
            key: "accomodationdonated",
        }, {
            title: "accomodationrental",
            dataIndex: "accomodationrental",
            key: "accomodationrental",
        },
        {
            title: "accomodationrent",
            dataIndex: "accomodationrent",
            key: "accomodationrent",
        },
        {
            title: "ownerofland",
            dataIndex: "ownerofland",
            key: "ownerofland",
        },

    ];
    useEffect(() => {
        viewData()
    }, [])
    const sendData = async () => {
        try {
            const res = await axios.post(
                "http://localhost:9000/admin/addhousingScheme",
                {
                    ProposalNo,
                    Deservername,
                    Guardian,
                    Status,
                    cnic,
                    cell,
                    Dependents,
                    Sourceofincome,
                    Monthlyincome,
                    address,
                    accomodationself,
                    accomodationdonated,
                    accomodationrental,
                    accomodationrent,
                    ownerofland,
                    PlotDimensions,
                    EstimatedCost,
                    EstimatedTimeFrame,
                    contructionDetail,
                    plan
                }
            )
            if (!res) {
                console.log("data didnt send")
            }
            alert("Housing Scheme added, refresh the page to see changes")
        } catch (e) {
            alert("couldnt add the amount detail")
            console.log(e)
        }
    }
    return (
        <div className="row">
            <h1>
                Housing Scheme</h1>
            <div className="col-lg-12">



                <Row>
                    <Col span={12}>
                        <h3>
                            Add Housing Scheme for this beneficiary
                        </h3>
                        <Form
                            name="basic">
                            <Form.Item rules={[
                                { required: true, message: "enter proposal number" },
                            ]}>
                                Date when the amount was recieved
                                <Input required
                                    placeholder="proposal number"
                                    onChange={(e) => {
                                        setProposalNo(e.target.value);
                                    }} />
                                {/* <DatePicker onChange={onChange} /> */}
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please deserver's name" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Deserver's name"
                                    onChange={(e) => {
                                        setDeservername(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item

                            >
                                <Input
                                    required
                                    placeholder="Enter guardian if any"
                                    onChange={(e) => {
                                        setGuardian(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please enter your Status" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Status"
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item rules={[
                                { required: true, message: "Please Enter Cnic" },
                            ]}>

                                <Input
                                    required
                                    placeholder="Enter Cnic"
                                    onChange={(e) => {
                                        setcnic(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter Cell no" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Amount donated to deserver"
                                    onChange={(e) => {
                                        setcell(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Dependents" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Balance"
                                    onChange={(e) => {
                                        setDependents(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Source of Income"
                                    onChange={(e) => {
                                        setSourceofincome(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter monthly income" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="SetMonthlyincome"
                                    onChange={(e) => {
                                        setMonthlyincome(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="address"
                                    onChange={(e) => {
                                        setaddress(e.target.value);
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Self accomodation"
                                    onChange={(e) => {
                                        setaccomodationself(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Accomodation Donated"
                                    onChange={(e) => {
                                        setaccomodationdonated(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Accomodation Rental"
                                    onChange={(e) => {
                                        setaccomodationrental(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Accomodation Rent"
                                    onChange={(e) => {
                                        setaccomodationrent(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter source of delivery" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Owner of land"
                                    onChange={(e) => {
                                        setownerofland(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter Plot dimension" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Plot dimension"
                                    onChange={(e) => {
                                        setPlotDimensions(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Estimated Cost" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Estimated Cost"
                                    onChange={(e) => {
                                        setEstimatedCost(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter Estimated Time" },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="Estimated Time"
                                    onChange={(e) => {
                                        setEstimatedTimeFrame(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter Construction Detail" },
                                ]}
                            >
                                <Input.TextArea
                                    required
                                    placeholder="Construction Detail"
                                    onChange={(e) => {
                                        setcontructionDetail(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    { required: true, message: "Please Enter Plan" },
                                ]}
                            >
                                <Input.TextArea
                                    required
                                    placeholder="Plan"
                                    onChange={(e) => {
                                        setplan(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit" onClick={sendData} >
                                    Submit
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>

                </Row>
            </div>
            <div className='col-lg-12'>
                <h1>
                    previous record
                </h1>
                <Table scroll={{ x: 1500 }} columns={columns} dataSource={data} />
            </div>

        </div >
    )
}

export default HousingScheme