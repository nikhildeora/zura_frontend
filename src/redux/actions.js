import { USER_LOGIN , CREATE_NEW_PROJECT, GET_ALL_PROJECTS, USER_LOGGEDIN, CREATE_NEW_FILE, GET_ALL_FILES, CHANGE_FILE_DESCRIPTION, DELETE_FILE, CHANGE_USER_DETAIL, LOADING_TRUE, ERROR, CLEAR_ERROR, CLEAR_SUCCESS} from "./actionTypes";
import { change_file_description_api, change_user_detail_api, create_new_file_api, create_new_project_api, delete_file_api, get_all_file_api, get_all_projects_api, login_user_api, user_logged_in_api } from "./api";

export const funUserLogin = (user_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let user_logged = await login_user_api(user_body);
        dispatch({type:USER_LOGIN, payload : user_logged});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in login"})
        console.log("error",error);
    }
}

// yes 
export const funChangeUserDetail = (user_id,user_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let change_user = await change_user_detail_api(user_id,user_body);
        console.log("change_user",change_user);
        dispatch({type:CHANGE_USER_DETAIL,payload:change_user}); 
    } catch (error) {
        dispatch({type:ERROR,payload:"error in change user detail"})
        console.log("error",error);
    }
}

// yes
export const funCreateNewProject = (project_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let project_created = await create_new_project_api(project_body);
        dispatch({type : CREATE_NEW_PROJECT, payload:project_created});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in create project"})
        console.log("error",error);
    }
}

export const funGetAllProjects = () => async (dispatch) => {
    try {
        let all_projects = await get_all_projects_api();
        console.log("all",all_projects);
        dispatch({type:GET_ALL_PROJECTS, payload:all_projects});
    } catch (error) {
        console.log("error",error);
    }
}
// yes 
export const funUserLoggedIn = () => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let current = await user_logged_in_api();
        dispatch({type : USER_LOGGEDIN, payload : current})
    } catch (error) {
        dispatch({type:ERROR,payload:"error in login"})
        console.log("error",error);
    }
}

// yes
export const funCreateNewFile = (file_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let new_file = await create_new_file_api(file_body);
        console.log("new_file",new_file);
        dispatch({type: CREATE_NEW_FILE,payload:new_file});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in create file"})
        console.log("error",error);
    }
}

export const funGetAllFiles = (project_id) => async (dispatch) => {
    try {
        let all_files = await get_all_file_api(project_id);
        console.log("all_files",all_files);
        dispatch({type : GET_ALL_FILES, payload:all_files});
    } catch (error) {
        console.log("error",error);
    }
}

// yes
export const funChangeFileDescription = (file_id,project_id,file_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let file_change = await change_file_description_api(file_id,project_id,file_body);
        console.log("file_change",file_change);
        dispatch({type:CHANGE_FILE_DESCRIPTION, payload: file_change})
    } catch (error) {
        dispatch({type:ERROR,payload:"error in change file detail"})
        console.log("error",error);
    }
}

// yes
export const funDeleteFile = (file_id,project_id) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let file_delete = await delete_file_api(file_id,project_id);
        console.log("file_delete",file_delete);
        dispatch({type:DELETE_FILE, payload: file_delete});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in delete file"})
        console.log("error",error);
    }
}

export const funClearError = () => ({type:CLEAR_ERROR});

export const funClearSuccess = () => ({type:CLEAR_SUCCESS});