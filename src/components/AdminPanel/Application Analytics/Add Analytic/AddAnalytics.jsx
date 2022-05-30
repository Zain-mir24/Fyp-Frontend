import React, { useState } from 'react'
import {
    Select, Input, Button,
    InputNumber,
} from 'antd';
import url from "../../../../config/axios";

const { Option } = Select;

const axios = require("axios");

function AddAnalytics() {
    const [Month, setMonth] = useState("")
    const [City, setCity] = useState("")
    const [Donation, setDonation] = useState(0)
    const [donation2, setDonation2] = useState(0)
    function handleChange(value) {
        console.log(value)
        setMonth(value)
    } function handleChange2(value) {
        console.log(value)
        setCity(value)
    }
    const sendMonthly = async () => {
        try {
            const res = await url.post(
                "/admin/Monthlydonation",
                {
                    Month: Month,
                    Donation: Donation
                }
            );
            if (res) {
                alert(`City donation is added`)
            }
        } catch (e) {
            alert(e)
            console.log(e)
        }

    }
    const sendCity = async () => {
        try {
            const res = await url.post(
                "/admin/Citydonation",
                {
                    City: City,
                    Donation: donation2
                }

            );
            if (res) {
                alert(`City donation is added`)
            }
        } catch (e) {
            alert(e)
            console.log(e)
        }
    }
    return (
        <div>
            <h1>
                Add data for Month donations
            </h1>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>
                        Select month
                    </h2>
                    <Select defaultValue="Select Month" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="Jan">Jan</Option>
                        <Option value="Feb">Feb</Option>
                        <Option value="March">March</Option>
                        <Option value="April">April</Option>
                        <Option value="May">May</Option>
                        <Option value="June">June</Option>
                        <Option value="July">July</Option>
                        <Option value="August">August</Option>
                        <Option value="September">September</Option>
                        <Option value="October">October</Option>
                        <Option value="November">November</Option>
                        <Option value="December">December</Option>
                    </Select>


                </div>
                <div className='col-lg-6'>
                    <h2>
                        Select donation amount for that month
                    </h2>
                    <InputNumber
                        formatter={(value) =>
                            ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                        required
                        placeholder="Enter Donation Data"
                        onChange={(e) => {
                            setDonation(e);
                        }}
                    />
                </div>
                <div className='col-lg-6'>
                    <Button
                        onClick={() => {
                            sendMonthly()
                        }}
                    >
                        Add monthly donation
                    </Button>
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>
                        Select City
                    </h2>
                    <Select defaultValue="Select a City" style={{ width: 120 }} onChange={handleChange2}>
                        <Option value="Islamabad">Islamabad</Option>
                        <Option value="Karachi">Karachi</Option>
                        <Option value="Peshawar">Peshawar</Option>
                        <Option value="Lahore">Lahore</Option>
                        <Option value="Multan">Multan</Option>
                        <Option value="Faisalabad">Faisalabad</Option>
                        <Option value="Jhelum">Jhelum</Option>
                    </Select>

                </div>
                <div className='col-lg-6'>
                    <h2>
                        Select donation amount for City
                    </h2>
                    <InputNumber
                        formatter={(value) =>
                            ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                        required
                        placeholder="Enter Donation Data"
                        onChange={(e) => {
                            setDonation2(e);
                        }}
                    />
                </div>
                <div className='col-lg-6'>
                    <Button
                        onClick={() => {
                            sendCity()
                        }}
                    >
                        Add City donation
                    </Button>
                </div>

            </div>


        </div>
    )
}

export default AddAnalytics