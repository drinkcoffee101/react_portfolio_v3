import React, { Children } from 'react'
import { MainCard } from './Card.component';
import fire from '../assets/images/fire.jpg'
import spark from '../assets/images/spark.jpg'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const items = [
    {
        title: 'Kindler',
        subTitle: 'Date planning React Native app',
        imgSrc: fire,
        gitHubLink: 'https://github.com/satchelsmidt/Date_Planner',
        videoLink: 'https://www.youtube.com/watch?v=9QN2OPpL3Kc&feature=emb_title',
        selected: false
    },
    {
        title: 'SparkCourse',
        subTitle: 'Electronic music focused course builder using free resoucres found on the web',
        imgSrc: spark,
        gitHubLink: 'https://github.com/drinkcoffee101/SparkCourse',
        videoLink: 'https://www.youtube.com/watch?v=DciZfwRgUnc&feature=emb_title',
        selected: false
    },
]

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
        overflow: 'auto'
    },
    icon: {
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
}));

export const MainCarousel = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.content}>
            {Children.toArray(items.map(item =>
                <Grid item>
                    <MainCard
                        item={item}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
