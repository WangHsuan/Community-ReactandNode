import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getProfileById} from '../../actions/profile';
import {Link} from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'0 auto',
    width:'50rem',
  },
  block:{
      border:'1px solid #f2f2f2',
      borderRadius:'5px',
      marginTop:'1rem',
      boxShadow:'5px 5px 10px #e6e6e6'
  }

}));

const Profile = ({getProfileById, match, profile:{profile, loading}, auth}) => {
    const classes = useStyles();
    useEffect(()=>{
        console.log('match',match.params.id);
        getProfileById(match.params.id)
    },[getProfileById])
    return (
        <Fragment>
        {profile===null||loading?<Spinner/>:<Fragment>
            <Link to='/profiles' className='btn btn-light'>Back To Profiles</Link>
            {auth.isAuthenticated && 
             auth.loading === false && 
             auth.user._id === profile.user._id &&(
                 <Link to='/edit-profile' className='btn btn-dark'>
                    Edit Profile
                 </Link>
             )
            }
            <Grid className={classes.root} container direction='column' spacing={2}>
                <Grid item className={classes.block}>
                    <ProfileTop profile={profile}/>
                </Grid>
                <Grid item className={classes.block}>
                     <ProfileAbout profile={profile}/>
                </Grid>
        
                <Grid item className={classes.block}>
                    <Typography variant='h5'>Experience</Typography>
                    {profile.experience.length>0?(<Fragment>
                        {profile.experience.map(experience =>(
                            <ProfileExperience key={experience._id} experience={experience}/>
                        ))}
                        </Fragment>):(<h4>No experience credentials</h4>)}
                </Grid>

                <Grid item className={classes.block}>
                <Typography variant='h5'>Education</Typography>
                    {profile.education.length>0?(<Fragment>
                        {profile.education.map(education =>(
                            <ProfileEducation key={education._id} education={education}/>
                        ))}
                        </Fragment>):(<h4>No education credentials</h4>)}
                </Grid>

                {/* {profile.githubusername && (
                    <ProfileGithub username={profile.githubusername}/>
                )} */}
            </Grid>

            
            </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile:state.profile,
    auth:state.auth
})

export default connect(mapStateToProps,{getProfileById})(Profile);
