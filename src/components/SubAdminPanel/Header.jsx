import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className="container-fluid">
    <div className="row header ">
      <div className="col-lg-6  leftHeading">Global reach</div>
      <div className="col-lg-6">
        <div className="  rightHeading">
          Zainmir <img className="rectangle" src={"./myimage.jpg"} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header