import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Text,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../assets/projectsData";
import Carrousel from "./Carrousel";

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentProject, setCurrentProject] = useState({});
  const innerBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: "20px",
  };
  const searchProject = (id) => {
    let search = projects.find((e) => e.id === id);
    setCurrentProject(search);
    onOpen();
  };

  return (
    <>
      <Center h="100vh" flexDirection={"column"}>
        <Heading as="h3">PROJECTS</Heading>
        <Wrap justifyContent={"center"} alignItems="center">
          {projects.map((e) => (
            <WrapItem>
              <Box>
                <Box
                  h="300px"
                  w="400px"
                  border="1px solid black"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundImage="url(https://avalos.sv/wp-content/uploads/default-featured-image.png)"
                >
                  <Box
                    bgColor={"#FFFFFF90"}
                    opacity="0"
                    _hover={{ opacity: "1" }}
                    h="300px"
                    w="400px"
                    transition="opacity 1s"
                    //position="absolute"

                    sx={innerBoxStyles}
                  >
                    <Heading as="h6">{e.name}</Heading>
                    <Text>{e.primaryTec.join(" / ")}</Text>
                    <Button
                      bgColor={"black"}
                      onClick={() => searchProject(e.id)}
                      color="white"
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
                <Text>{e.name}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Carrousel />
          </ModalBody>
          <ModalHeader>
            {currentProject.name}
            <Divider />
          </ModalHeader>
          <ModalCloseButton />
          <Box m="0 2rem" textAlign={"justify"}>
            <Text fontSize={"0.9rem"}>{currentProject.description}</Text>
          </Box>

          <ModalFooter p="0">
            <Link href={currentProject.gitHub} isExternal>
              <Icon as={AiFillGithub} h={5} w={5} m={3} />
            </Link>
            <Link href={currentProject.deploy} isExternal>
              <Icon as={BiLinkExternal} h={5} w={5} m={3} />
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Projects;
