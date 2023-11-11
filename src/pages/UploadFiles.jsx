import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import SideBarNav from '../components/SideBarNav';
import { Box, Text } from '@chakra-ui/react';
import ProjectUploadFile from './ProjectUploadFile';
import ChatBotConfig from './ChatBotConfig';
import UserSettings from './UserSettings';

const UploadFiles = () => {
  const {project_id} = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  console.log("project_id",project_id);

  const pages = [<ProjectUploadFile project_id={project_id} />,  <ChatBotConfig project_id={project_id} />, <UserSettings project_id={project_id} /> ]

  return (
    <div>
        <SideBarNav setCurrentPage={setCurrentPage} />
        <Box ml={{ base: "full", md: 80 }}>
           {pages[currentPage]}        
        </Box>
    </div>
  )
}

export default UploadFiles;