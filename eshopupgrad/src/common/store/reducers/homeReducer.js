const initialState = {
    isUserAuth : false,
    users : [{
        id : 1,
        name : "abc",
        email : "abc@gmail.com"
    },{
        id : 2,
        name : "xyz",
        email : "xyz@rediffmail.com"
    }]
}

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_USER":{
            return  { users : [...state.users, action.user] }       
        }
    default:{
        return state;
    }
  }
}

export default homeReducer;