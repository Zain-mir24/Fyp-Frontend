import React, { useState, useContext } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/User";
import { Redirect, withRouter } from "react-router";

function HomePanel({ history, ...props }) {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
  
    const user = useSelector(selectUser)
    return (
        <div>
             <h1>
             {user.username}
             </ h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.user.user,
  });
  
  export default withRouter(connect(mapStateToProps)(HomePanel));
