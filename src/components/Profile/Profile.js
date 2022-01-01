import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Social from './Social'
import profileImage from '../../images/foto.jpeg'
import "./Profile.scss"

const data = [
    {
        title: 'Edad:',
        info: '32 años',
    },
    {
        title: 'Dirección:',
        info: '46500, Valencia, calle inventada, 4',
    },
    {
        title: 'Email:',
        info: 'drinarincon4@gmail.com',
    },
    {
        title: 'Telefono',
        info: '+54 9 0351 153298661',
    },
]
export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper" />
            <div className="dark" />
            <Container className="box">
                <Row className="info">
                    <Col xs={12} md={4}>
                        <Image src={profileImage} fluid />
                    </Col>
                    <Col xs={12} md={8} className="info__data">
                        <span>¡HOLA!</span>
                        <p>Drina Rincon</p>
                        <p>Frontend Developer</p>
                        <hr />
                        <div className="more-info">
                            {data.map((item, index) => (
                                <div key={index} className="item">
                                    <p>{item.title} </p>
                                    <p>{item.info}</p>
                                </div>
                            ))}                   

                        </div>
                    </Col>
                </Row>
                <Social />
            </Container>
        </div>
    )
}
