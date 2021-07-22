import React from 'react';
import PropTypes from 'prop-types';
//Material ui
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:'10px',
    borderBottom:'1px solid #ededed'
  },
}));

const ProfileEducation = ({education:{school, degree, fieldofstudy, current, to, from, description}}) => 
{
    const classes = useStyles();
    return(<Grid container className={classes.root} alignItems='center'>
        <Grid item xs={6}>
            <Typography>{school}</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography>{degree}</Typography>
            <Typography>
                <Moment format='YYY/MM/DD'>{from}</Moment> - {' '}
                {!to?'Now':<Moment format='YYYY/MM/DD'>{to}</Moment>}
            </Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography>{description}</Typography>
        </Grid>
        
    </Grid>)
} 

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation
