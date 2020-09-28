
import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Divider, Card, Tag, Button, Space, Spin, Empty } from 'antd';
import useWindowSize from './useWindowSize.js';

import LoadingCard from "./LoadingCard.js";
import ErrorCard from "./ErrorCard.js";

const { useState } = React; 

const { Title, Text, Link, Paragraph, Row, Col } = Typography;

const dataUrl = "https://raw.githubusercontent.com/a-poor/austinpoor-dot-com/master/project_data.json";

function AProject({ title, description, tools_used, links }) {
    return (
        <Card style={{ width: "400px" }}>
            <Title level={4}>{title}</Title>
            {description.map(d => (<p>{d}</p>))}
            <Divider orientation="left">Tags</Divider>
            { tools_used.map(t => <Tag>{t}</Tag>) }
            <Divider orientation="left">Links</Divider>
            <Space>
                { links.map(l => (
                    <Button type="primary" href={l.link} >{l.text}</Button>
                )) }
            </Space>
        </Card>
    );
}

function LoadingProjects() {
    return (
        <LoadingCard title="Loading Projects"/>
    );
}

function ProjectLoadError() {
    return (
        <ErrorCard title="Oh no! There was an error loading projects." link="/"/>
    );
}

function OneColProjects({ projData }) {
    return (
        <>
            {projData.map(p => (
                <Row>
                    <Col span={24}>
                        <AProject {...p} />
                    </Col>
                </Row>
            ))}
        </>
    );
}

function reshapeArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0)
            newArr.push([arr[i]]);
        else
            newArr[newArr.length-1].push(arr[i]);
    }
    return newArr;
}

function TwoColProjects({ projData }) {
    const newProjData = reshapeArray(projData);
    console.log(newProjData);
    return (
        <>
            {newProjData.map(r => (
                <Row>
                    { r.map(p => (
                        <Col span={12}>
                            <AProject {...p} />
                        </Col>
                    )) }
                </Row>
            ))}
        </>
    );
}

function ProjectList({ projData }) {

    const pageSize = useWindowSize();
    const useOneCol = pageSize.width < 1000;
    console.log("Using one col? " + useOneCol);
    const NColProjects = useOneCol ? OneColProjects : TwoColProjects;

    return (
        <NColProjects projData={projData} />
    );
}


function Projects() {
    const [ projData, setProjects ] = useState("");

    fetch(dataUrl)
        .then(r => r.json())
        .then(p => setProjects(p))
        .catch(err => setProjects([]));

    if (projData === "") return <LoadingProjects />;
    if (projData.length === 0 || true) return <ProjectLoadError />;

    return (
        <>
            <Title>Projects</Title>
            <Divider />
            <Paragraph>
                Here's a list of some projects I've created...
            </Paragraph>
            <Divider />
            <ProjectList projData={projData}/>
        </>
  );
}

export default Projects;
