
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
                Here's a list of some data science projects I've created. You can click a project card
                to read more or use the buttons to go to the project's page.
            </Paragraph>
            <Divider />
            <ProjectList projData={projData}/>
        </>
  );
}

export default Projects;
