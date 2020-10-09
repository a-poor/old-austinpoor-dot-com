
import React from 'react';
import 'antd/dist/antd.css';
import { 
    Typography, 
    Divider
} from 'antd';

import ProjectList from "./ProjectList.js";

const { Title, Paragraph } = Typography;


function Projects({ projData }) {
    
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
