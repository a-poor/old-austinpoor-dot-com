
import React from 'react';

import 'antd/dist/antd.css';
import { Typography, Divider, List } from 'antd';

import {
    GithubOutlined,
    LinkedinFilled,
    MediumSquareFilled,
    MailOutlined,
} from '@ant-design/icons';

// const { useState } = React;

const { Title, Text, Link, Paragraph } = Typography;


function About() {
  const contactData = [
      {icon:<GithubOutlined />,name:"GitHub",value:"a-poor",link:"https://github.com/a-poor"},
      {icon:<LinkedinFilled />,name:"LinkedIn",value:"austinpoor",link:"https://linkedin.com/in/austinpoor"},
      {icon:<MediumSquareFilled />,name:"Medium",value:"@apoor",link:"https://medium.com/@apoor"},
      {icon:<MailOutlined />,name:"Email",value:"austinpoor@gmail.com",link:"mailto:austinpoor@gmail.com"}
  ];
  return (
    <>
        <Title>About Me</Title>
        <Divider />
        <Paragraph>
            My name is Austin. I'm a Junior Data Scientist living in New York City.
        </Paragraph>
        <Paragraph>
            In 2019, I graduated from Sarah Lawrence College with a bachelor's degree in computer science, and in 2020 I completed an intensive 12-week data science bootcamp at Metis.
        </Paragraph>
        <Paragraph>
            Between Sarah Lawrence and Metis, I learned...
        </Paragraph>
        <Paragraph>
            Before Sarah Lawrence, I worked for 3 years at CHRLX, a commercial animation studio in NYC, as the Executive Creative Director's assistant. At CHRLX, I 
        </Paragraph>

        <Divider />

        <Title level={3}>Contact Me</Title>

        {/* <List
            style={{ fontSize:20 }}
            size="large"
            header={""}
            footer={""}
            bordered
            dataSource={contactData}
            renderItem={item => (
                <List.Item>
                    {item.icon} <Text strong>{item.name}:</Text> <Link href={item.link} target="_blank">{item.value}</Link>
                </List.Item>
            )}
        /> */}
        <table style={{ fontSize:20, margin:0, padding:5 }}>
            <tbody>
                {contactData.map(item => (
                    <tr>
                        <td style={{paddingRight:5}}>{item.icon}</td>
                        <td style={{padding:5}}>
                            <Text strong>{item.name}:</Text>
                        </td>
                        <td style={{padding:5}}>
                            <Link href={item.link} target="_blank">{item.value}</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  );
}

export default About;
