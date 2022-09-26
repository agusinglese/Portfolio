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
      <Center minH="90vh" flexDirection={"column"} bg="whitesmoke">
        <Heading as="h3" mb="5rem">
          PROJECTS
        </Heading>
        <Wrap justifyContent={"center"} alignItems="center">
          {projects.map((e) => (
            <WrapItem>
              <Box>
                <Box
                  h="300px"
                  w="400px"
                  m={0}
                  backgroundPosition="center"
                  bgSize={"cover"}
                  backgroundRepeat="no-repeat"
                  backgroundImage={`url(${e.bgImg})`}
                >
                  <Box
                    bgColor={"#ffffff"}
                    opacity="0"
                    _hover={{ opacity: "1" }}
                    h="300px"
                    w="400px"
                    transition="opacity 1s"
                    //position="absolute"

                    sx={innerBoxStyles}
                  >
                    <Heading
                      colorScheme="pink"
                      as="h6"
                      fontSize="4xl"
                      fontWeight={"hairline"}
                    >
                      {e.name.toUpperCase()}
                    </Heading>
                    <Text
                      colorScheme="pink"
                      mb="4rem"
                      color="pink.600"
                      fontWeight={"thin"}
                    >
                      {e.primaryTec.join(" / ")}
                    </Text>
                    <Button
                      onClick={() => searchProject(e.id)}
                      colorScheme="pink"
                      variant="outline"
                      letterSpacing={"wider"}
                      borderRadius="0"
                      fontSize={"xl"}
                      fontWeight={"light"}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Carrousel img={currentProject.img} />
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
