import React, { useState, useEffect } from "react";
import RightSide from "../AdminPanel/RightSide";
import Sidebar from "../AdminPanel/Sidebar";
import AdminCampaign from "../AdminPanel/adminCampaign";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import AppealedCampaigns from "../AdminPanel/appealedCampaigns";
import AppealedLoan from "../AdminPanel/appealedLoans";
import Email from "../AdminPanel/Email";
import News from "../AdminPanel/LatestNews";
import Beneficiary from "../AdminPanel/Beneficiary";
import LoanManagement from "../AdminPanel/LoanManagement";
import ViewDonations from "../AdminPanel/viewDonations";
import ChildrenManagment from "../AdminPanel/ChildrenManagment";
import Dailyexpense from "../AdminPanel/Dailyexpense";
import EstimationPerfoma from "../AdminPanel/EstimationPerfoma";
import Estimation from "../AdminPanel/Estimation";
import MeetingScheduled from "../AdminPanel/MeetingScheduled";
import AmountDetail from "../AdminPanel/AmountDetail";
import LoanRecovery from "../AdminPanel/LoanRecovery";
import MonthlySupport from "../AdminPanel/MonthlySupport";
import HousingScheme from "../AdminPanel/HousingScheme";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { LOGIN_USER, LOGOUT_USER } from "../../store/Actions/userAction";
import { selectUser } from "../../store/reducers/User";
import Audit from "./Audit";
import "./Body.css"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
  IdcardOutlined,
  MoneyCollectOutlined

} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Body({ history, ...props }) {
  const [content, setContent] = useState("Dashboard");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(LOGOUT_USER());
  };
  function displayComponent() {
    if (content === "Dashboard") {
      return <RightSide />;
    } else if (content === "Campaign") {
      return <AdminCampaign />;
    } else if (content === "appealCampaign") {
      return <AppealedCampaigns />;
    } else if (content === "Email") {
      return <Email />;
    } else if (content === "News") {
      return <News />;
    } else if (content === "User  ") {
      return <Beneficiary />;
    } else if (content === "appealLoan") {
      return <AppealedLoan />;
    } else if (content === "LoanManagment") {
      return <LoanManagement />;
    } else if (content === "AdoptChildren") {
      return <ChildrenManagment />;
    } else if (content === "Donations") {
      return <ViewDonations />;
    } else if (content === "Meeting") {
      return <MeetingScheduled />;
    } else if (content === "Monthly Support") {
      return <MonthlySupport />;
    } else if (content === "Amountdetail") {
      return <AmountDetail />;
    } else if (content === "Housingscheme") {
      return <HousingScheme />;
    } else if (content === "EstimationPerfoma") {
      return <EstimationPerfoma />;
    } else if (content === "Estimation") {
      return <Estimation />;
    } else if (content === "Daily") {
      return <Dailyexpense />
    } else if (content === "LoanRecovery") {
      return <LoanRecovery />
    } else if (content === "Audit") {
      return <Audit />
    }
  }

  return (
    <div className="row">
      <Layout style={{ minHeight: "100vh", backgroundColor: "green" }}>
        <Sider trigger={null}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}

            >
              SubAdmin Panel
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<UserOutlined />}
              onClick={(e) => {
                setContent("User");
              }}
            >
              Users
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Campaign");
              }}
            >
              Campaign Management
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("News");
              }}
            >
              Manage Latest News
            </Menu.Item>

            <Menu.Item
              key="6"
              icon={<ExclamationCircleFilled />}
              onClick={() => {
                setContent("appealLoan");
              }}
            >
              Loan appeals
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<ExclamationCircleFilled />}
              onClick={(e) => {
                setContent("appealCampaign");
              }}
            >
              Appealed Campaigns
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<IdcardOutlined />}
              onClick={() => {
                setContent("Email");
              }}
            >
              Send Email
            </Menu.Item>
            <Menu.Item
              key="9"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Meeting");
              }}
            >
              Scheduled Meetings
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Audit");
              }}
            >
              Manage audit
            </Menu.Item>
            <Menu.Item
              key="11"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("LoanManagment");
              }}
            >
              Loan Managment
            </Menu.Item>
            <Menu.Item
              key="12"
              icon={<TeamOutlined />}
              onClick={() => {
                setContent("AdoptChildren");
              }}
            >
              Adopting Children
            </Menu.Item>

            <Menu.Item
              key="13"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Donations");
              }}
            >
              View Donations
            </Menu.Item>

            <Menu.Item
              key="15"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Monthly Support");
              }}
            >
              Monthly Support
            </Menu.Item>
            <Menu.Item
              key="16"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Amountdetail");
              }}
            >
              Support amount detail
            </Menu.Item>
            <Menu.Item
              key="17"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Housingscheme");
              }}
            >
              Housing Scheme
            </Menu.Item>

            <Menu.Item
              key="19"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("EstimationPerfoma");
              }}
            >
              Estimation
            </Menu.Item>
            <Menu.Item
              key="20"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Daily");
              }}
            >
              Daily expense Sheet
            </Menu.Item>
            <Menu.Item
              key="21"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("LoanRecovery");
              }}
            >
              Loan Recovery
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User Setting">
              <Menu.Item>
                <Button onClick={(e) => logout(e)}>logout</Button>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header class=" realHeader" style={{ padding: 0 }} />

          <Content style={{ margin: "0 16px", color: "green" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {displayComponent()}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

const styles = {
  text: {
    paddingLeft: "10px",
    borderBottom: "0.5px solid white",
  },
};
const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(Body));
// for (let i = 0; i < res.data.view.length; i++) {
            //     for (let j = 0; j < res.data.view[i].subAdmins.length; j++) {
            //         if (user.userId === res.data.view[i].subAdmins[j]?.Sid?._id || user.userId === res.data.view[i].subAdmins[j]?.Sid2?._id || user.userId === res.data.view[i].subAdmins[j]?.Sid3?._id) {
            //             console.log(res.data.view[i]._id, "we are here")

            //             obj = {
            //                 _id: res.data.view[i]._id, auditTeamname: res.data.view[i].auditTeamname, Member1: res.data.view[i]?.subAdmins[j]?.Sid?.name, Member2: res.data.view[i].subAdmins[j]?.Sid2?.name, Member3: res.data.view[i].subAdmins[j]?.Sid3?.name,
            //                 email1: res.data.view[i].subAdmins[j]?.Sid?.email, email2: res.data.view[i].subAdmins[j]?.Sid2?.email, email3: res.data.view[i].subAdmins[j]?.Sid3?.email, campaignname: res.data.view[i].Cid.name
            //             }

            //         }


            //     }
            // }
            // console.log(obj)
            // setAuditTeams(obj)