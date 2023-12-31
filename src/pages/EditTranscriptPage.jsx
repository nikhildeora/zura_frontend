import {
  Box,
  Heading,
  Flex,
  Input,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBarNav from "../components/SideBarNav";
import BreadCrumbNav from "../components/BreadCrumbNav";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { funChangeFileDescription } from "../redux/actions";

function EditTranscriptPage() {
  const { file_id, project_id } = useParams();
  const { relevant_files } = useSelector((store) => store);
  const [fileBody, setFileBody] = useState({});
  const [editable, setEditable] = useState(false);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let findOne = relevant_files.find((item) => item._id === file_id);
    setFileBody(findOne);
  }, []);

  const discardEdit = () => {
    setEditable(!editable);
    setDescription(fileBody.file_description);
  };

  const saveAndExit = () => {
    if (description !== fileBody.file_description) {
      const changeDesc = {
        file_description: description,
      };
      dispatch(funChangeFileDescription(file_id, project_id, changeDesc));
      navigate(`/projectfileupload/${project_id}`)
    }
  };

  return (
    <Box>
      <SideBarNav project_id={project_id} />
      <Box p={7} ml={{ base: "full", md: 80 }}>
        <BreadCrumbNav
          project_id={project_id}
          currentPage={"Transcript"}
          notSettingPage={true}
        />
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>
            Edit Transcript
          </Heading>
          {editable && (
            <Box>
              <Button
                bgColor={"white"}
                color={"red"}
                border={"1px solid red"}
                onClick={discardEdit}
                mr={"5px"}
              >
                Discard
              </Button>
              <Button 
              bgColor={"black"}
              color={"white"}
              onClick={saveAndExit}>Save & Exit</Button>
            </Box>
          )}
        </Flex>
        <Box border={"1px solid black"} p={2} textAlign={"left"}>
          <HStack
            bgColor={"black"}
            color={"white"}
            w={"fit-content"}
            p={"8px"}
            borderRadius={"12px"}
            onClick={discardEdit}
            cursor={"pointer"}
            mb={"8px"}
          >
            <AiFillEdit />
            <Text> Edit Made</Text>
          </HStack>
          {editable ? (
            <Input
              p={0}
              m={0}
              border={"none"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <Text>{fileBody.file_description}</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default EditTranscriptPage;
