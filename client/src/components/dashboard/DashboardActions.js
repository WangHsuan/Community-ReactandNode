import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
//Material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'40rem',
  },
 
}));

const DashboardActions = () => {
    const classes = useStyles();
    return (
        <Grid container  className={classes.root} justifyContent='center'>
            <Grid item xs={3}>
                <Button component={Link} to="/edit-profile" variant='outlined' startIcon={<EditIcon />}>Profile</Button>
            </Grid>
            <Grid item xs={3}>
                <Button component={Link} to="/add-experience" variant='outlined' startIcon={<WorkIcon />}>Experience</Button>
            </Grid>
            <Grid item xs={3}>
                <Button component={Link} to="/add-education" variant='outlined'  startIcon={<SchoolIcon />}>Education</Button>
            </Grid>
        </Grid>
    )
}


export default DashboardActions;