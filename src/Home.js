
import React from 'react';

import 'antd/dist/antd.css';
import { Typography, Divider, Button } from 'antd';

import ProjectList from "./ProjectList.js";

const { Title, Text, Paragraph } = Typography;


function Home({ projData=[] }) {
  return (
    <>
        <Title>Home</Title>
        <Divider />

        <Title level={3}>About Me</Title>
        <Paragraph>
            My name is Austin. I'm a Junior Data Scientist living in New York City.
        </Paragraph>
        <Button href="/about" type="primary" ghost={true} shape="round">More about me...</Button>
        <Divider />

        <Title level={3}>Projects</Title>
        <Paragraph>
            Here's a preview of some of my projects, click the "More" button below to see more.
        </Paragraph>
        <ProjectList projData={projData} maxProjects={2}/>
        <Button href="/projects" type="primary" ghost={true} shape="round">More projects...</Button>

        <Divider />
        <Title level={3}>Blog Posts</Title>
        <Paragraph>
            Check out my blog posts on Medium!
        </Paragraph>
        <Button href="https://medium.com/@apoor" type="primary" ghost={true} shape="round">Blog Posts</Button>
        
        {/* <Divider />
        <Title level={3}>Blog Posts</Title>
        <Paragraph>
            <Text mark>Blog posts placeholder...</Text>
        </Paragraph>
        <Button>More</Button> */}
    </>
  );
}

export default Home;
