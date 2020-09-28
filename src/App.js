import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';

import Home from "./Home.js"
import Projects from "./Projects.js"

const { useState } = React;

const { Header, Content, Footer } = Layout;
const { Title, Text, Link, Paragraph } = Typography;


function App() {
  const allTabs = {
    "1": <Home />,
    "2": <Projects />
  };
  const [ pageTab, setTab ] = useState("");
  // const pressPage => 

  return (
    <div className="App">
      <Header style={{ position: 'inline', zIndex: 1, width: '100%' }}>
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">Blog</Menu.Item>
          <Menu.Item key="4">About</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        {/* <Title>AustinPoor.com</Title> */}
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Home />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </div>
  );
}

export default App;
