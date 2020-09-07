import axios from 'axios';
import {ADD_POST,DELETE_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES} from './type';
import {setAlert} from './alert';

//Get Posts
export const getPosts = () => async dispatch =>{
    try {
        const res =  await axios.get('/api/posts');
        dispatch({
            type:GET_POSTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Add Like

export const addLike = id => async dispatch =>{
    console.log('like');
    try {
       
        const res =  await axios.put(`/api/posts/like/${id}`);
        dispatch({
            type:UPDATE_LIKES,
            payload:{id, likes:res.data}
        })
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Remove Like

export const removeLike = id => async dispatch =>{
    try {
        const res =  await axios.put(`/api/posts/unlike/${id}`);
        dispatch({
            type:UPDATE_LIKES,
            payload:{id, likes:res.data}
        })
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Delete Post 

export const deletePost = id => async dispatch =>{
    try {
        await axios.delete(`/api/posts/${id}`);
        dispatch({
            type:DELETE_POST,
            payload:id
        });
        dispatch(setAlert('Post has been removed', 'success'));
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Add Post 

export const addPost = formData => async dispatch =>{
    const config = {
       headers:{
           'Content-Type':'application/json'
       } 
    }
    try {
        const res = await axios.post(`/api/posts`, formData, config);
        dispatch({
            type:ADD_POST,
            payload:res.data
        });
        dispatch(setAlert('Post Created', 'success'));
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}