const initialState={
    test:1,
    test1:[],
    username:"test"
}
const sampleReducer=(state=initialState,action)=>{

switch(action.type)
{
    case "Set_Name":
    {
        state={
            ...state,
            username:action.payload
        }
        break;
    }
    case "SUBTRACT":
    {
        break;
    }
}
return state;
}

export default sampleReducer;