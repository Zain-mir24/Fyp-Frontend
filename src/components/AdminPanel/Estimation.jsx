import React from 'react'
import Pdf from "react-to-pdf";
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
            </div>

        </div >
    )
}

export default Estimation