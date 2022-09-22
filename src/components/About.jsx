import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <Center h="100vh" bg="whitesmoke" display="flex" flexDirection={"column"}>
        <Heading as="h3" m="2rem">
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
          border="1px solid red"
        >
          <Box border="1px solid red">
            <Image
              src="https://i.pinimg.com/474x/db/f2/98/dbf29846182809672f7829ee975e7e79.jpg"
              w="10rem"
              h="10rem"
            />
            <Container>
              <Text>Escribir descripcion</Text>
            </Container>
          </Box>
          <Box border="1px solid red" colorScheme="pink">
            <Text>Technologies and tools</Text>
            <Wrap
              border="1px solid yellow"
              w={{ lg: "40vw", xl: "40vw" }}
              align={"center"}
              justify="center"
              spacing={6}
            >
              <WrapItem border="1px solid gray" p={1} m={"1rem"}>
                <Icon as={SiJavascript} h={4} w={4} m={2} />{" "}
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
