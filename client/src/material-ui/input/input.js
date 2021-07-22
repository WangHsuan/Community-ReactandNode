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
           <Typography variant='caption'>
                  本人願意接受關於蓋璞及關聯零售公司,關於產品、服務、促銷活動、有獎活動、會員積分活動、生日禮物盒優惠劵、調查、新店開張的資訊，並且同意為以上目的使用本人的個人資訊。
          </Typography>
        </Grid>
      </Grid>
      
      {meta.touched && meta.error ? (
        <Box color='error.main'>{meta.error}</Box>
      ) : null}
    </div>
  );
};