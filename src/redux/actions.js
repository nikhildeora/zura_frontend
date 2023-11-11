import { USER_LOGIN , CREATE_NEW_PROJECT, GET_ALL_PROJECTS} from "./actionTypes";
import { create_new_project_api, get_all_projects_api, login_user_api } from "./api";

export const funUserLogin = (user_body) => async (dispatch) => {
    try {
        let user_logged = await login_user_api(user_body);
        dispatch({type:USER_LOGIN, payload : user_logged});
    } catch (error) {
        console.log("error",error);
    }
}

export const funCreateNewProject = (project_body) => async (dispatch) => {
    try {
        let project_created = await create_new_project_api(project_body);
        dispatch({type : CREATE_NEW_PROJECT, payload:project_created});
    } catch (error) {
        console.log("error",error);
    }
}

export const funGetAllProjects = () => async (dispatch) => {
    try {
        let all_projects = await get_all_projects_api();
        dispatch({type:GET_ALL_PROJECTS, payload:all_projects});
    } catch (error) {
        console.log("error",error);
    }
}