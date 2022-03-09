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
    const [masoncharges, setMasoncharges] = useState(0);
    const [labourname, setlabourname] = useState(0);
    const [labourCellno, setlabourCellno] = useState(0);
    const [natureofwork, setnatureofwork] = useState(0);
    const [LabourChargesPaid, setLabourChargesPaid] = useState(0);
    const [MaterialTotal, setMaterialTotal] = useState(0);
    const [LabourTotal, setLabourTotal] = useState(0);
    const [material, setMaterial] = useState([]);
    const [count, setCount] = useState(0);

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
        setLabourTotal(LabourTotal + materialCost);
    }

    var prev = LabourTotal;
    var [check, setCheck] = useState(true);
    function calculteTotal() {
        setLabourTotal(
            parseFloat(prev) +
            parseFloat(masoncharges) +
            parseFloat(natureofwork) +
            // parseFloat(electriciancharges) +
            parseFloat(LabourChargesPaid) +
            // parseFloat(labourcharges) +
            parseFloat(MaterialTotal)
        );
        // setLabourTotal(
        //     parseFloat(prev) +
        //     parseFloat(masoncharges) +
        //     parseFloat(natureofwork) +
        //     // parseFloat(electriciancharges) +
        //     parseFloat(LabourChargesPaid) +
        //     // parseFloat(labourcharges) +
        //     parseFloat(MaterialTotal)
        // );
    }


    const { Option } = Select;

    const getData = async () => {
        // const formData = new FormData();
        // formData.append("project", project);
        // formData.append("location", location);
        // formData.append("caretaker", caretaker);
        // formData.append("cellno", cellno);
        // formData.append("Date", date);
        // formData.append("Material", JSON.stringify(material));
        // formData.append("Masoncharges", masoncharges);
        // formData.append("Labourcharges", labourcharges);
        // formData.append("natureofwork", natureofwork);
        // formData.append("LabourCharges", LabourCharges);
        // formData.append("Electriciancharges", electriciancharges);
        // formData.append("MaterialTotal", MaterialTotal);
        // formData.append("Total", total);

        const obj = {
            project: project,
            location: location,
            caretaker,
            cellno: parseFloat(cellno),
            Date: date,
            Material: material,
            Masoncharges: parseFloat(masoncharges),
            // Labourcharges: parseFloat(labourcharges),
            natureofwork: parseFloat(natureofwork),
            LabourChargesPaid: parseFloat(LabourChargesPaid),
            // Electriciancharges: parseFloat(electriciancharges),
            MaterialTotal: parseFloat(MaterialTotal),
            LabourTotal: LabourTotal,
        };

        try {
            console.log(obj, "Hello");
            const res = await axios.post(
                "http://localhost:9000/admin/addEstimation",
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
                            message: "Please enter Caretaker",
                        },
                    ]}
                >
                    <Input value={materialCost} />
                </Form.Item>
                <br />
                <div style={{ textAlign: "right" }}>
                    <button onClick={AddMaterial}>Add</button>
                </div>
                <br /> <br />
                <h4>Labour Charges</h4>
                <br />



                <div style={{ textAlign: "right" }}>
                    <p>{count}Labours  Added</p>
                </div>
                <br />
                <Form.Item
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
                            setLabourChargesPaid(e.target.value);
                        }}
                    />
                </Form.Item>

                <div style={{ textAlign: "right" }}>
                    <button onClick={calculteTotal}>Calculate Final Cost</button>
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
        </div>
    )
}
