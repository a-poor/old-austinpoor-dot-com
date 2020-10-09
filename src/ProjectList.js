
import React from 'react';
import 'antd/dist/antd.css';
import { 
    Typography, 
    Divider, 
    Space, 
    Row, 
    Col
} from 'antd';
import useWindowSize from './useWindowSize.js';

import LoadingCard from "./LoadingCard.js";
import ErrorCard from "./ErrorCard.js";
import ProjectCard from "./ProjectCard.js";

const { Title, Paragraph } = Typography;


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
            {projData.map((p,pi) => (
                <Row key={pi}>
                    <Col key={pi} span={24}>
                        <ProjectCard key={pi} {...p} />
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
    return (
        <>
            {newProjData.map((r,ri) => (
                <Row key={ri} style={{ width: "100%" }}>
                    { r.map((p,pi) => (
                        <Col key={pi} span={12} style={{ margin: 0, height: "100%" }}>
                            <ProjectCard key={pi} {...p} />
                        </Col>
                    )) }
                </Row>
            ))}
        </>
    );
}


function ProjectList({ projData, maxProjects=undefined }) {

    const pageSize = useWindowSize();
    const useOneCol = pageSize.width < 1000;
    const NColProjects = useOneCol ? OneColProjects : TwoColProjects;

    if (projData.length === 0) return <LoadingProjects />;
    if (projData === undefined) return <ProjectLoadError />;

    let fltrdProjects = maxProjects !== undefined ? projData.slice(0,maxProjects) : projData;

    return (
        <Space size={ 500 } style={{ width: "100%" }} direction="vertical">
            <NColProjects projData={fltrdProjects} style={{ margin: "auto", padding: "10px" }}/>
        </Space>
    );
}

export default ProjectList;
