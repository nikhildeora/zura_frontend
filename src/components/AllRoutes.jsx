import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";
import UploadFiles from "../pages/UploadFiles";
import ProjectUploadFile from "../pages/ProjectUploadFile";
import ChatBotConfig from "../pages/ChatBotConfig";

const AllRoutes = () => {
   return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/uploadfile/:project_id" element={<UploadFiles />} />
        <Route path="/projectfileupload" element={<ProjectUploadFile />} />
        <Route path="/chatbot" element={<ChatBotConfig />} />
     </Routes>
   )
};

export default AllRoutes;