import React, { Fragment } from 'react'
/* ------------------------------- Material UI Components ------------------------------- */
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: '#A4F895',
        borderRadius: '25px',
        boxShadow: '13px 13px 20px #FF8399, -13px -13px 20px #00C2FF',
        width: 'auto',
        padding: theme.spacing(2, 4),
        outline: 'none',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        paddingTop: '22px'
    },
}))

export const SimpleModal = ({ isOpen, closeModal, children }) => {

    const classes = useStyles()

    return (
        <Fragment>
            <Modal
                open={isOpen}
                onClose={closeModal}
            >
                <Box
                    width='auto'
                    boxShadow={3}
                    m='auto'
                    height='auto'
                    className={classes.paper}
                >
                    {children}
                </Box>
            </Modal>
        </Fragment>
    )
}