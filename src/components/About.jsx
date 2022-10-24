import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import profileImg from "../assets/profile.jpeg";
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiChakraui,
  SiVisualstudiocode,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMaterialui,
  SiSequelize,
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
        <Box
          w="30%"
          display="flex"
          justifyContent={"start"}
          mb="0.5rem"
          mt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
        >
          <Box w="60%" bgColor="black" h="0.2rem" borderRadius={"30%"}></Box>
        </Box>

        <Heading
          as="h3"
          size="2xl"
          fontWeight={"medium"}
          mb="0.5rem"
          w="100%"
          textAlign={"center"}
          letterSpacing="0.5rem"
        >
          ABOUT
        </Heading>
        <Box w="30%" display="flex" justifyContent={"end"} mt="0.5rem">
          <Box w="60%" bgColor="black" h="0.2rem" borderRadius={"30%"}></Box>
        </Box>

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
          mb={{ base: "1rem", sm: "1rem" }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src={profileImg} h="15rem" mt="3rem" borderRadius="1rem" />
            <Container w="80%" m="1rem">
              <Text textAlign={"center"}>
                I'm an{" "}
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
            <Center w="90%" m="1rem">
              <Text textAlign={"center"} color="blue.900" fontSize={"xl"}>
                Technologies and tools with which I have worked:
              </Text>
            </Center>
            <Box
              w={{
                base: "95vw",
                sm: "95vw",
                md: "95vw",
                lg: "50vw",
                xl: "50vw",
              }}
              m="0.5rem"
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Center
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "30%",
                  xl: "30%",
                }}
                bgColor="pink.300"
                borderTopRadius="1rem"
              >
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
                borderBottomRadius="1rem"
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={SiJavascript} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>JavaScript</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiHtml5} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>HTML</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiCss3} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>CSS</Text>
                </Box>
              </Box>
            </Box>
            <Box
              w={{
                base: "95vw",
                sm: "95vw",
                md: "95vw",
                lg: "50vw",
                xl: "50vw",
              }}
              m="0.5rem"
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Center
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "30%",
                  xl: "30%",
                }}
                bgColor="pink.300"
                borderTopRadius="1rem"
              >
                <Text fontWeight={"semibold"}>FRONT END</Text>
              </Center>
              <Box
                bgColor="pink.100"
                display="flex"
                flexDirection="row"
                w="100%"
                justifyContent={"space-around"}
                alignItems="center"
                borderBottomRadius="1rem"
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={FaReact} h={5} w={5} m={2} color="#00739e" />
                  <Text m={1}>React</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiRedux} h={5} w={5} m={2} color="#00739e" />
                  <Text m={1}>Redux</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiChakraui} h={5} w={5} m={2} color="#00739e" />
                  <Text m={1}>Chakra UI</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiMaterialui} h={5} w={5} m={2} color="#00739e" />
                  <Text m={1}>Material UI</Text>
                </Box>
              </Box>
            </Box>
            <Box
              w={{
                base: "95vw",
                sm: "95vw",
                md: "95vw",
                lg: "50vw",
                xl: "50vw",
              }}
              m="0.5rem"
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Center
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "30%",
                  xl: "30%",
                }}
                bgColor="pink.300"
                borderTopRadius="1rem"
              >
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
                borderBottomRadius="1rem"
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={FaNodeJs} h={5} w={5} m={2} color="#00739e" />
                  <Text m={1}>Node.js</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiExpress} h={5} w={5} m={2} color="#00739e" />
                  <Text m={1}>Express</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiSequelize} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>Sequelize</Text>
                </Box>
              </Box>
            </Box>
            <Box
              w={{
                base: "95vw",
                sm: "95vw",
                md: "95vw",
                lg: "50vw",
                xl: "50vw",
              }}
              m="0.5rem"
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Center
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "30%",
                  xl: "30%",
                }}
                bgColor="pink.300"
                borderTopRadius="1rem"
              >
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
                borderBottomRadius="1rem"
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={SiPostgresql} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>PostgresSQL</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={SiMongodb} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>MongoDb</Text>
                </Box>
              </Box>
            </Box>
            <Box
              w={{
                base: "95vw",
                sm: "95vw",
                md: "95vw",
                lg: "50vw",
                xl: "50vw",
              }}
              m="0.5rem"
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Center
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "30%",
                  xl: "30%",
                }}
                bgColor="pink.300"
                borderTopRadius="1rem"
              >
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
                borderBottomRadius="1rem"
              >
                <Box display="flex" flexDirection="row">
                  <Icon as={FaGitAlt} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>Git</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon as={FaGithub} h={5} w={5} m={2} color="#00739e" />{" "}
                  <Text m={1}>GitHub</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Icon
                    as={SiVisualstudiocode}
                    h={4}
                    w={4}
                    m={2}
                    color="#00739e"
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
