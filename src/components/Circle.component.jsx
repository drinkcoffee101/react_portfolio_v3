import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { SimpleModal } from './SimpleModal.component'


const useStyles = makeStyles((theme) => ({
    mainItem: {
        height: '400px',
        width: '400px',
        backgroundColor: '#A2AF9F',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',

    },
    dot: {
        height: '350px',
        width: '350px',
        backgroundColor: '#A4F895',
        borderRadius: '50%',
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        // eslint-disable-next-line
        display: 'flex',
        transitionProperty: 'box-shadow height width',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        boxShadow: '5px 5px 20px #00C2FF, -5px -5px 20px #FF8399',
        '&:hover': {
            boxShadow: '5px 5px 11px #FF8399, -5px -5px 20px #00C2FF',
            transitionProperty: 'box-shadow height width',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',
            height: '375px',
            width: '375px',
        }
    },
    secondDot: {
        height: '75%',
        width: '75%',
        backgroundColor: '#A4F895',
        borderRadius: '50%',
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        // eslint-disable-next-line
        display: 'flex',
        transitionProperty: 'box-shadow height width',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        boxShadow: '13px 13px 20px #FF8399, -13px -13px 20px #00C2FF',
        '&:hover': {
            boxShadow: '13px 13px 20px #00C2FF, -13px -13px 20px #FF8399',
            transitionProperty: 'box-shadow height width',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',
            height: '70%',
            width: '70%',
        }
    },
    thirdDot: {
        height: '50%',
        width: '50%',
        backgroundColor: '#A4F895',
        borderRadius: '50%',
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        // eslint-disable-next-line
        display: 'flex',
        transitionProperty: 'box-shadow height width',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        boxShadow: '13px 13px 20px #00C2FF, -13px -13px 20px #FF8399',
        '&:hover': {
            boxShadow: '13px 13px 20px #FF8399, -13px -13px 20px #00C2FF',
            height: '45%',
            width: '45%',
            transitionProperty: 'box-shadow height width',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',

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




export const Circle = ({ icon, content }) => {

    const classes = useStyles()
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(prevOpenModal => !prevOpenModal)
    }

    return (
        <Grid item>
            <Box className={classes.mainItem}>
                <div className={classes.dot}>
                    <div className={classes.secondDot}>
                        <div className={classes.thirdDot}>
                            <div onClick={handleOpenModal}>
                                {icon}
                                <SimpleModal isOpen={openModal} closeModal={handleOpenModal}>
                                    {content}
                                </SimpleModal>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Grid>
    )
}