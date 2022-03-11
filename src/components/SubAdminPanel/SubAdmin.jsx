import React from "react";
import Body from "./Body";
import Header1 from "./Header1";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/User";
import { Redirect, withRouter } from "react-router";

function SubAdmin({ history, ...props }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? (
        <div>
          <Header1 name={user.username} />
          <Body />
        </div>
      ) : (
        history.push("/Adminlogin")
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(SubAdmin));
