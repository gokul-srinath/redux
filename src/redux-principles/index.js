import {createStore} from 'redux';


//action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake(){
    return {
        type:BUY_CAKE,
        info:'redux action example'
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM,
    }
}


const initialState = {
    numOfCakes:10,
    numOfIceCreams:20
}

//reducer

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREAM:return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
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
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
}


export default principles;

