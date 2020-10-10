import React from 'react';
import { Card, Typography, Empty, Button } from 'antd';

const { Text } = Typography; 

function ErrorCard({ title, link }) {
    return (
        <div style={{ maxWidth: "500px", textAlign: "center", margin: "auto" }}> 
            <Card bordered={false}>
                <Empty 
                    description={
                        <Text type="danger" style={{ fontSize: 20 }}>
                            { title }
                        </Text>
                    }
                > 
                    <Button type="danger" href={ link }>Go Home</Button>
                </Empty>
            </Card>
        </div>
    );
}

export default ErrorCard;
