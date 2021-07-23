import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import {getPost} from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root:{
       
    },
    postArea:{
        border:'1px solid #e3e6e4',
        padding:'10px',
        width:'20rem'
    }
}))



const Post = ({getPost, post:{post, loading}, match}) => {
    const classes = useStyles();
    useEffect(()=>{
        getPost(match.params.id);
    },[getPost])

    return loading || post === null ? <Spinner/> :<Fragment>
        <Link to='/posts' className='btn'>Back to Posts</Link>
        <Grid container className={classes.root} direction='column' justifyContent='center' alignItems='center'>
            <Grid item xs={10}>
                <PostItem post={post} showActions={false}/>
            </Grid>
            <Grid item xs={10}>
                <div className='comments'>
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id}/>
                ))}
                </div>
            </Grid>
            <Grid item xs={10}>
                <CommentForm  postId={post._id}/>
            </Grid>
        </Grid>
        
      
       
    </Fragment>
}

Post.propTypes = {
    getPost:PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post:state.post
})

export default connect(mapStateToProps,{getPost})(Post);
