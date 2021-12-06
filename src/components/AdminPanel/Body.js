import React, { useState, useEffect } from "react";
import RightSide from "./RightSide";
import Sidebar from "./Sidebar";
import AdminCampaign from "./adminCampaign";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/User";
import { LOGIN_USER, LOGOUT_USER } from "../../store/Actions/userAction";
import { Redirect, withRouter } from "react-router";
import AppealedCampaigns from "./appealedCampaigns";
import Email from "./Email";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Body({ history, ...props }) {
  const [content, setContent] = useState("Dashboard");

  const dispatch = useDispatch();
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
    }
  }

  return (
    <div className="row">
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
              Home
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<ExclamationCircleFilled />}
              onClick={(e) => {
                setContent("appealCampaign");
              }}
            >
              Campaign Appeals
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<ExclamationCircleFilled />}
              onClick={() => {
                setContent("loan");
              }}
            >
              Loan Appeals
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Campaign");
              }}
            >
              Create campaign
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Approve");
              }}
            >
              Manage admin
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Approve");
              }}
            >
              Manage Audit
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<CheckCircleFilled />}
              onClick={() => {
                setContent("Email");
              }}
            >
              Send Email
            </Menu.Item>
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
