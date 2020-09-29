
import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Divider, Card, Tag, Button, Space, Row, Col } from 'antd';
import useWindowSize from './useWindowSize.js';

import LoadingCard from "./LoadingCard.js";
import ErrorCard from "./ErrorCard.js";

const { useState, useEffect } = React; 

const { Title, Text, Link, Paragraph } = Typography;

const dataUrl = "https://raw.githubusercontent.com/a-poor/austinpoor-dot-com/master/project_data.json";

function AProject({ title, description, tools_used, links }) {
    return (
        <div style={{ margin: "auto", padding: "10px", height: "100%"  }}>
            <Card style={{ margin: "auto" }}>
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
        </div>
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
    for (let i = 0; i < arr.length; i++)
        if (i % 2 === 0)
            newArr.push([arr[i]]);
        else
            newArr[newArr.length-1].push(arr[i]);
    return newArr;
}

function TwoColProjects({ projData }) {
    const newProjData = reshapeArray(projData);
    console.log(newProjData);
    return (
        <>
            {newProjData.map(r => (
                <Row style={{ width: "100%" }}>
                    { r.map(p => (
                        <Col span={12} style={{ margin: 0, height: "100%" }}>
                            <AProject {...p} />
                        </Col>
                    )) }
                </Row>
            ))}
        </>
    );
}


function ProjectList() {

    const [ projData, setProjects ] = useState("loading");

    useEffect(() => {
        fetch(dataUrl)
            .then(r => r.json())
            .then(p => { setProjects(p) })
            .catch(err => setProjects([]));
    })

    const pageSize = useWindowSize();
    const useOneCol = pageSize.width < 1000;
    const NColProjects = useOneCol ? OneColProjects : TwoColProjects;

    if (projData === "loading") return <LoadingProjects />;
    if (projData.length === undefined) return <ProjectLoadError />;

    return (
        <Space size={ 500 } style={{ width: "100%" }} direction="vertical">
            <NColProjects projData={projData} style={{ margin: "auto", padding: "10px" }}/>
        </Space>
    );
}


function Projects() {
    
    

    return (
        <>
            <Title>Projects</Title>
            <Divider />
            <Paragraph>
                Here's a list of some projects I've created...
            </Paragraph>
            <Divider />
            <ProjectList />
        </>
  );
}

export default Projects;
