import React, { useState, useContext } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { LOGIN_USER, LOGOUT_USER } from "../../../store/Actions/userAction";

import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/User";

import { CreateContext } from "../../../contexts/Customecontexts";

import { Redirect, withRouter } from "react-router";
import Campaigndonation from "./Campaigndonation";
import Chat from "./Chat"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function DonorPanel({ history, ...props }) {
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const User = useSelector(selectUser);
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
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>{
              setContent("")
            }}>
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
            <Menu.Item key="3" icon={<DesktopOutlined />} onClick={(e) => {
                setContent("Chat");
              }}>
              Chat
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              Adopt / fund Children
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
          <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Donor</Breadcrumb.Item>
              <Breadcrumb.Item>{User.username}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {content == "" ? <div>{User.username} is a user</div> : null}
              {content == "campaign" ? <Campaigndonation /> : null}
              {content == "Chat" ? <Chat />: null}
            </div>
          </Content>

      
        </Layout>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.user,
});

export default withRouter(connect(mapStateToProps)(DonorPanel));
