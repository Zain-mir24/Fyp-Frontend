import React, { useState, useContext } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { LOGIN_USER, LOGOUT_USER } from "../../../store/Actions/userAction";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/User";
import { CreateContext } from "../../../contexts/Customecontexts";
import CampaignAppeal from "./campaignAppeal";
import HomePanel from "./homePanel";
import { Redirect, withRouter } from "react-router";
import LoanAppeal from "./loanAppeal";
import Approvecampaigns from "./approvCampaigns";
import MonthlySupport from "./MonthlySupport";
import HouseAppeal from "./HouseAppeal";
import ActiveCampaign from "./ActiveCampaign";
import Amountmanagement from "./Amountmanagement";
import "./beneficiary.css";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Beneficiarypanel({ history, ...props }) {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const logout = async (e) => {
    e.preventDefault();
    await dispatch(LOGOUT_USER());
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => {
                setContent("");
              }}
            >
              {user.username}
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("home");
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              Loan status
            </Menu.Item>

            <Menu.Item
              key="9"
              icon={<ExclamationCircleFilled />}
              onClick={(e) => {
                setContent("campaign");
              }}
            >
              Appeal for campaign
            </Menu.Item>
            <Menu.Item
              key="22"
              icon={<ExclamationCircleFilled />}
              onClick={(e) => {
                setContent("ActiveCampaign");
              }}
            >
              Active Campaign
            </Menu.Item>

            <Menu.Item
              key="10"
              icon={<ExclamationCircleFilled />}
              onClick={() => {
                setContent("loan");
              }}
            >
              Appeal for loan
            </Menu.Item>
            <Menu.Item
              key="11"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Monthly Support");
              }}
            >
              Monthly Support
            </Menu.Item>
            <Menu.Item
              key="12"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("House Appeal");
              }}
            >
              House Appeal
            </Menu.Item>
            <Menu.Item
              key="13"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("LoanManagement");
              }}
            >
              Loan Management
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User Setting">
              <Menu.Item>
                <Button>My profile</Button>
              </Menu.Item>
              <Menu.Item key="5">
                <Button
                  onClick={(e) => {
                    history.push("/changePassword");
                  }}
                >
                  Changepassword
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button onClick={(e) => logout(e)}>logout</Button>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header class=" realHeader" style={{ padding: 0 }} />

          <Content style={{ margin: "0 16px", color: "green" }}>
            <h1>Global Reach </h1>

            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Beneficiary</Breadcrumb.Item>
              <Breadcrumb.Item>{user.username}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {content == "campaign" ? <CampaignAppeal /> : null}
              {content == "loan" ? <LoanAppeal /> : null}
              {content == "home" ? <HomePanel /> : null}
              {content == "Approve" ? <Approvecampaigns /> : null}
              {content == "Monthly Support" ? <MonthlySupport /> : null}
              {content == "House Appeal" ? <HouseAppeal /> : null}
              {content == "ActiveCampaign" ? <ActiveCampaign /> : null}
              {content == "LoanManagement" ? (
                <Amountmanagement bid={user.userId} />
              ) : null}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});
export default withRouter(connect(mapStateToProps)(Beneficiarypanel));
