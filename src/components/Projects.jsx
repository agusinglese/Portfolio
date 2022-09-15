import {
  Box,
  Button,
  Center,
  Container,
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
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../assets/projectsData";

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
        <Wrap>
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{currentProject.name}</ModalBody>

          <ModalFooter>
            <Link href={currentProject.gitHub} isExternal>
              <Icon as={AiFillGithub} h={4} m={4} />
            </Link>
            <Link href={currentProject.deploy} isExternal>
              <Icon as={BiLinkExternal} h={4} m={4} />
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Projects;
