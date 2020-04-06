import React, { Children } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import DeronCoffieResume from '../assets/images/DeronCoffieResume.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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


const contactItems = [
    {
        href: 'https://github.com/drinkcoffee101',
        linkStyle: 'github-link',
        icon: faGithub,
    },
    {
        href: 'https://www.linkedin.com/in/deron-coffie-067a3a3a/',
        linkStyle: 'linkdin-link',
        icon: faLinkedin,
    },
    {
        href: 'mailto:dcoffie92@gmail.com',
        linkStyle: 'google-link',
        icon: faGoogle,
    },
    {
        href: DeronCoffieResume,
        linkStyle: 'resume-link',
        icon: faFileDownload,
        message: '(Resume)'
    }
]

export const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4} className={classes.content}>
                {Children.toArray(contactItems.map(item =>
                    <Grid item>
                        <a
                            href={item.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                size='6x'
                                className={classes.icon}
                            />
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
