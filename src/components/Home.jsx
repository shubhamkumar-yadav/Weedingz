import React from 'react';
import { Box, makeStyles, Typography, AppBar, Toolbar, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Offers } from './Offers.jsx';
import { Vendors } from './Vendors.jsx';
import { Process } from './Process.jsx';
import { LatestBlog } from './LatestBlog.jsx';
const useStyle = makeStyles({
    container: {
        backgroundImage: `url(${'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`,
        height: '100vh',
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'

    },
    navbar: {
        backgroundColor: 'transparent',
        height: 75,
        boxShadow: 'none'
    },
    logo: {
        fontWeight: 600,
        fontSize: 30
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        border: '2px solid white',
        borderRadius: 20,
        width: '490px'
    },
    bar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    searchIcon: {
        marginLeft: 200,
        marginTop: 6
    },
    menus: {
        display: 'grid',
        gridTemplateColumns: '28% 29% 29% 29% 29% 29% 29% 29%',
        padding: 10,
        overflowX:'visible'
    },
    navbar2: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    child: {
        fontWeight: 600,
        fontSize: 18,
    },
    mainText:{
        textAlign:'center',
        color:'white',
        marginTop:'28vh',
        fontWeight:600,
        fontSize:40
    }
});
const Home = () => {
    const classes = useStyle();
    return (<>
        <Box className={classes.container}>
            <Box>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <Grid container className={classes.bar}>
                            <Grid item xs={4} ><Typography className={classes.logo}>Wedding<Typography variant='span' style={{ color: "red" }}>z</Typography>.in</Typography></Grid>
                            <Grid item xs={4} className={classes.search}>
                                <InputBase
                                    placeholder="Search Your City…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    style={{ textAlign: 'center', color: 'black' }}
                                />
                                <Box className={classes.searchIcon}>
                                    <SearchIcon fontSize='small' />
                                </Box>
                            </Grid>
                            <Grid item xs={4}><AccountCircleIcon fontSize='large' style={{ marginLeft: 400, marginTop: 5 }} /></Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar position="static" className={classes.navbar2}>
                    <Toolbar>
                        <Box className={classes.menus}>
                            <Typography className={classes.child}>Venues</Typography>
                            <Typography className={classes.child}>Vendors</Typography>
                            <Typography className={classes.child}>Blog</Typography>
                            <Typography className={classes.child}>Real Weedings</Typography>
                            <Typography className={classes.child}>Photos</Typography>
                            <Typography className={classes.child}>Deals</Typography>
                            <Typography className={classes.child}>Testimonials</Typography>
                            <Typography className={classes.child}>Why Weedingz</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography className={classes.mainText}>
                Plan Your Wedding With <br/>
                India’s Largest Wedding Co.
            </Typography>
        </Box>
        <Offers heading={"Featured"}/>
        <Vendors heading={" Wedding Venues and Vendors"}/>
        <Process heading={"How it Works"}/>
        <LatestBlog heading={"Latest Blogs On Weddings"} />
    </>);
};
export { Home };