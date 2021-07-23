import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {addLike, removeLike, deletePost} from '../../actions/post';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme=>({
    root:{
      width:'40rem',
      border:'1px solid #e3e6e4',
      margin:'10px',
      borderRadius:'5px',
      padding:'10px'
    },
    postArea:{
        border:'1px solid #e3e6e4',
        padding:'10px'
    }
}))


const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post:{_id, text,name,avatar,user,likes,comments,date},
    showActions,
    key
    }) => {
    const classes = useStyles();
    return (
       
          <Grid container direction='column' className={classes.root} >
            <Grid item xs={8}>
                <Link to={`/profile/${user}`}>
                  <Avatar src={avatar} alt='' />
                  <h5>{name}</h5>
                </Link>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='body1'>
                {text}
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography variant='caption'>
              Posted on <Moment format="YYYY-MM-DD">{date}</Moment>
              </Typography>
            </Grid>

            <Grid item xs={8}>
              {showActions && <Grid container direction='row' alignItems='center' spacing={1}>
                <Grid item>
                  <Button onClick={e=>addLike(_id)} variant='text' startIcon={<ThumbUpAltIcon/>}>
                  <span>{likes.length>0 && <span>{likes.length}</span>}</span>
                    {/* <i className="fas fa-thumbs-up"></i>{' '}
                    <span>{likes.length>0 && <span>{likes.length}</span>}</span> */}
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={e=>removeLike(_id)}variant='text' startIcon={<ThumbDownIcon/>}>
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to={`/posts/${_id}`} variant='outlined'>
                        Discussion {' '}
                        {comments.length>0 && (<span className='comment-count'>{comments.length}</span>)}
                  </Button>
                </Grid>
                <Grid item>

                  {!auth.loading && user === auth.user._id && (
                        <Button
                        onClick={e=>deletePost(_id)}      
                        variant='text' startIcon={<HighlightOffIcon color='error'/>}
                        
                        >
                      
                        </Button>
                  )}

                </Grid>
                 
                  
        
                  </Grid>}
            </Grid>
          </Grid>

         
         

          
      
    )
}

PostItem.defaultProps = {
    showActions: true
}

PostItem.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{addLike, removeLike,deletePost})(PostItem);
