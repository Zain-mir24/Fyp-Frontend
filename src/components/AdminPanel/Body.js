import React, { useState, useEffect } from "react";
import RightSide from "./RightSide";
import Sidebar from "./Sidebar";
import AdminCampaign from "./adminCampaign";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import AppealedCampaigns from "./appealedCampaigns";
import AppealedLoan from "./appealedLoans";
import Email from "./Email";
import News from "./LatestNews";
import Beneficiary from "./Beneficiary";
import LoanManagement from "./LoanManagement";
import ViewDonations from "./viewDonations";
import ChildrenManagment from "./ChildrenManagment";
import MonthlySupport from "./MonthlySupport";
import SubAdmin from "./SubAdmin";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { LOGIN_USER, LOGOUT_USER } from "../../store/Actions/userAction";
import Header1 from ".././SubAdminPanel/Header1";
import MeetingScheduled from "./MeetingScheduled";
import AmountDetail from "./AmountDetail";
import HousingScheme from "./HousingScheme";
import EstimationPerfoma from "./EstimationPerfoma";
import Estimation from "./Estimation";
import { selectUser } from "../../store/reducers/User";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
  IdcardOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Body({ history, ...props }) {
  const [content, setContent] = useState("Dashboard");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user.userId);
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
    } else if (content === "SubAdmin") {
      return <SubAdmin />;
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
    }
  }

  return (
    <div className="row">
      <Header1 name={user.username} />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("home");
              }}
            >
              Super Admin panel
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
            {/* <Menu.Item
              key="10"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("approve");
              }}
            >
              Manage audit
            </Menu.Item> */}
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
              key="14"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("SubAdmin");
              }}
            >
              SubAdmin Maagment
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
              key="18"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Estimation");
              }}
            >
              Estimation performa
            </Menu.Item>
            <Menu.Item
              key="19"
              icon={<EstimationPerfoma />}
              onClick={() => {
                setContent("EstimationPerfoma");
              }}
            >
              Estimation performa
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
