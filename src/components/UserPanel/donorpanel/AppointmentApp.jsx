import React, { useState, useEffect } from "react";
import { TimePicker, DatePicker, Button } from 'antd';
import { Redirect, withRouter } from "react-router";
import { connect, useDispatch, useSelector } from "react-redux";
import MaskedInput from 'antd-mask-input'
import axios from 'axios'
import { selectUser } from "../../../store/reducers/User";
import url from "../../../config/axios"

function AppointmentApp(props) {
    console.log(props.id, "Child ID")
    const user = useSelector(selectUser);
    const [PN, setPN] = useState("")
    const [DDate, setDate] = useState()
    const [time, setTime] = useState("")

    console.log(time)

    const ScheduleMeeting = async () => {
        try {
            await url.post(
                "/User/appointmentCreate",
                {
                    name: user.username,
                    email: user.getEmail,
                    PhoneNumber: PN,
                    SlotTime: time,
                    SlotDate: DDate,
                    childId: props.id
                },
            )
            alert(`your meeting is scheduled`)
            console.log("Meeting Scheduled")
        } catch (e) {
            console.log(e)
        }

    }
    function onChange(date, dateString) {
        console.log(dateString);
        setDate(dateString)

    }
    function ontimeChange(time, timeString) {
        console.log(timeString);
        setTime(timeString)
    }


    return (
        <div className="row">
            <div className="col-lg-12" >
                <h3>
                    Adoption meeting for {props.name}
                </h3>
                <div>
                    <DatePicker onChange={onChange} />
                    <TimePicker use12Hours format="h:mm:ss A"
                        onChange={ontimeChange} />
                </div>

                <label>
                    <h4>Enter your phone number</h4>
                    <MaskedInput mask="(+92) 111-1111111"
                        onChange={(e) => {
                            setPN(e.target.value)
                        }} />
                </label>

            </div>
            <div className="col-lg-12">
                <Button onClick={() => {
                    ScheduleMeeting()
                }}>
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
