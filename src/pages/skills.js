import React from 'react'
import {Container} from 'react-bootstrap'
import BasicLayout from '../layouts/BasicLayout';
import ListSkills from '../components/ListSkills'
import {frontendSkills, frontendSkillsColors} from '../utils/skills'
import "./skills.scss";

export default function Skills() {
    return (
        <BasicLayout menuColor="#000">
            <Container className="skills">
                <div className="skills__block">
                    <h2>Frontend</h2>
                    <ListSkills skills={frontendSkills} colors={frontendSkillsColors}/>
                </div>
            </Container>
        </BasicLayout>
    )
}

