import React from 'react'
import {Container} from 'react-bootstrap'
import BasicLayout from '../layouts/BasicLayout';
import ListSkills from '../components/ListSkills'
import "./skills.scss";

const skills = [
    {type: "Java", level: 85},
    {type: "Javascript", level: 75},
]

export default function Skills() {
    return (
        <BasicLayout menuColor="#000">
            <Container className="skills">
                <div className="skills__block">
                    <h2>Frontend</h2>
                    <ListSkills skills={skills}/>
                </div>
            </Container>
        </BasicLayout>
    )
}

