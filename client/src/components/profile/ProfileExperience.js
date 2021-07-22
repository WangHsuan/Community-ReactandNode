import React from 'react';
import PropTypes from 'prop-types';
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

const ProfileExperience = ({experience:{company, title, location, current, to, from, description}}) =>{
    const classes = useStyles();
    return(<Grid container className={classes.root} alignItems='center'>
        <Grid item xs={3}>
            <Typography>{company}</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography>{title}</Typography>
            <Typography>
                <Moment format='YYY/MM/DD'>{from}</Moment> - {' '}
                {!to?'Now':<Moment format='YYYY/MM/DD'>{to}</Moment>}
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography>{description}</Typography>
        </Grid>
        
    </Grid>)
} 

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired
}

export default ProfileExperience
