import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles({
    head:{
        fontFamily: 'cursive',
        fontSize: 26,
        fontWeight: 600,
        color: '#4a4a4a',
        padding: 30,
        marginLeft:15
    }
});
const LatestBlog = ({heading})=>{
    const classes = useStyle();
    return(<>
    <Typography className={classes.head}>
        {heading}
        
    </Typography>
    </>);
};
export{LatestBlog};