import React, { useEffect, useState } from "react";
import {
    Table,
    Button,
    // Input,
    // Upload,
    // Col,
    // Form,
    // Select,
    // Row,
    // DatePicker,
} from "antd";
import axios from 'axios'
import RecoverSheet from "./RecoverSheet";
function LoanRecovery() {
    const [data, setData] = useState();
    const [content, setContent] = useState("Loan")

    const viewData = async () => {
        try {
            const res = await axios.get(
                "http://localhost:9000/admin/readBeneficiary"
            );
            setData(res.data);

            console.log(res.data, "view for amount detail");
        } catch (err) {
            console.log(err);
        }
    };
    const columns = [
        {
            title: "Beneficiary name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "View loan history",
            key: "action",
            render: (text, record) => (
                <Button onClick={() => {
                    setContent("Recovery")
                }}>
                    View Loan History
                </Button>
            ),
        },

    ]
    useEffect(() => {
        viewData();
    }, []);

    return (
        <div>
            {content == "Loan" ? <Table columns={columns} dataSource={data} /> : <RecoverSheet />}

        </div>
    )
}

export default LoanRecovery