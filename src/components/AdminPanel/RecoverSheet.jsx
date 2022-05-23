import React, { useState } from "react";
import {
    Table,
    Button,
    Input,
    Upload,
    Col,
    Form,
    Select,
    Row,
    DatePicker,
} from "antd";

function RecoverSheet() {
    const columns = [
        {
            title: "Date",
            dataIndex: "Date",
            key: "Date",
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            key: "Amount",
        },
        {
            title: "Balance",
            dataIndex: "Balance",
            key: "Balance",
        }
    ]
    return (
        <div style={{ height: "600px", overflow: "scroll" }}
        >RecoverSheet
            <Form>
                <Form.Item>
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="cell" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Purchase date" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Installment decided" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Total loan" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Balance" />
                </Form.Item>
                <Form.Item>
                    <DatePicker />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Enter amount for this month" />
                </Form.Item>
            </Form>
            <Table />
        </div>
    )
}

export default RecoverSheet