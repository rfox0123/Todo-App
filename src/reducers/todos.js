import * as types from "../ActionTypes";


const initial = [
    {
        text: "I am amazing",
        completed: false,
        id: 0
    },
    {
        text: "I'm a boss",
        completed: false,
        id: 1
    }
];

export default function todos(state = initial, action){
    switch (action.type){
        case types.ADD_TODO:
         return [
             ...state,
             {
                text: action.text, 
                completed: false, 
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1     
             }    
             ];

        case types.COMPLETE_TODO:
        const todoIndex = state.map(x => x.id).indexOf(action.id);
        const completedtodo = state[todoIndex];
          return [
             ...state.slice(0, todoIndex),
             {...completedtodo, completed: !completedtodo.completed},
             ...state.slice(todoIndex +1, state.length)
          ];

        case types.DELETE_TODO:
          return state.filter(todo => todo.id !== action.id);
        
        case types.EDIT_TODO:
          return state.map(
              
          )
        default:
         return state;
    }
}