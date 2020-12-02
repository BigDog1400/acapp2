import * as actionTypes from './actionTypes';
import axios from 'axios';
export const logout = ()=>{
    console.log('login out')
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}
export const checkAuthTimeOut = (expirationTime)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (token, userId)=>{
    console.log(token)
    console.log(userId)
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}


export const authFail = (error)=>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) =>{
    return dispatch =>{
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkdGtcrJ6UQ8nZsqeVdJvtzNQnk0-8eSI'
        if (isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkdGtcrJ6UQ8nZsqeVdJvtzNQnk0-8eSI'
        }
        axios.post(url,authData).
        then(response =>{
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem("token", response.data.idToken);
            localStorage.setItem("expirationDate", expirationDate);
            localStorage.setItem("userId", response.data.localId);
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeOut(response.data.expiresIn));
        })
        .catch(err =>{
            dispatch(authFail(err.response.data.error))
        })
        
    }
}