const backend_api = "http://localhost:8080";

export function login_user_api(user_body) {
  return fetch(`${backend_api}/create_user`, {
    method: "POST",
    body: JSON.stringify(user_body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) =>{throw new Error(err.message)});
}

export function user_logged_in_api(){
  return fetch(`${backend_api}/${localStorage.getItem("padcast_platform_cur_user")}`)
  .then((res) => res.json())
    .then((res) => res)
    .catch((err) =>{throw new Error(err.message)});
}

export function create_new_project_api(project_body){
    return fetch(`${backend_api}/project/create_project`,{
        method : "POST",
        body : JSON.stringify(project_body),
        headers : {
            "Content-Type": "application/json",
            "Authorization" : localStorage.getItem("padcast_platform_cur_user")
        }
    }).then((res)=>res.json())
    .then((res) => res)
    .catch((err) =>{throw new Error(err.message)});
}

export function get_all_projects_api(){
  return fetch(`${backend_api}/project/getall`,{
    headers : {
      "Authorization" : localStorage.getItem("padcast_platform_cur_user")
     }
  }).then((res)=>res.json())
  .then((res) => res)
  .catch((err) =>{throw new Error(err.message)});
}