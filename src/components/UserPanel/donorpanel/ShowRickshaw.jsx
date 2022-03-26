import { React, useState, useEffect } from "react";
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
import axios from "axios";
function ShowRickshaw(props) {
    const [donor, setDonor] = useState();
    const [Data, setData] = useState()
    console.log(props.donorId, "this is donor id")
    let id = props.donorId

    const viewData = async () => {
        try {
            const resp = await axios.get(
                "http://localhost:9000/admin/viewRickshawdetail/" + id
            );
            setData(resp.data)
            console.log(resp.data.cell)
            resp.data.map((i) => {
                setDonor(i.Recovery)
            })
            // console.log(resp.data[0].Recovery, "HELLOsss");
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        viewData();
    }, []);

    const columns = [
        // {
        //     title: "Donated Amount",
        //     render: (text, record) => {
        //         return (
        //             <div>
        //                 <p>{record.donatedAmount}</p>
        //             </div>
        //         );
        //     },
        // },
        // {
        //     title: "Deserver Name",
        //     dataIndex: "name",
        //     key: "name",
        //     render: (text, record) => {
        //         return (
        //             <div>
        //                 <p>{record.name}</p>
        //             </div>
        //         );
        //     },
        // },
        // {
        //     title: "Cell",
        //     render: (text, record) => {
        //         return (
        //             <div>
        //                 <p>{record.cell}</p>
        //             </div>
        //         );
        //     },
        // },
        {
            title: "Month",
            render: (text, record) => {

                return (
                    <div>
                        {record.Month}
                    </div>
                );
            },
        },
        {
            title: "amount",
            render: (text, record) => {
                return (
                    <div>
                        <p>{record.amount}</p>
                    </div>
                );
            },
        },
        {
            title: "balance",
            render: (text, record) => {
                return (
                    <div>
                        <p>{record.balance}</p>
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            <h1>
                Rickshaw donation History
            </h1>
            {/* {resp.data.map()}./ */}
            <p>
                {Data ? Data.map((i) => {
                    return (
                        <div style={{ fontSize: 20 }}>
                            Deserver Name :  {i.name}
                            <br />
                            Cell :{i.cell}
                            <br />
                            Date of Purchase:{i.DateofPurchase}
                            <br />
                            Installment Decided:{i.Installment}
                            <br />
                            Total amount donated:{i.TotalAmount}
                        </div>
                    )
                }) : null}
                {/* Deserver Name: {Data.name} */}
            </p>
            <Table columns={columns} dataSource={donor} />
        </div>
    );
}


export default ShowRickshaw