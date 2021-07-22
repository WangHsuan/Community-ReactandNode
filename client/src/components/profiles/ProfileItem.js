import React from 'react';
import {Link} from 'react-router-dom';
//Material ui
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
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

const ProfileItem = ({
    profile:{
        user:{_id, name, avatar},
        status,
        company,
        location,
        skills

}}) => {
    const classes = useStyles();
    return (
       
            <Grid container className={classes.root} alignItems='center'>
                <Grid item xs={2}> <Avatar src={avatar} alt='' className={classes.large}/>  </Grid>
                <Grid item xs={4}>
                   <Typography variant='subtitle1'>{name}</Typography>
               
                    <Typography variant='body2'>
                    {status} {company && <span> at {company}</span>}
                    </Typography>
                    <Typography variant='body2'>{location && <span>{location}</span>}</Typography>
                    
                </Grid>
                <Grid item xs={4}>
                <Button component={Link}  to={`/profile/${_id}`} variant='outlined' >View Profile</Button>
                {/* <div className={classes.demo}>
                    <List >
                    {skills.slice(0,4).map((skill, index) => (
                        <ListItem key={index} className='text-primary'>
                            <ListItemText >{skill}</ListItemText>
                        </ListItem>
                    )
                    )}
                    
                    </List>
                </div> */}
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
            </Grid>
           
    )
}

ProfileItem.propTypes = {

}

export default ProfileItem
