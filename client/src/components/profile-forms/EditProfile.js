import React,{useState, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile, getCurrentProfile} from '../../actions/profile';
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
  skills: Yup.string().required('skill is Required'),
});
const EditProfile = ({profile:{profile, loading},createProfile, getCurrentProfile,history}) => {
    const [formData, setFormData] = useState({
        company:'',
        website:'',
        location:'',
        status:'',
        skills:'',
        githubusername:'',
        bio:'',
    });
    const classes = useStyles();


    useEffect(()=>{
        getCurrentProfile();
        setFormData({
            company: loading || !profile.company?'':profile.company,
            website: loading || !profile.website?'':profile.website,
            location: loading || !profile.location?'':profile.location,
            status: loading || !profile.status?'':profile.status,
            skills: loading || !profile.skills?'':profile.skills.join(','),
            githubusername: 
                loading || !profile.githubusername?'':profile.githubusername,
            bio: loading || !profile.bio?'':profile.bio,
        })

    },[loading,getCurrentProfile])



    return (
        <Fragment>
          <Formik
                enableReinitialize
                initialValues={formData}
                validationSchema={ProfileSchema}
                values={formData}
                onSubmit={async (values) => {
                   
                    createProfile(values,history,true)
                   
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
                          <Typography variant='h5'>Edit Profile</Typography>
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

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile:state.profile
})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile));

