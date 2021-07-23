import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addCommet} from '../../actions/post';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme=>({
    root:{
      width:'40rem',
      margin:'5px'
    },
}))


const CommentForm = ({postId,addCommet,avatar}) => {

    const [text,setText] = useState('');
    const classes = useStyles();
    return (
       
        <form className={classes.root} onSubmit={ e=> {
            e.preventDefault();
            addCommet(postId, {text});
            setText('');
        }}>
          <Grid container>
            <Grid item xs={1}>
                    <Avatar src={avatar} alt='' />
              </Grid>
              <Grid item xs={4}>
              <TextField
                  name="text"
                  placeholder="Create a post"
                  value={text}
                  onChange={e=>setText(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={2}>
                <Button type="submit" variant='outlined' >Submit</Button>
              </Grid>
          </Grid>
        
        </form>
     
    )
}

CommentForm.propTypes = {
    addCommet: PropTypes.func.isRequired,
    comment:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  avatar:state.auth.user.avatar
})

export default connect(mapStateToProps, {addCommet})(CommentForm);
