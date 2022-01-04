import React from 'react'
import { Container, Button } from 'react-bootstrap'
import CV from '../../images/cv.pdf'
import "./AboutMe.scss"

export default function AboutMe() {
    return (
        <Container className="about-me">
            <p>
                Soy Ingeniero en Sistemas apasionada por el mundo de la Programación Web Full Stack, sobre todo en el área de Frontend.
                En estos momentos, me encuentro trabajando como Software Engineer CMS Factor en Bitlogic. Mi meta es convertirme en una notable
                profesional en el área de la Programación Web Full Stack, lo más completa posible, con habilidades más allá de la aplicación 
                práctica de los conocimientos que se adquieren en la carrera. Por eso busco siempre cursos relacionados con mi carrera que me 
                ayuden a crecer profesionalmente y actualizarme con las nuevas tecnologías.
                Si hay algo que me caracteriza es mi sentido de responsabilidad, el trabajo en equipo y siempre ver el lado bueno de las cosas.
                Me involucro al 100% en todo lo que hago. Tengo un estilo de trabajo directo y creativo. Y pongo toda la energía que me aporta 
                trabajar de aquello que tanto me entusiasma.
            </p>
            <hr />

            <a href={CV} target="_blank" rel="noreferrer noopener">
                <Button primary>Descargar CV</Button>
            </a>
        </Container>
    )
}
