import { USER_LOGIN, CREATE_NEW_PROJECT, GET_ALL_PROJECTS, USER_LOGGEDIN } from "./actionTypes";

const initState = {
    isAuthenticated : false,
    current_user : {},
    all_projects : [],
    relevant_files : [],
    chatbotWidget : {},                
    error : false,
    message : "",
    loading : false,
    success : false
};

export function Reducer(state=initState,action){
   switch(action.type){
    case USER_LOGIN : {
        localStorage.setItem("padcast_platform_cur_user", action.payload.current_user._id);
        return {...state, isAuthenticated : true, current_user : {...action.payload.current_user}, message : action.payload.message};
    }
    case USER_LOGGEDIN : {
        return {...state, isAuthenticated : true, current_user : {...action.payload.current_user}, message : action.payload.message};
    }
    case CREATE_NEW_PROJECT : {
        return {...state, all_projects : [...action.payload.projects], message : action.payload.message};
    }
    case GET_ALL_PROJECTS : {
        return {...state, all_projects : [...action.payload.projects], message : action.payload.message}
    }
    default : {
        return state;
    }
   }
};