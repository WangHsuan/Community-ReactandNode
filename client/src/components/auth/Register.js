import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';
//formik
import { Formik, Field } from 'formik';
//Utils
import * as Yup from 'yup';
//material ui
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles/styledLogIn';
import Typography from '@material-ui/core/Typography';
//custom
import { CustomTextField, CheckBox } from 'material-ui/input/input';
import { CustomButton } from 'material-ui/button/CustomButton'


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Register = ({ register, isAuthenticated}) => {
    const classes = useStyles();
    const [error, setError] = useState('');
    const [displayError, setDisplayError] = useState(false);
    if(isAuthenticated){
        return <Redirect to='dashboard'/>
    }
    return (
        <div>
            <Formik
                initialValues={{ name: '', email: '', password: '', passwordConfirmation: '' }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    const { name, email, password } = values;
                    console.log(values)
                    register({name,email, password});
                }}

            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className={classes.root} >
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Name</Typography>
                                <CustomTextField
                                    type='text'
                                    name='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.displayName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Account</Typography>
                                <CustomTextField
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Password</Typography>
                                <CustomTextField
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Confirm Password</Typography>
                                <CustomTextField
                                    type="password"
                                    name="passwordConfirmation"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirmation}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                {!displayError ? null : <Typography color='error' variant='caption'>{error}</Typography>}
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
        </div>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {register})(Register);