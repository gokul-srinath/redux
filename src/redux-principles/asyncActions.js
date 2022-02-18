import {createStore , applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

const initialState = {
    loading:true,
    users:[],
    error:''
}

const logger = createLogger();

const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';



const fetchUsersLoading = () => {
    return {
        type:FETCH_USERS_LOADING
    }
}


const fetchUsersSuccess = users => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload : users
    }
}


const fetchUsersError = error => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload : error
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS_LOADING:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading:false,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading:false,
                error : action.payload,
                users : []
            }
            
        default:
            return state;
    }
}


const fetchUsers = (initialState) => {

    return function(dispatch){
        dispatch(fetchUsersLoading())
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            dispatch(fetchUsersSuccess(response.data));
        }).catch(e => {
            dispatch(fetchUsersError(e.message));
        })

    }
}



const asyncAction = () => {

    const store = createStore(reducer, applyMiddleware(thunkMiddleWare,logger));

    console.log(store.getState());
    

    const unsubscribe = store.subscribe(() => {}); 
    store.dispatch(fetchUsers());
    unsubscribe();
}

export default asyncAction;