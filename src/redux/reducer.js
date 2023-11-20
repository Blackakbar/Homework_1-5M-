const initialState ={
    number: 0
}


export default function reducer(state = initialState, action) {
    if (action.type === 'COUNT_NUMBER_UP') {
        return {number: state.number + 1}
    }else if (action.type === 'COUNT_NUMBER_DOWN'){
        return {number: state.number - 1}
    }
    return state
}