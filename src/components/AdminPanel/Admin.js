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
        <div>{user.getEmail == "zainmir2000j@gmail.com" ? <Body /> : history.push("/Adminlogin")}</div>
      ) : (
        history.push("/Adminlogin")
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.user.user,
});

export default withRouter(connect(mapStateToProps)(Adminn));
