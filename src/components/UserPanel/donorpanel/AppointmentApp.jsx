import React, { useState, useEffect } from "react";
import { TimePicker, DatePicker } from 'antd';
function AppointmentApp() {

    return (
        <div>
            <DatePicker />
            <TimePicker use12Hours format="h:mm:ss A" />
        </div>
    );

}
export default AppointmentApp;