import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {addPost} from 'actions/post';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(theme => ({
    dialog:{
        width:'600px',
        height:'300px'
    },
    textField: {
        width: '580px',
        height:'150px',
        margin: '0 auto',    
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
}))

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function PostForm({addPost}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = e=> {
    e.preventDefault();
    console.log(55677)
    addPost({text});
    setText('');
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       What's on your mind?
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
       
        
    <form onSubmit={handleSubmit} className={classes.dialog}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Say Somrething
        </DialogTitle>
        <DialogContent dividers>
            <textarea
                className={classes.textField}
                name="text"
                placeholder="Create a post"
                value={text}
                onChange={e=>setText(e.target.value)}
                required
            ></textarea>
             </DialogContent>
             <DialogActions>
            <Button autoFocus type='submit' onClick={handleClose} color="primary" variant='outlined'>
                Submit
            </Button>
            </DialogActions>
            </form>
       
       
      </Dialog>
    </div>
  );
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null,{addPost})(PostForm);