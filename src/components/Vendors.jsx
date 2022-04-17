import { makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent, Grid, CardActions,ButtonGroup,Button } from '@material-ui/core';
import React from 'react';
import { vendors } from '../data/data.js';
const useStyle = makeStyles({
    head: {
        fontSize: 35,
        fontWeight: 600,
        marginLeft: 40,
        marginTop: 10,
        fontFamily: 'cursive',
        padding: 30,
    },
    media: {
        height: 250
    },
    root: {
        maxWidth: 318,
        margin: '10px 0px 10px 15px'
    },
    container: {
        padding: 30
    },
    Btngrp:{
        margin:'auto'
    }
});
const Vendors = ({ heading }) => {
    const classes = useStyle();
    return (<>
        <Typography className={classes.head}>
            {heading}
            <Typography variant='span' style={{ color: 'red', fontSize: 12 }}>30% Off</Typography>
        </Typography>
        <Grid container className={classes.container}>
            {vendors.map((item, index) => {
                return (
                    <Grid item xs={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.pic}
                                    title={item.city}
                                />
                                <CardContent>
                                    <Typography gutterBottom style={{ textAlign: 'center' }}>
                                        {item.city}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <ButtonGroup className={classes.Btngrp} variant="contained" color="secondary" aria-label="contained primary button group">
                                    <Button>Banquet Halls</Button>
                                    <Button style={{backgroundColor:'purple'}}>Vendors</Button>
                                </ButtonGroup>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>


    </>);
};
export { Vendors };