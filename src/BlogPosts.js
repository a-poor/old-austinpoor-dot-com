
import React from 'react';

import 'antd/dist/antd.css';
import { Typography, Divider, Card, Space, Spin } from 'antd';

// const { useState } = React;

const { Title, Text, Link, Paragraph } = Typography;

function LoadingBlogPosts() {
    return (
        <div style={{ width: "500px", textAlign: "center", margin: "auto" }}> 
            <Card bordered={false}>
                <Space direction="vertical">
                    <Title level={4}>Loading Blog Posts</Title>
                    <Spin size="large"/>
                </Space>
            </Card>
        </div>
    );
}

function BlogPosts() {
  return (
    <>
        <Title>Blog Posts</Title>
        <Divider />
        {/* <LoadingBlogPosts /> */}
        <Paragraph>
            You can check out my blog posts <Link href="https://medium.com/@apoor">here</Link>!
        </Paragraph>
    </>
  );
}

export default BlogPosts;
