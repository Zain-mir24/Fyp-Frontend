import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { LOGIN_USER, LOGOUT_USER } from "../../store/Actions/userAction";
import { selectUser } from "../../store/reducers/User";
import { CreateContext } from "../../contexts/Customecontexts";
import Body from "./Body";
function Userpanel({ history, ...props }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(LOGOUT_USER());
  };
  return (
    <div>
      {user ? (
        <div>
         
          <Body />
          
          <button onClick={(e) => logout(e)}>logout</button>
         
        </div>
      ) : (
        history.push("/Signin")
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.user,
});

export default withRouter(connect(mapStateToProps, { LOGOUT_USER })(Userpanel));
