import { makeStyles, Typography, Box, CardContent, CardActions, Button } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
const useStyle = makeStyles({
    head: {
        fontSize: 40,
        fontWeight: 600,
        marginLeft: 50,
        marginTop: 10,
        fontFamily: 'cursive',
        paddingTop: 20
    },
    Btn: {
        color: 'white',
        fontWeight: 600
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 30
    },
    bullet:{
        fontSize:40
    },
    mainText:{
        fontSize:22,
        color:'grey',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:20
    }
});
const Offers = ({ heading }) => {
    const classes = useStyle();
    const bull = <span className={classes.bullet}>•</span>;
    return (<>
        <Typography className={classes.mainText}>10,000+ Events Organized till Date&nbsp;{bull}&nbsp;
            Present in 25 Cities&nbsp;{bull}&nbsp;
            Over 20,000+ Wedding Venues & Vendors
        </Typography>
        <Typography className={classes.head}>{heading}</Typography>
        <Box className={classes.container}>
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography>
                        Get<Typography variant='span' style={{ fontWeight: 700 }}> 40% off </Typography> on<br />
                        Photography | Videography | Make-up<br />
                        Mehendi | Decor | Band-Baja | Ghodi <br />
                        Entertainment | Invites | Teasers | Transportation
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button color='secondary' size="small" variant="contained" className={classes.Btn} >Get Offer</Button>
                </CardActions>
            </Card>
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography>
                        Get<Typography variant='span' style={{ fontWeight: 700 }}> 40% off </Typography> on<br />
                        Photography | Videography | Make-up<br />
                        Mehendi | Decor | Band-Baja | Ghodi <br />
                        Entertainment | Invites | Teasers | Transportation
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button color='secondary' size="small" variant="contained" className={classes.Btn} >Get Offer</Button>
                </CardActions>
            </Card>
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography>
                        Get<Typography variant='span' style={{ fontWeight: 700 }}> 40% off </Typography> on<br />
                        Photography | Videography | Make-up<br />
                        Mehendi | Decor | Band-Baja | Ghodi <br />
                        Entertainment | Invites | Teasers | Transportation
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button color='secondary' size="small" variant="contained" className={classes.Btn} >Get Offer</Button>
                </CardActions>
            </Card>
        </Box>
    </>);
};
export { Offers };