import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../store/reducers/User";

import Body from "./Body";

function Adminn({ history, ...props }) {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <div style={{ height: "auto" }}><Body /> </div>
      ) : (
        history.push("/Adminlogin")
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(Adminn));
