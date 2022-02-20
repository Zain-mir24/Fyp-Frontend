import React from 'react'
import "./Header.css"
function Header1(props) {
  return (
    <div className="container-fluid">
    <div className="row header ">
      <div className="col-lg-6  leftHeading">Global reach</div>
      <div className="col-lg-6">
        <div className="  rightHeading">
          {props.name} <img className="rectangle" src={"./myimage.jpg"} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header1