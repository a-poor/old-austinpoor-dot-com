import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { 
    Typography, 
    Divider, 
    Card, 
    Tag, 
    Button, 
    Space,
    Modal
} from 'antd';

const { Title, Paragraph } = Typography;


function ProjectCard({ title, description, tools_used, links }) {
    const [ projOpen, setProjOpen ] = useState(false);
    return (
        <div style={{ margin: "auto", padding: "10px", height: "100%"  }}>
            <Card style={{ margin: "auto" }} onClick={() => setProjOpen(true)}>
                <Title level={4}>{title}</Title>
                <Paragraph ellipsis>{ description.join(" ") }</Paragraph>
                <Divider style={{ color: "#a0a0a0" }} orientation="left">Tags</Divider>
                { tools_used.map((t,ti) => <Tag key={ti}>{t}</Tag>) }
                <Divider style={{ color: "#a0a0a0" }} orientation="left">Links</Divider>
                <Space>
                    { links.map((l,li) => (
                        <Button key={li}type="primary" href={l.link} >{l.text}</Button>
                    )) }
                </Space>
            </Card>
            <ProjectModal {...{title, description, tools_used, links, projOpen, setProjOpen}} />
        </div>
    );
}

function ProjectModal({ title, description, tools_used, links, projOpen, setProjOpen }) {
    return (
        <Modal
            title={title}
            visible={projOpen}
            onOk={() => setProjOpen(false)}
            onCancel={() => setProjOpen(false)}
        >
            { description.map((d,di) => (<Paragraph key={di}>{ d }</Paragraph>) }
            <Divider style={{ color: "#a0a0a0" }} orientation="left">Tags</Divider>
            { tools_used.map((t,ti) => <Tag key={ti}>{t}</Tag>) }
            <Divider style={{ color: "#a0a0a0" }} orientation="left">Links</Divider>
            <Space>
                { links.map((l,li) => (
                    <Button key={li}type="primary" href={l.link} >{l.text}</Button>
                )) }
            </Space>
        </Modal>
    );
}

export default ProjectCard;
