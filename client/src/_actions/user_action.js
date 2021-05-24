//L29-30
import axios from 'axios';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)
    
    return {
        type: LOGIN_USER,
        payload: request
    }

}



// L31
export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)
    
    return {
        type: REGISTER_USER,
        payload: request
    }

}



// L33
export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response => response.data)
    
    return {
        type: AUTH_USER,
        payload: request
    }

}