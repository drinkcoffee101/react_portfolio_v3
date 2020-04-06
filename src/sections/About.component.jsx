import React, { Children, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';


const aboutMeText = [
    'Hi! My name is Deron Coffie. I am a full stack web developer with experience in Flask, Express JS, Node JS, MySQL, MongoDB, and React.',
    'Currently, I am working on gaining more experience with React and Python.',
    'My latest project, Kindler, is a mobile application built with the goal of providing individuals and those in relationships with the tools to empower them during the decision making process of going out on a date with someone. The app was built using React Native, Node JS, Express JS, and MongoDB.',
    'I dream of one day combining my love for art and music with my passion for coding.'
]

export const About = () => {
    return (
        <div style={{ width: '400px' }}>
            {
                Children.toArray(aboutMeText.map(text =>
                    <Fragment>
                        <Typography variant='h6'>{text}</Typography>
                        <br></br>
                    </Fragment>
                ))
            }
            <Typography variant='h6'>If I'm not coding I am probably making music! Check out my tunes on <a
                href='https://open.spotify.com/artist/4N2fjMIdgYgsbFi1Rziz4m'
                target='_blank'
                rel="noopener noreferrer">Spotify</a>.</Typography>
        </div>
    )
}
