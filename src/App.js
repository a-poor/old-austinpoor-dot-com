import React from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, BackTop, Dropdown, Typography } from 'antd';

import { MenuOutlined } from '@ant-design/icons';

import Home from "./Home.js";
import Projects from "./Projects.js";
import BlogPosts from "./BlogPosts.js";
import About from "./About.js";

import APLogo from "./APLogo.js";

import useWindowSize from "./useWindowSize.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { useState, useEffect  } = React;
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;


const DATA_URL = "https://raw.githubusercontent.com/a-poor/austinpoor-dot-com/master/project_data.json";
// const DATA_URL = "/project_data.json";



function HeaderMenu({menuTab, setTab}) {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/projects">
          Projects
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/blog">
          Blog Posts
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/about">
          About Me
        </Link>
      </Menu.Item>
    </Menu>
  );
}


function CompactHeader({setTab, myLogo}) {
  const menu = <HeaderMenu setTab={setTab} />;
  return (
    <Header style={{ position: 'inline', zIndex: 1, width: '100%' }}>
      <div>
        { myLogo }
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

function FullHeader({setTab, myLogo}) {
  return (
    <Header style={{ position: 'inline', zIndex: 1, width: '100%' }}>
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        { myLogo }
        <Menu className="my-menu" theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/projects">
              Projects
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/blog">
              Blog Posts
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/about">
              About Me
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}


function AppOuter({ children, menuTab, setTab, myLogo }) {
  const windowSize = useWindowSize();
  const MyHeader = windowSize.width < 750 ?  CompactHeader : FullHeader;

  return (
    <>
      <MyHeader setTab={setTab} myLogo={myLogo} />

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
  const myLogo = (
    <Link to="/">
      <APLogo style={{ 
        width: "200px", 
        layout: "inline", 
        height: "40px",
        background: "rgba(255, 255, 255, 0.2)",
        margin: "12px 24px 12px 0",
        float: "left",
        borderRadius: "5px"
      }}/>
    </Link>
  );

  const [ menuTab, setTab ] = useState("home");
  const [ projData, setProjects ] = useState([]);
  useEffect(() => {
    fetch(DATA_URL)
        .then(r => r.json())
        .then(p => setProjects(p))
        .catch(err => {
          setProjects([])
          console.log("Error loading projects")
        });
    console.log("Done")
  },[]);

  return (
    <Router>
      <div className="App">
        <BackTop />
        <AppOuter myLogo={myLogo} menuTab={menuTab} setTab={setTab}>
          <Switch>
          <Route path="/about">
              {/* { setTab("about") } */}
              <About />
            </Route>
            <Route path="/blog">
             {/* { setTab("blog") } */}
              <BlogPosts />
            </Route>
            <Route path="/projects">
             {/* { setTab("projects") } */}
              <Projects projData={projData}/>
            </Route>
            <Route path="/">
              {/* { setTab("home") } */}
              <Home projData={projData}/>
            </Route>
          </Switch>
        </AppOuter>
        </div>  
    </Router>
  );
}

export default App;
