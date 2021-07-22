import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';
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
    declaration: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
});

const Login = ({login, isAuthenticated}) => {
    const classes = useStyles();
    const [error, setError] = useState('');
    const [displayError, setDisplayError] = useState(false);
    //redirect if logged in
    if(isAuthenticated){
        return <Redirect to='/dashboard'/>
    }
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', declaration: false }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    const { email, password} = values;
                    
                    login(email,password);
                }}

            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className={classes.root} noValidate  >
                        <Grid container spacing={3} justifyContent='center'>
                            <Grid item xs={12}>
                                <CustomTextField
                                    type="email"
                                    name="email"
                                    label='Account'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    type="password"
                                    name="password"
                                    label='Password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {!displayError ? null : <Typography color='error' variant='caption'>{error}</Typography>}
                            </Grid>
                            <Grid item xs={12}>
                                <label>
                                    <CheckBox type="checkbox" name="declaration" />

                                </label>
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


Login.propTypes = {
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,{login})(Login);