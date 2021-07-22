import React, { Fragment } from 'react';
import {Link}from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';
//Material ui 
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme)=>({
    root:{
        height:'60px',
        borderBottom:'1px solid black',
        padding:'5px'
    },
    button:{
        paddingTop: '5px'
    }
}))

const Navbar = ({auth:{isAuthenticated, loading},logout}) => {
    const classes = useStyles();
    const authLinks = (
        <Grid container spacing={3}>
            <Grid item>
                <Box component={Link}  to="/profiles"> Developers </Box>
            </Grid>
            <Grid item>
                <Box component={Link}  to="/posts"> Posts </Box>
            </Grid>
            <Grid item>
                <Box component={Link}  to="/dashboard"> Dashboard </Box>
            </Grid>
            <Grid item>
                <Box onClick={logout}> <ExitToAppIcon/> </Box>
            </Grid>
            

        </Grid>
    );
    const guestLinks = (
        <Grid container spacing={3}>
        <Grid item>
            <Box component={Link}  to="/profiles" >
               <GroupIcon/>      
           </Box>
        </Grid>
       
        <Grid item>
            <Box component={Link}  to="/login">Log in </Box>
        </Grid>
        

    </Grid>
    )

    return (
    <Grid container justifyContent='space-around' alignItems='center' className = {classes.root}>
           <Grid item>
                <Box component={Link} to="/" >
                    <Typography variant='h5' >Dev In Brisbane</Typography>
                </Box>
           </Grid>
           <Grid item>
            {!loading&&(<Fragment>{isAuthenticated?authLinks:guestLinks}</Fragment>)}
           </Grid>
        
    </Grid>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{logout})(Navbar);