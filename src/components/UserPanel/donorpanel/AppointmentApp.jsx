import React, { useState, useEffect } from "react";
import { TimePicker, DatePicker, Button } from 'antd';
import { Redirect, withRouter } from "react-router";
import { connect, useDispatch, useSelector } from "react-redux";
import MaskedInput from 'antd-mask-input'
import axios from 'axios'
import { selectUser } from "../../../store/reducers/User";

function AppointmentApp(props) {
    const user = useSelector(selectUser);

    console.log(props.id)
    const ScheduleMeeting = async () => {
        await axios.request({
            baseURL: "http://localhost:9000/User",
            url: "/login",
            method: "post",
            data: {

            },
        })
    }

    return (
        <div className="row">
            <div className="col-lg-12" >
                <h3>
                    Adoption meeting for {props.name}
                </h3>
                <div>
                    <DatePicker />
                    <TimePicker use12Hours format="h:mm:ss A" />
                </div>

                <label>
                    <h4>Enter your phone number</h4>
                    <MaskedInput mask="(+92) 111-1111111" />
                </label>

            </div>
            <div className="col-lg-12">
                <Button>
                    Schedule a meeting
                </Button>
            </div>
        </div>
    );

}
const mapStateToProps = (state) => ({
    users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(AppointmentApp));
