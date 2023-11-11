

const initState = {
    isAuthenticated : false,
    current_user : {},
    all_projects : [],
    relevant_files : [],
    chatbotWidget : {},                
    error : false,
    message : "",
    loading : false,
};

export function Reducer(state=initState,action){
   switch(action.type){
    default : {
        return state;
    }
   }
};