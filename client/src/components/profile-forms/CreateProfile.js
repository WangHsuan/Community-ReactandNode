import React,{useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile} from '../../actions/profile';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//formik
import { Formik, Field } from 'formik';
//Utils
import * as Yup from 'yup';
//custom
import { CustomTextField, CheckBox } from 'material-ui/input/input';
import { CustomButton } from 'material-ui/button/CustomButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'45rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  selectBox:{
    width:'25rem',
    height:'2rem'
  }
}));

const ProfileSchema = Yup.object().shape({
  company: Yup.string().required('company is Required'),
  skills: Yup.string().required('skills is Required'),
});


const CreateProfile = ({createProfile, history}) => {
  const classes = useStyles();
    const [formData, setFormData] = useState({
        company:'',
        website:'',
        location:'',
        status:'',
        skills:'',
        githubusername:'',
        bio:'',
    });
    

    return (
        <Fragment>
          
          <Formik
                initialValues={formData}
                validationSchema={ProfileSchema}
                values={formData}
                onSubmit={async (values) => {
                    createProfile(values,history)
                }}

            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}  noValidate  >
                        <Grid container spacing={3} justifyContent='center' direction='column' alignItems='center'>
                        <Grid item xs={12}>
                          <Typography variant='h5'>Create Profile</Typography>
                          </Grid>
                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="company"
                                    label='Company'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company}
                                />
                            </Grid>
                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="website"
                                    label='Website'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.website}
                                />
                            </Grid>
                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="location"
                                    label='Location'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                />
                            </Grid>
                            <Grid item >
                                <Field
                                    type="text"
                                    name="status"
                                    label='Status'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.status}
                                    as="select"
                                    className={classes.selectBox}
                                >
                                   <option value="0">* Select Professional Status</option>
                                  <option value="Developer">Developer</option>
                                  <option value="Junior Developer">Junior Developer</option>
                                  <option value="Senior Developer">Senior Developer</option>
                                  <option value="Manager">Manager</option>
                                  <option value="Student or Learning">Student or Learning</option>
                                  <option value="Instructor">Instructor or Teacher</option>
                                  <option value="Intern">Intern</option>
                                  <option value="Other">Other</option>
                                </Field>
                            </Grid>

                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="skills"
                                    label='Skills'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.skills}
                                />
                            </Grid>

                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="githubusername"
                                    label='Githubusername'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.githubusername}
                                />
                            </Grid>

                            <Grid item >
                                <CustomTextField
                                    type="text"
                                    name="bio"
                                    label='Bio'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bio}
                                />
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

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}



export default connect(null, {createProfile})(withRouter(CreateProfile));

