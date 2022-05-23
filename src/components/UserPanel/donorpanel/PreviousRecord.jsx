import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select, Row } from "antd";

import axios from "axios";


function PreviousRecord(props) {
    const [data, setData] = useState([]);
    const [Filtered, setFiltered] = useState([])
    console.log(props.userId, "USerID")
    let id = props.userId

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:9000/admin/Donations/" + id);

            await setData(res.data);




            console.log(res.data, "TESTING");
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getData();
        // console.log(data, "HELL");
    }, []);
    const columns = [
        {
            title: "Campaign",
            dataIndex: "campaign",
            key: "campaign",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Name",
            dataIndex: "Name",
            key: "Name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Email",
            dataIndex: "Email",
            key: "Email",
        },
        {
            title: "Donation",
            dataIndex: "Donation",
            key: "Donation",
        },
    ];
    return (
        <div>
            <h1>
                Record of donations
            </h1>
            <div className="col-lg-12">
                {/* {data.map((item) => {
                    return ( */}
                <div>
                    <h3>Donations</h3>
                    <Table
                        columns={columns}
                        dataSource={data.map((item) => ({
                            campaign: item.campaignname,
                            Name: item.itemm?.userId?.name,
                            Email: item.itemm?.userId?.email,
                            Donation: item.itemm?.donation
                        }))}
                    />
                </div>



            </div>

        </div>
    )
}

export default PreviousRecord