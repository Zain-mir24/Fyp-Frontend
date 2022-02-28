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
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { LOGIN_USER, LOGOUT_USER } from "../../store/Actions/userAction";
import { selectUser } from "../../store/reducers/User";
import "./Body.css"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
  IdcardOutlined ,
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
    } else if (content === "User") {
      return <Beneficiary />;
    } else if (content === "appealLoan") {
      return <AppealedLoan />;
    }else if (content === "LoanManagment") {
      return <LoanManagement />;
    }else if (content === "AdoptChildren") {
      return <ChildrenManagment />;
    }else if (content === "Donations") {
      return <ViewDonations />;
    }
  }

  return (
    <div className="row">
      <Layout  style={{ minHeight: "100vh",backgroundColor:"green" }}>
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
                setContent("Approve");
              }}
            >
              Beneficiary
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("approve");
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
              key="13"
              icon={<MoneyCollectOutlined />}
              onClick={() => {
                setContent("Donations");
              }}
            >
              Campaign Report
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
  users: state.user.user,
});

export default withRouter(connect(mapStateToProps)(Body));