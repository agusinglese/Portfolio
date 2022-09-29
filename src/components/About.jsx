import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Icon,
  Image,
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
  SiVisualstudiocode,
  SiHeroku,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <Center minH="100vh" display="flex" flexDirection={"column"}>
        <Heading as="h3" mb="1rem">
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
          justifyContent={"space-around"}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="1rem"
          >
            <Box
              position={"absolute"}
              h="30rem"
              w="35rem"
              bgColor="yellow.100"
              p="1rem"
              transform={"skew(10deg)"}
              zIndex="-1"
              borderRadius={"5rem"}
            ></Box>
            <Image src={profileImg} h="15rem" mt="3rem" />
            <Container w="70%" m="1rem">
              <Text textAlign={"center"}>
                I am an{" "}
                <Text as="b" color="blue.400" display={"inline"}>
                  Industrial Engineer
                </Text>{" "}
                and{" "}
                <Text as="b" color="blue.400" display={"inline"}>
                  Full Stack Developer
                </Text>{" "}
                in Spain. It's my passion to complement my studies to solve the
                problems that arise in companies daily. I focus on details and
                creating intuitive and dynamic user experiences.
              </Text>
            </Container>
          </Box>
          <Box colorScheme="pink">
            <Text
              p="1rem"
              textAlign={"center"}
              fontSize="2xl"
              fontWeight={"hairline"}
            >
              Technologies and tools
            </Text>
            <Wrap
              p="3rem"
              w={{ lg: "40vw", xl: "40vw" }}
              align={"center"}
              justify="center"
              spacing={6}
            >
              <WrapItem p={1} m={"1rem"}>
                <Icon as={SiJavascript} h={4} w={4} m={2} color="blue.500" />{" "}
                <Text m={1}>JavaScript</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m={"1rem"}>
                <Icon as={SiHtml5} h={4} w={4} m={2} /> <Text m={1}>HTML</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m={"1rem"}>
                <Icon as={SiCss3} h={4} w={4} m={2} /> <Text m={1}>CSS</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m={"1rem"}>
                <Icon as={FaReact} h={4} w={4} m={2} /> <Text m={1}>React</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m={"1rem"}>
                <Icon as={SiRedux} h={4} w={4} m={2} />{" "}
                <Text m={1}>Redux/Redux Toolkit</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m={"1rem"}>
                <Icon as={FaNodeJs} h={4} w={4} m={2} />{" "}
                <Text m={1}>Node.js</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={SiExpress} h={4} w={4} m={2} />{" "}
                <Text m={1}>Express</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={FaGitAlt} h={4} w={4} m={2} /> <Text m={1}>Git</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={SiPostgresql} h={4} w={4} m={2} />{" "}
                <Text m={1}>PostgresSQL</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={SiMongodb} h={4} w={4} m={2} />{" "}
                <Text m={1}>MongoDb</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={SiVisualstudiocode} h={4} w={4} m={2} />{" "}
                <Text m={1}>VS Code</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={SiHeroku} h={4} w={4} m={2} />{" "}
                <Text m={1}>Heroku</Text>
              </WrapItem>
              <WrapItem border="1px solid gray" p={1} m="1rem">
                <Icon as={SiVercel} h={4} w={4} m={2} />{" "}
                <Text m={1}>Vercel</Text>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default About;
