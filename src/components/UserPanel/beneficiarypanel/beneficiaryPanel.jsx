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
} from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/User";
import { CreateContext } from "../../../contexts/Customecontexts";
import CampaignAppeal from "../campaignAppeal";
import { Redirect, withRouter } from "react-router";
import LoanAppeal from "../loanAppeal"
import "./beneficiary.css"
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
      <Layout style={{ minHeight: "100vh" , color:"green"}}>
        <Sider trigger ={null}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" >
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>{
              setContent("")
            }}>
              {user.username}
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
             Home
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
            <Menu.Item key="10" icon={<DesktopOutlined />} onClick={()=>{
              setContent("loan")
            }}>
              Appeal for loan
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User Setting">
            <Menu.Item>
               <Button >My profile</Button>
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
        <Layout className="site-layout" >
          <Header className="site-layout-background" style={{ padding: 0  }} />
           
          <Content style={{ margin: "0 16px",color:"green" }}>
            <h1>Global Reach beneficiary panel   </h1>
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
              {content == "" ? <div>{user.username} is a user</div> : null}
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

export default withRouter(connect(mapStateToProps)(Beneficiarypanel));
