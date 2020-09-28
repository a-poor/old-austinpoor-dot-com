
import React from 'react';

import 'antd/dist/antd.css';
import { Typography, Divider, Card, Tag } from 'antd';

const { useState } = React; 

const { Title, Text, Link, Paragraph } = Typography;

const dataUrl = "https://raw.githubusercontent.com/a-poor/austinpoor-dot-com/master/project_data.json";

function AProject({title,description,tools_used,links}) {
    return (
        <Card title={"" /*title*/} style={{width:"400px"}}>
            <Title level={4}>{title}</Title>
            {description.map(d => (<p>{d}</p>))}
            <Divider orientation="left">Tags</Divider>
            { tools_used.map(t => <Tag>{t}</Tag>) }
            <Divider orientation="left">Links</Divider>
            { links.map(l => <Tag><a href={l.link} >{l.text}</a></Tag>) }
        </Card>
    );
}

function LoadingProjects() {
    return <Text mark>Loading...</Text>;
}

function ProjectLoadError() {
    return <Text mark>Error loading projects, sorry!</Text>;
}

function ProjectList() {
    const [ projData, setProjects ] = useState(undefined);

    fetch(dataUrl)
        .then(r => r.json())
        .then(p => setProjects(p))
        .catch(err => setProjects([]));

    if (projData === undefined) return <LoadingProjects />;
    if (projData.length === 0) return <ProjectLoadError />;

    return (
        <>
            {projData.map(p => (<AProject {...p} />))}
        </>
    );
}


function Projects() {
  return (
    <>
        <Title>Projects</Title>
        <Divider />
        <ProjectList />
    </>
  );
}

export default Projects;
