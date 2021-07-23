import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getPosts} from '../../actions/post';
import PostItem from './PostItem';
import PostForm from 'material-ui/dialog/PostDialog';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {loadUser} from 'actions/auth';

const useStyles = makeStyles(theme=>({
    root:{

    },
    postArea:{
        border:'1px solid #e3e6e4',
        padding:'10px',
        width:'20rem'
    }
}))


const Posts = ({getPosts, post:{loading, posts}, avatar, loadUser}) => {
    const classes = useStyles();
    useEffect(()=>{
        getPosts();
        loadUser();
    },[getPosts])

    return loading?<Spinner/>:<Fragment>

        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item xs={10} > 
                <Grid container className={classes.postArea}>
                <Grid item xs={3}> <Avatar src={avatar} alt='' /></Grid>
                <Grid item xs={9}>  <PostForm /></Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}> 
            <div className='posts'>
                {posts.map(post=>(
                    <PostItem key={posts._id} post={post}/>
                ))}
            </div>
            </Grid>
        </Grid>
        
    </Fragment>
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post:state.post,
    avatar:state.auth.user.avatar
})

export default connect(mapStateToProps,{getPosts,loadUser})(Posts);
