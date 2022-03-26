import React, { useState, useEffect } from "react";
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
    Table,
} from "antd";
import RecoverSheet from "./RecoverSheet";
import axios from "axios";
const { Option } = Select;
const { TextArea } = Input;
function Rickshaw() {
    const [donor, setDonor] = useState([]);
    const [donorId, setDonorId] = useState();
    const [name, setName] = useState('')
    const [cell, setCell] = useState('')
    const [DateofPurchase, setPurchase] = useState('')
    const [Installment, setInstallment] = useState('')
    const [TotalAmount, setTotalAmount] = useState(0)
    const [Month, setMonth] = useState('')
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(0)
    const viewData = async () => {
        try {
            const resp = await axios.get("http://localhost:9000/admin/donor");
            setDonor(resp.data);

            console.log(resp.data, "HELLOsss");
        } catch (e) {
            console.log(e);
        }
    };
    function onChange(date, dateString) {
        console.log(dateString);
        setPurchase(dateString);
    }

    const postData = async () => {
        let obj = {
            Uid: donorId,
            name,
            cell,
            DateofPurchase,
            Installment,
            TotalAmount,
            Month,
            amount,
            balance
        }
        try {

            const res = await axios.post(
                "http://localhost:9000/admin/addRickshawScheme",
                obj
            );
            console.log(res, "Successfully send");
            alert(`$ \n 
                   Your form has been submitted`);
        } catch (ex) {
            alert(`$ \n 
                  Your form was not submitted`);
            console.log(ex);
        }
    }
    useEffect(() => {
        viewData();
        console.log(name, "name")
    }, []);
    function handleChange(value) {
        console.log(`selected ${value}`);
        setDonorId(value);
    }
    return (
        <div>
            <h1>
                Rickshaw recovery
            </h1>
            <Form.Item label="Select Donor">
                <Select
                    defaultValue="Select Donor"
                    style={{
                        width: 180,
                        borderRadius: "0px",
                        backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                >
                    {donor.map((item) => {
                        return <Option value={item._id}>{item.name}</Option>;
                    })}
                </Select>
            </Form.Item>{" "}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}>
                <Form.Item>
                    <Input onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder="Name" />
                </Form.Item>
                <Form.Item>
                    <Input onChange={(e) => {
                        setCell(e.target.value)
                    }} placeholder="cell" />
                </Form.Item>
                <Form.Item>
                    <DatePicker onChange={onChange} placeholder="Purchase date" />
                </Form.Item>
                <Form.Item>
                    <Input onChange={(e) => {
                        setInstallment(e.target.value)
                    }} placeholder="Installment decided" />
                </Form.Item>
                <Form.Item>
                    <Input onChange={(e) => {
                        setTotalAmount(e.target.value)
                    }} placeholder="Total amount" />
                </Form.Item>

                <Form.Item>
                    <Input onChange={(e) => {
                        setMonth(e.target.value)
                    }} placeholder="Enter the month" />
                </Form.Item>
                <Form.Item>
                    <Input onChange={(e) => {
                        setAmount(e.target.value)
                    }} placeholder="Enter amount for this month" />
                </Form.Item>
                <Form.Item>
                    <Input onChange={(e) => {
                        setBalance(e.target.value)
                    }} placeholder="Enter balance left" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => {
                            postData();
                        }}
                    >
                        Submit proposal
                    </Button>
                </Form.Item>

            </Form>

        </div >
    )
}

export default Rickshaw