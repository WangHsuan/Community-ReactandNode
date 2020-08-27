import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_PROFILE,
    PROFILE_ERROR
} from './type';

//GET current user profile
export const getCurrentProfile = () => async dispatch =>{
    try {
        const res = axios.get('/api/profile/me');
        console.log('res react',res.data);
        dispatch({
            type: GET_PROFILE,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}