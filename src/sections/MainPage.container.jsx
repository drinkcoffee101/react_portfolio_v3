import React, { Children } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { Circle } from '../components/Circle.component'
import { About } from './About.component'
import { Contact } from './Contact.component'
import { MainCarousel } from '../components/Carousel.component'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        backgroundColor: '#A2AF9F',

    },
    centeringBox: {
        backgroundColor: '#A2AF9F',
        width: '100%',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',

    },
    mainGrid: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
        mainGrid: {
            flexDirection: 'column'
        }
    },
    icon: {
        fontSize: '5em',
        color: '#A2AF9F',
        transitionProperty: 'opacity',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        '&:hover': {
            opacity: '0.8',
            transitionProperty: 'opacity',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',
        }
    }
}))



export default function MainPage() {

    const classes = useStyles()

    const pages = [
        {
            icon: <AccountCircleOutlinedIcon className={classes.icon} />,
            content: <About />
        },
        {
            icon: <DashboardOutlinedIcon className={classes.icon} />,
            content: <MainCarousel />
        },
        {
            icon: <RecordVoiceOverOutlinedIcon className={classes.icon} />,
            content: <Contact />
        }
    ]



    return (
        <div className={classes.root}>
            <Box className={classes.centeringBox}>
                <Grid
                    container
                    className={classes.mainGrid}
                >
                    {Children.toArray(pages.map(({icon, content}) => (
                        <Circle icon={icon} content={content} />
                    )))}
                </Grid>
            </Box>
        </div>
    )
}
