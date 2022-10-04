import {
  Box,
  Center,
  Code,
  Container,
  Divider,
  Heading,
  Icon,
  Image,
  Spacer,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import profileImg from "../assets/profile.jpeg";
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiChakraui,
  SiVisualstudiocode,
  SiHeroku,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiMongodb,
  SiMaterialui,
  SiBootstrap,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

function About() {
  return (
    <>
      <Center
        minH="110vh"
        display="flex"
        flexDirection={"column"}
        bgColor="whitesmoke"
      >
        <Heading as="h3" mb="2rem">
          ABOUT
        </Heading>

        <Box
          display="flex"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          w="100%"
          justifyContent={"center"}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {/*<Box
              position={"absolute"}
              h="30rem"
              w="30rem"
              bgColor="blue.300"
              p="1rem"
              zIndex="-1"
            ></Box>*/}
            <Image src={profileImg} h="15rem" mt="3rem" />
            <Container w="70%" m="1rem">
              <Text textAlign={"center"}>
                I am an{" "}
                <Text as="b" color="blue.900" display={"inline"}>
                  Industrial Engineer
                </Text>{" "}
                and{" "}
                <Text as="b" color="blue.900" display={"inline"}>
                  Full Stack Developer
                </Text>{" "}
                in Spain. It's my passion to complement my studies to solve the
                problems that arise in companies daily. I focus on details and
                creating intuitive and dynamic user experiences.
              </Text>
            </Container>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"start"}
            alignItems={"start"}
            pt={"3rem"}
          >
            <Center w="100%" m="1rem">
              <Text textAlign={"center"} color="blue.900" fontSize={"xl"}>
                Technologies and tools with which I have worked:
              </Text>
            </Center>
            <Box w="50vw" m="0.5rem" display={"flex"} flexDirection="row">
              <Center w="30%" bgColor="pink.300">
                <Text textAlign={"center"} fontWeight={"semibold"}>
                  CODE
                </Text>
              </Center>
              <Box
                display="flex"
                flexDirection="row"
                w="100%"
                bgColor="pink.100"
                justifyContent={"space-around"}
                fontWeight={"light"}
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={SiJavascript} h={5} w={5} m={2} color="blue.300" />{" "}
                  <Text m={1}>JavaScript</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiHtml5} h={5} w={5} m={2} color="blue.300" />{" "}
                  <Text m={1}>HTML</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiCss3} h={5} w={5} m={2} color="blue.300" />{" "}
                  <Text m={1}>CSS</Text>
                </Box>
              </Box>
            </Box>
            <Box w="50vw" m="0.5rem" display={"flex"} flexDirection="row">
              <Center w="30%" bgColor="pink.300">
                <Text fontWeight={"semibold"}>FRONT END</Text>
              </Center>
              <Box
                bgColor="pink.100"
                display="flex"
                flexDirection="row"
                w="100%"
                justifyContent={"space-around"}
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={FaReact} h={5} w={5} m={2} color="blue.300" />
                  <Text m={1}>React</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiRedux} h={5} w={5} m={2} color="blue.400" />
                  <Text m={1}>Redux/Redux Toolkit</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiChakraui} h={5} w={5} m={2} color="blue.400" />
                  <Text m={1}>Chakra UI</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiMaterialui} h={5} w={5} m={2} color="blue.400" />
                  <Text m={1}>Material UI</Text>
                </Box>
              </Box>
            </Box>
            <Box w="50vw" m="0.5rem" display={"flex"} flexDirection="row">
              <Center w="30%" bgColor="pink.300">
                <Text textAlign={"center"} fontWeight={"semibold"}>
                  BACK END
                </Text>
              </Center>
              <Box
                bgColor="pink.100"
                display="flex"
                flexDirection="row"
                w="100%"
                justifyContent={"space-around"}
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={FaNodeJs} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>Node.js</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiExpress} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>Express</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiSequelize} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>Sequelize</Text>
                </Box>
              </Box>
            </Box>
            <Box w="50vw" m="0.5rem" display={"flex"} flexDirection="row">
              <Center w="30%" bgColor="pink.300">
                <Text textAlign={"center"} fontWeight={"semibold"}>
                  DATA BASES
                </Text>
              </Center>
              <Box
                bgColor="pink.100"
                display="flex"
                flexDirection="row"
                w="100%"
                justifyContent={"space-around"}
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={SiPostgresql} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>PostgresSQL</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiMongodb} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>MongoDb</Text>
                </Box>
              </Box>
            </Box>
            <Box w="50vw" m="0.5rem" display={"flex"} flexDirection="row">
              <Center w="30%" bgColor="pink.300">
                <Text
                  textAlign={"center"}
                  bgColor="pink.300"
                  fontWeight={"semibold"}
                >
                  TOOLS
                </Text>
              </Center>
              <Box
                bgColor="pink.100"
                display="flex"
                flexDirection="row"
                w="100%"
                justifyContent={"space-around"}
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={FaGitAlt} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>Git</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={FaGithub} h={5} w={5} m={2} color="blue.400" />{" "}
                  <Text m={1}>GitHub</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon
                    as={SiVisualstudiocode}
                    h={4}
                    w={4}
                    m={2}
                    color="blue.400"
                  />{" "}
                  <Text m={1}>VS Code</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default About;
