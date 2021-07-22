import React from 'react'
import PropTypes from 'prop-types';
//Material ui
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px'
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const ProfileTop = ({profile:{
    status,
    company,
    location,
    website,
    social,
    user:{name, avatar}
}}) => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          
          <Avatar src={avatar} alt='' className={classes.large}/> 
          <Typography variant='h5'>{name}</Typography>
          <Typography variant='subtitle1'>{status} at {company && <span>at {company}</span>}</Typography>
          <Typography variant='subtitle1'>{location && <span>{location}</span>}</Typography>
        </div>
    )
}

ProfileTop.propTypes = {
    profile:PropTypes.object.isRequired
}

export default ProfileTop
