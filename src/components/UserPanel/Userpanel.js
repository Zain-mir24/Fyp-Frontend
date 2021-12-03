import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { LOGIN_USER, LOGOUT_USER } from "../../store/Actions/userAction";
import { selectUser } from "../../store/reducers/User";
import { CreateContext } from "../../contexts/Customecontexts";
import BeneficiaryPanel from "./beneficiarypanel/beneficiaryPanel";
import DonorPanel from "./donorPanel";
function Userpanel({ history, ...props }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <div>
          {user.userType == "beneficiary" ? (
            <BeneficiaryPanel />
          ) : (
            <DonorPanel />
          )}
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
