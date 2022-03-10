import React from 'react'
import Pdf from "react-to-pdf";
const ref = React.createRef();

function HousingSchemePDF(props) {

    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>


                <h1>
                    GlobalReach
                </h1>
                {props.name} <br />
                {props.Guardian}<br />
                {props.SOI} <br />
                {props.EC} <br />
                {props.ETF}<br />
                {props.cnic}

                HousingSchemePDF
            </div>
        </div>
    )
}

export default HousingSchemePDF