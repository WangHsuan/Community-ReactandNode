import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
//Material ui
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:'10px',
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  flexContainer:{
      display:'flex',
      flexDirection:'row'
  }
}));

const ProfileAbout = ({profile:{
    bio,
    skills,
    user:{name}
    }}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
        {bio && (<Grid item>
            <Typography variant='subtitle1'>About</Typography>
            <Typography variant='body2'>
                {bio}
            </Typography>
            </Grid>)}
          <Grid xs={12}><Divider/></Grid>
          <Grid item>
              <Typography variant='subtitle1'>Skill Set</Typography>
           
             <List className={classes.flexContainer}>
                {skills && skills.map((skill, index) => {
                    return  <ListItem key={index}>
                                <ListItemText
                                primary={skill}
                                
                                />
                            </ListItem>
                }

                )}
               
            </List>
          </Grid>
         
          
        </Grid>
    )
}

ProfileAbout.propTypes = {

}

export default ProfileAbout
