import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '345px',
    },
    media: {
        height: '140px',
    },
});

export const MainCard = ({ item }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.imgSrc}
                    title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.subTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={item.gitHubLink} target='_blank'>
                    Github
        </Button>
                <Button size="small" color="primary" href={item.videoLink} target='_blank'>
                    Video Demo
        </Button>
            </CardActions>
        </Card>
    );
}