import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {deleteComment} from '../../actions/post';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme=>({
    root:{
      width:'40rem',
      margin:'5px'
    },
    comment:{
       backgroundColor:'#e3e6e4',
       borderRadius:'5px',
    }
}))

const CommentItem = ({
    postId,
    comment:{_id, text, name, avatar, user, date},
    auth
}) => {
  const classes = useStyles();
    return (

       
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={1}>
                <Link to={`/profile/${user}`}>
                  <Avatar src={avatar} alt='' />
                  <Typography variant='body2'>
                  {name}
                </Typography>
                  
                </Link>
            </Grid>
            <Grid item xs={4} className={classes.comment}>
              <Typography variant='body2'>
                {text}
              </Typography>
              <Typography variant='caption'>
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
              </Typography>
            </Grid>
            
            <Grid item xs={2}>
              {!auth.loading && user === auth.user._id && (
                  <Button onClick={e=> deleteComment(postId, _id)} startIcon={<HighlightOffIcon color='error'/>}>
                    
                  </Button>
              )}
            </Grid>
          </Grid>
       
        
    )
}

CommentItem.propTypes = {
    postId:PropTypes.string.isRequired,
    comment:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps, {deleteComment})(CommentItem)

