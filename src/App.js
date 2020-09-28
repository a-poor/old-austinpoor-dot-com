import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';

import Home from "./Home.js"
import Projects from "./Projects.js"
import BlogPosts from "./BlogPosts.js"
import About from "./About.js"

const { useState } = React;

const { Header, Content, Footer } = Layout;
const { Title, Text, Link, Paragraph } = Typography;


function App() {
  const [ pageNum, setTab ] = useState("home");
  const getPage = name => {
    if (name === "home")
      return <Home/>;
    if (name === "projects") 
      return <Projects/>;
    if (name === "blog")
      return <BlogPosts/>;
    if (name === "about")
      return <About/>;
  };

  return (
    <div className="App">
      <Header style={{ position: 'inline', zIndex: 1, width: '100%' }}>
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => setTab("home")}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => setTab("projects")}>Projects</Menu.Item>
          <Menu.Item key="3" onClick={() => setTab("blog")}>Blog Posts</Menu.Item>
          <Menu.Item key="4" onClick={() => setTab("about")}>About Me</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        {/* <Title>AustinPoor.com</Title> */}
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {/* <Home /> */}
          { getPage(pageNum) }
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </div>
  );
}

export default App;
