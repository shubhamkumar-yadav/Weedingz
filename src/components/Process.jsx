import { Box, makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
const useStyle = makeStyles({
    head: {
        fontFamily: 'cursive',
        fontSize: 26,
        fontWeight: 600,
        color: '#4a4a4a',
        padding: 30,
        marginLeft:15
    },
    root: {
        maxWidth: 345,
        border: 'none',
        boxShadow: 'none'
    },
    media: {
        height: 60,
        width: 60,
        margin: 'auto'
    },
    container: {
        display: 'flex',
        justifyContent:"space-between",
        padding:30,
        alignItems:'center'

    }
});
const Process = ({ heading }) => {
    const classes = useStyle();
    return (<>
        <Typography className={classes.head}>{heading}</Typography>
        <Box className={classes.container}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://weddingz.in/static/img/home/home_discover.png"
                        title="image"
                    />
                    <CardContent>
                        <Typography gutterBottom style={{ textAlign: 'center', fontWeight: 600, fontSize: 20 }}>
                            Discover & Shortlist Venues
                        </Typography>
                        <Typography gutterBottom style={{ textAlign: 'center' }}>
                            Input your requirements & see our recommendations & prices.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ArrowForwardIosIcon style={{color:"grey"}}/>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://weddingz.in/static/img/home/home_visits.png"
                        title="image"
                    />
                    <CardContent>
                        <Typography gutterBottom style={{ textAlign: 'center', fontWeight: 600, fontSize: 20 }}>
                            Guided Visits
                        </Typography>
                        <Typography gutterBottom style={{ textAlign: 'center' }}>
                            Visit venues on your own or with our venue expert.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ArrowForwardIosIcon style={{color:"grey"}}/>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://weddingz.in/static/img/home/home_book.png"
                        title="image"
                    />
                    <CardContent>
                        <Typography gutterBottom style={{ textAlign: 'center', fontWeight: 600, fontSize: 20 }}>
                            Book Venue
                        </Typography>
                        <Typography gutterBottom style={{ textAlign: 'center' }}>
                            Get final quotes (upto 30% off) and book your venue.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ArrowForwardIosIcon style={{color:"grey"}}/>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://weddingz.in/static/img/home/home_vendor.png"
                        title="image"
                    />
                    <CardContent>
                        <Typography gutterBottom style={{ textAlign: 'center', fontWeight: 600, fontSize: 20 }}>
                            Book Vendors
                        </Typography>
                        <Typography gutterBottom style={{ textAlign: 'center' }}>
                            Meet our trusted vendors and book them at your ease.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </>);
};
export { Process };