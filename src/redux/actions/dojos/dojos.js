import axios from 'axios';
import {
    GET_DOJO_SUCCESS,
    GET_DOJO_FAIL,
} from './types';


export const get_dojos = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`http://localhost:8000/api/Dojos/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_DOJO_SUCCESS,
                payload: res.data
            });
        }else {
            dispatch({
                type: GET_DOJO_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_DOJO_FAIL
        })
    }
}

