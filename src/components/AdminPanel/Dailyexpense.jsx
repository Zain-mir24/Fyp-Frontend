import React, { useState, useEffect } from 'react'


import {
    Form,
    Input,
    Button,
    Dropdown,
    Menu,
    message,
    Select,
    Upload,
    Col,
    InputNumber,
    DatePicker,
    Space,
    Rate,
    Table

} from "antd";
const axios = require("axios");

export default function Dailyexpense() {
    const [project, setProject] = useState();
    const [location, setLocation] = useState();
    const [caretaker, setCaretaker] = useState();
    const [cellno, setCellno] = useState();
    const [date, setDate] = useState();
    const [materialName, setMaterialName] = useState();
    const [materialAU, setMaterialAU] = useState();
    const [materialQTY, setMaterialQTY] = useState(0);
    const [materialRate, setMaterialRate] = useState(0);
    const [materialCost, setMaterialCost] = useState(0);
    const [labourname, setlabourname] = useState(0);
    const [labourCellno, setlabourCellno] = useState(0);
    const [natureofwork, setnatureofwork] = useState(0);
    const [LabourChargesPaid, setLabourChargesPaid] = useState(0);
    const [MaterialTotal, setMaterialTotal] = useState(0);
    const [LabourTotal, setLabourTotal] = useState(0);
    const [material, setMaterial] = useState([]);
    const [LabourCharges, setLabourCharges] = useState([]);
    const [count, setCount] = useState(0);
    const [countlabour, setCountlabour] = useState(0)
    // UseState to get data from APi
    const [data, setData] = useState([])
    const [content, setContent] = useState("Daily")

    function AddMaterial() {
        setMaterial((material) => [
            ...material,
            {
                name: materialName,
                AU: materialAU,
                QTY: parseFloat(materialQTY),
                Rate: parseFloat(materialRate),
                Cost: materialCost,
            },
        ]);
        setCount(count + 1);
        setMaterialTotal(MaterialTotal + materialCost);

    }
    function AddLabour() {
        setLabourCharges((material) => [
            ...material,
            {
                labourname: labourname,
                labourCellno: labourCellno,
                natureofwork: natureofwork,
                LabourChargesPaid: LabourChargesPaid
            },
        ]);
        setCountlabour(countlabour + 1);
        setLabourTotal(parseFloat(LabourTotal) + parseFloat(LabourChargesPaid));
    }

    const viewData = async () => {
        try {
            const res = await axios.get("http://localhost:9000/admin/viewExpense");
            await setData(res.data)
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const columns = [
        {
            title: "Project",
            dataIndex: "project",
            key: "project",
            render: (text) => <a>{text}</a>,
        },

        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Caretaker",
            dataIndex: "caretaker",
            key: "caretaker",

        }, {
            title: "cellno",
            dataIndex: "cellno",
            key: "cellno",

        },
        {
            title: "Material",
            dataIndex: "Material",
            key: "Material",
            render: (material) => material.map(materials => {
                return (
                    <div>
                        name {materials.name}<br />
                        Quantitiy {materials.QTY}<br />
                        Rate {materials.Rate}<br />
                        Cost {materials.Cost}
                    </div>
                )
            })
        }, {
            title: "Labour",
            dataIndex: "LabourCharges",
            key: "LabourCharges",
            render: (Labour) => Labour.map(Labours => {
                return (
                    <div>
                        name   <b>{Labours.labourname}</b><br />
                        Cell no   <b>{Labours.labourCellno}</b><br />
                        Nature of work    <b>{Labours.natureofwork}</b><br />
                        Charges   <b>{Labours.LabourChargesPaid}</b>
                    </div>
                )
            })
        },
        {
            title: "Materialtotal",
            dataIndex: "MaterialTotal",
            key: "MaterialTotal",

        }, {
            title: "LabourTotal",
            dataIndex: "LabourTotal",
            key: "labourTotal",

        },
    ];

    const { Option } = Select;

    const getData = async () => {
        const obj = {
            project: project,
            location: location,
            caretaker,
            cellno: parseFloat(cellno),
            Date: date,
            Material: material,
            LabourCharges: LabourCharges,
            MaterialTotal: parseFloat(MaterialTotal),
            LabourTotal: parseFloat(LabourTotal),
        };

        try {
            console.log(obj, "Hello");
            const res = await axios.post(
                "http://localhost:9000/admin/addExpense",
                obj
            );
            console.log(res, "Successfully send");
            alert(`$ \n 
           Your form has been submitted`);
        } catch (ex) {
            alert(`$ \n Your form was not submitted`);
            console.log(ex);
        }
    };
    useEffect(() => {
        viewData()
    }, [])
    function costChangeQTY(e) {
        setMaterialQTY(parseFloat(e.target.value));
        setMaterialCost(materialRate * e.target.value);
    }
    function costChangeRate(e) {
        setMaterialRate(parseFloat(e.target.value));
        setMaterialCost(e.target.value * materialQTY);
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                {" "}
                <h1>Expense Sheet</h1>
            </div>
            <br />
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="username"
                    label="Project: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter your Project Name",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setProject(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Location"
                    label="Location: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter your Location",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Caretaker"
                    label="Caretaker: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Caretaker",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setCaretaker(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Cellno"
                    label="Cellno: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Cell Number",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setCellno(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Date"
                    label="Date: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Caretaker",
                        },
                    ]}
                >
                    <DatePicker
                        onChange={(date, dateString) => {
                            setDate(dateString);
                        }}
                    />
                </Form.Item>
                <br />
                <h4>Material Charges</h4>
                <div style={{ textAlign: "right" }}>
                    <p>{count} Materials Added</p>
                </div>
                <br />
                <Form.Item
                    name="Name"
                    label="Name: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Material Name",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setMaterialName(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="AU"
                    label="AU: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Material AU",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setMaterialAU(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="QTY"
                    label="QTY: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter QTY",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            costChangeQTY(e);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Rate"
                    label="Rate: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Caretaker",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            costChangeRate(e);
                        }}
                    />
                </Form.Item>
                <Form.Item

                    label="Cost: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Cost",
                        },
                    ]}
                >
                    <Input value={materialCost} />
                </Form.Item>
                <br />
                <div style={{ textAlign: "right" }}>
                    <button onClick={AddMaterial}>Add Material</button>
                </div>
                <br /> <br />
                <h4>Labour Charges</h4>
                <br />



                <div style={{ textAlign: "right" }}>
                    <p>{countlabour} Labours  Added</p>
                </div>
                <br />
                <Form.Item
                    name="Labourname"
                    label="labourname "
                    rules={[
                        {
                            required: true,
                            message: "Please enter name of the labour",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setlabourname(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Labour cell no"
                    label="Labour Cell no: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter your Labour cell",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setlabourCellno(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Nature of work"
                    label="Nature of work "
                    rules={[
                        {
                            required: true,
                            message: "Please enter nature of work",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setnatureofwork(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Labour Charges paid"
                    label="  Labour Charges Paid "
                    rules={[
                        {
                            required: true,
                            message: "Please enter Labour Charges",
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => {
                            setLabourChargesPaid(e.target.value)
                        }}
                    />
                </Form.Item>
                <div style={{ textAlign: "right" }}>
                    <button onClick={AddLabour}>Add Labour</button>
                    <br /> <br />
                </div>

                <Form.Item
                    label="Materail Total: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter your Painter Charges",
                        },
                    ]}
                >
                    <Input
                        value={MaterialTotal}
                    />
                </Form.Item>
                <Form.Item
                    label="Labour Total: "
                    rules={[
                        {
                            required: true,
                            message: "Please enter your Total",
                        },
                    ]}
                >
                    <Input value={LabourTotal} />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={() => {
                            getData();
                        }}
                    >
                        Submit proposal
                    </Button>
                </Form.Item>
            </Form>
            <Table scroll={{ x: 1500 }} columns={columns} dataSource={data} />

        </div>
    )
}
