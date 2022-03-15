import React from 'react'
import Pdf from "react-to-pdf";
import { Table, Button, Input, Upload, Col, Form, Select, Row, DatePicker } from "antd";

const ref = React.createRef();

function Estimation() {

    return (
        <div style={{
            fontFamily: "sans-serif",
            textAlign: " center"
        }
        }>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1 style={{ backgroundColor: "Orange" }}>Hello CodeSandbox</h1>
                <h2 style={{ fontSize: 20 }}>Start editing to see some magic happen!</h2>
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
                                        // setProposalNo(e.target.value);
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
                                        // setDeservername(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item

                            >
                                <Input
                                    required
                                    placeholder="Enter guardian if any"
                                    onChange={(e) => {
                                        // setGuardian(e.target.value);
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
                                        // setStatus(e.target.value);
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
                                        // setcnic(e.target.value);
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
                                        // setcell(e.target.value);
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
                                        // setDependents(e.target.value);
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
                                        // setSourceofincome(e.target.value); 
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
                                        // setMonthlyincome(e.target.value);
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
                                        // setaddress(e.target.value);
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
                                        // setaccomodationself(e.target.value);
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
                                        // setaccomodationdonated(e.target.value);
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
                                        // setaccomodationrental(e.target.value);
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
                                        // setaccomodationrent(e.target.value);
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
                                        // setownerofland(e.target.value);
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
                                        // setPlotDimensions(e.target.value);
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
                                        // setEstimatedCost(e.target.value);
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
                                        // setEstimatedTimeFrame(e.target.value);
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
                                        // setcontructionDetail(e.target.value);
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
                                        // setplan(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit"  >
                                    Submit
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>


                </Row>

            </div>

        </div >
    )
}

export default Estimation