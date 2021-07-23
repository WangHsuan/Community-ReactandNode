import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import {deleteAccount} from '../../actions/profile';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'45rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const Dashboard = ({getCurrentProfile, deleteAccount,auth:{user}, profile: {profile, loading}}) => {
    useEffect(()=>{
        getCurrentProfile();
    },[getCurrentProfile,user]);

    return profile == null ? <Spinner/> : <Fragment>
    
    {profile!==null?(<Grid container direction='column' alignItems='center' justifyContent='center' spacing={3}>
        <Grid item>
            <Typography variant='h4'>Dashboard</Typography>
        </Grid>
        <Grid item >
            <DashboardActions/>
        </Grid>
        <Grid item>
            <Experience experience={profile.experience}/>
        </Grid>
        <Grid item>
            <Education education={profile.education}/>
        </Grid>
        
        
        <Button variant='outlined' onClick={()=>deleteAccount()}>
                <i className='fa fa-user-minus'></i> Delete my Account
        </Button>
        
        </Grid>):(<Fragment>
        <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link>
        </Fragment>)}
   
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth,
    profile:state.profile
})

export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(Dashboard);
