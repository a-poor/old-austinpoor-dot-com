import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, BackTop, Dropdown, Typography } from 'antd';

import { MenuOutlined, CodeFilled } from '@ant-design/icons';

import Home from "./Home.js";
import Projects from "./Projects.js";
import BlogPosts from "./BlogPosts.js";
import About from "./About.js";

import APLogo from "./APLogo.js";

import useWindowSize from "./useWindowSize.js";

const { useState } = React;
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;


function HeaderMenu({setTab}) {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" onClick={() => setTab("home")}>Home</Menu.Item>
      <Menu.Item key="2" onClick={() => setTab("projects")}>Projects</Menu.Item>
      <Menu.Item key="3" onClick={() => setTab("blog")}>Blog Posts</Menu.Item>
      <Menu.Item key="4" onClick={() => setTab("about")}>About Me</Menu.Item>
    </Menu>
  );
}


function CompactHeader({setTab}) {
  const menu = <HeaderMenu setTab={setTab} />;
  return (
    <Header style={{ position: 'inline', zIndex: 1, width: '100%' }}>
      <div style={{  }}>
        {/* <div className="logo">
          <CodeFilled style={{ color:'white' }} />
        </div> */}

        <div className="my-logo">
          <CodeFilled style={{  }} />
        </div>

        <div style={{ float:'right' }}>
          <Dropdown overlay={menu} style={{ maxWidth: 1200, float:'right' }}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <MenuOutlined style={{ fontSize: 22, color: "white" }}/>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}

function FullHeader({setTab}) {
  return (
    <Header style={{ position: 'inline', zIndex: 1, width: '100%' }}>
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        {/* <div className="logo"></div> */}
        {/* <div className="logo">
          <APLogo style={{  }}/>
        </div> */}
        <APLogo style={{  }}/>
        {/* <Text size={4} style={{ color:'white', layout:'inline' }}>AustinPoor.com</Text> */}
        <Menu className="my-menu" theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => setTab("home")}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => setTab("projects")}>Projects</Menu.Item>
          <Menu.Item key="3" onClick={() => setTab("blog")}>Blog Posts</Menu.Item>
          <Menu.Item key="4" onClick={() => setTab("about")}>About Me</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}


function AppOuter({ children, setTab }) {
  const windowSize = useWindowSize();
  const MyHeader = windowSize.width < 650 ?  CompactHeader : FullHeader;

  return (
    <>
      <MyHeader setTab={setTab} />

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380, maxWidth: 1200, margin: "auto" }}>
          { children }
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Austin Poor ©2020
      </Footer>
    </>
  );
}

function App() {
  const [ pageNum, setTab ] = useState("home");
  const getPage = name => {
    if (name === "projects") 
      return <Projects/>;
    if (name === "blog")
      return <BlogPosts/>;
    if (name === "about")
      return <About/>;
    return <Home/>;
  };
  return (
    <div className="App">
      <BackTop />
      <AppOuter setTab={setTab}>
        <APLogo className="logo" style={{ width: "500px", backgroundColor: "red" }}/>
        { getPage(pageNum) }
      </AppOuter>
    </div>
  );
}

export default App;
