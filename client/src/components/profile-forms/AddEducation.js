import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker'
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profile';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
//formik
import { Formik, Field } from 'formik';
//Utils
import * as Yup from 'yup';
//custom
import { CustomTextField, CheckBox } from 'material-ui/input/input';
import { CustomButton } from 'material-ui/button/CustomButton';
import { makeStyles } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'45rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  timeBox:{
    width:'15rem',
    height:'2rem'
  },
  selectBox:{
    width:'25rem',
    height:'15rem'
  }
}));
const AddEducationSchema = Yup.object().shape({
  school: Yup.string().required('school is required'),
  degree: Yup.string().required('degree is required'),
  fieldofstudy: Yup.string().required('fieldofstudy is required'),
});

const AddEducation = ({addEducation, history}) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        school:'',
        degree:'',
        fieldofstudy:'',
        from:'',
        to:'',
        current:false,
        description:''
    });

    return (
       <Fragment>
             <Formik
                enableReinitialize
                initialValues={formData}
                values={formData}
                validationSchema={AddEducationSchema}
                onSubmit={async (values) => {
                    console.log(values)
                    addEducation(values, history);
                    // login(email,password);
                }}

            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue
                }) => (
                    <form onSubmit={handleSubmit}  noValidate  >
                        <Grid container spacing={3} justifyContent='center' direction='column' alignItems='center'>
                        <Grid item xs={12}>
                          <Typography variant='h5'>Add Experience</Typography>
                          </Grid>
                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="school"
                                    label='school'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.school}
                                />
                            </Grid>
                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="degree"
                                    label='degree'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.degree}
                                />
                            </Grid>
                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="fieldofstudy"
                                    label='fieldofstudy'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fieldofstudy}
                                />
                            </Grid>
                            <Grid item >
                            <Typography variant='subtitle1'>From</Typography>
                                <DatePicker
                                  selected={values.from}
                                  dateFormat='MMMM d, yyyy'
                                  name="from"
                                  className='form-control'
                                  onChange={date => setFieldValue('from', date)}
                                  className={classes.timeBox}
                                />
                            </Grid>
                            <Grid item >
                                <Typography variant='subtitle1'>To</Typography>
                                <DatePicker
                                  selected={values.to}
                                  dateFormat='MMMM d, yyyy'
                                  name="to"
                                  className='to'
                                  onChange={date => setFieldValue('to', date)}
                                  className={classes.timeBox}
                                />
                            </Grid>
                            <Grid item >
                            <Typography variant='subtitle1'>Description</Typography>
                                <Field
                                    type="text"
                                    name="description"
                                    label='description'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    as="textarea"
                                    className={classes.selectBox}
                               / >
                                  
                               
                            </Grid>

                            
    
                            <Grid item xs={6}>
                                <CustomButton type="submit" variant='outlined'>
                                    Submit
                                </CustomButton>
                            </Grid>
                            

                        </Grid>


                    </form>
                )}
            </Formik>
       
     
       </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null,{addEducation})(withRouter(AddEducation))
