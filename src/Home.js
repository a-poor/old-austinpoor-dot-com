
import React from 'react';

import 'antd/dist/antd.css';
import { Typography, Divider, Button } from 'antd';

// const { useState } = React;

const { Title, Text, Link, Paragraph } = Typography;


function Home() {
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
        <Button>More</Button>
        <Divider />

        <Title level={3}>Blog Posts</Title>
        <Paragraph>
            <Text mark>Blog posts placeholder...</Text>
        </Paragraph>
        <Button>More</Button>
    </>
  );
}

export default Home;
