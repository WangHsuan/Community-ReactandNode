import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getProfiles} from '../../actions/profile';
import ProfileItem from './ProfileItem';
//Material ui
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'45rem',
    margin:'0 auto',
    
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const Profiles = ({getProfiles, profile:{profiles, loading}}) => {
    useEffect(()=>{
        getProfiles();
    },[getProfiles])
    const classes = useStyles();
    return (
       <Fragment>
       {loading?<Spinner/>:<Box className={classes.root}>
        <Typography variant='h5'>Developers</Typography>
       
        {profiles.length>0?(
            profiles.map(profile =>(
                <ProfileItem key={profile._id} profile={profile}/>
            ))
        ):<h4>No profiles found...</h4>
    
        }
       
        </Box>}
       </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles);
