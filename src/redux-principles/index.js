import {createStore} from 'redux';


//action
const BUY_CAKE = 'BUY_CAKE';



function buyCake(){
    return {
        type:BUY_CAKE,
        info:'redux action example'
    }
}

const initialState = {
    numOfCakes:10
}

//reducer

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
            
    }
}




const principles = () => {

const store = createStore(reducer);



console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
}


export default principles;

