import React from 'react';
//formik
import { useField, Field } from 'formik';
//material-ui
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme)=>({
  input:{
    width:'25rem'
  },
  box:{
    marginTop:'4px'
  }
}))
 
 
export const CustomTextField = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);
   const classes = useStyles();
   return (
     <div>
       <label>
       <Typography color='textSecondary' varant='subtitle1'>{label}</Typography>
         <TextField id="outlined-basic" className={classes.input} variant="outlined" {...field} {...props} />
       </label>
       {meta.touched && meta.error ? (
         <Box color='error.main'>{meta.error}</Box>
       ) : null}
     </div>
   );
 };

 export const CheckBox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems='flex-start' justifyContent='center'>
        <Grid item xs={1} className={classes.box}>
            <label>
              <Field variant="outlined" {...field} {...props} />
            </label>
        </Grid>
        <Grid item xs={11}>
          <Box component='div'>
              <Typography variant='caption'>
                      Test Account: testMan@gmail.com
              </Typography>

          </Box>
          <Box component='div'>
              <Typography variant='caption'>
                      Test Password: 123456
              </Typography>
          </Box>
          
         
        </Grid>
      </Grid>
      
      {meta.touched && meta.error ? (
        <Box color='error.main'>{meta.error}</Box>
      ) : null}
    </div>
  );
};