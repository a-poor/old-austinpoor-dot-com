import React from 'react';
import { Card, Space, Typography, Spin } from 'antd';

const { Title } = Typography; 

function LoadingProjects({ title="" }) {
    return (
        <div style={{ width: "500px", textAlign: "center", margin: "auto" }}> 
            <Card bordered={false}>
                <Space direction="vertical">
                    <Title level={4}>{ title }</Title>
                    <Spin size="large"/>
                </Space>
            </Card>
        </div>
    );
}

export default LoadingProjects;
