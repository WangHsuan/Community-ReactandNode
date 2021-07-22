import React from 'react';
//material ui
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=>({
  button:{
    width:'12rem',
  }
}))
export const CustomButton = ({
    children,
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.button}
            {...otherProps}
            color='primary'
        >
            {children}
        </Button>
    );
}


