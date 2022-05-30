import React, { useState, useContext } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { LOGIN_USER, LOGOUT_USER } from "../../../store/Actions/userAction";

import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/User";

import { CreateContext } from "../../../contexts/Customecontexts";
import PreviousRecord from "./PreviousRecord";
import { Redirect, withRouter } from "react-router";
import Campaigndonation from "./Campaigndonation";
import Chat from "./Chat";
import Orphan from "./Orphan";
import ShowDonation from "./ShowDonation";
import ShowRickshaw from "./ShowRickshaw";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function DonorPanel({ history, ...props }) {
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const User = useSelector(selectUser);
  console.log(User.userId);
  const logout = async (e) => {
    e.preventDefault();
    await dispatch(LOGOUT_USER());
  };
  function onCollapse(collapsed) {
    console.log(collapsed);
    setCollapsed({ collapsed });
  }
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => {
                setContent("");
              }}
            >
              {User.username}
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("campaign");
              }}
            >
              Campaigns
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("Chat");
              }}
            >
              Chat
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("Orphan");
              }}
            >
              Adopt / fund Children
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("Show Donations");
              }}
            >
              Show cow Donations
            </Menu.Item>
            {/* <Menu.Item
              key="7"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("Show Rickshaw");
              }}
            >
              Show Rickshaw
            </Menu.Item> */}
            <Menu.Item
              key="8"
              icon={<DesktopOutlined />}
              onClick={(e) => {
                setContent("Show Previous");
              }}
            >
              Show previous donation record
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="User Setting">
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
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {content == "" ? (
                <div>
                  <h1>{User.username} is a donor of Global Reach</h1>
                </div>
              ) : null}
              {content == "campaign" ? <Campaigndonation /> : null}
              {content == "Chat" ? <Chat donorId={User.userId} /> : null}
              {content == "Orphan" ? <Orphan /> : null}
              {content == "Show Donations" ? (
                <ShowDonation donorId={User.userId} />
              ) : null}
              {/* {content == "Show Rickshaw" ? (
                <ShowRickshaw donorId={User.userId} />
              ) : null} */}
              {content == "Show Previous" ? (
                <PreviousRecord userId={User.userId} />
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

export default withRouter(connect(mapStateToProps)(DonorPanel));
