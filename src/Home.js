
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
        <Button>More</Button>
        <Divider />

        <Title level={3}>Projects</Title>
        <Paragraph>
            <Text mark>Projects placeholder...</Text>
        </Paragraph>
        <ProjectList projData={projData} maxProjects={2}/>
        <Button href="/projects" type="primary" ghost={true} shape="round">More Projects...</Button>

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
