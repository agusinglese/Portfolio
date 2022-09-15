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
import { SiJavascript } from "react-icons/si";
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
          <Box border="1px solid red">
            <Text>Skills</Text>
            <Wrap>
              <WrapItem>
                <Icon as={SiJavascript} /> JavaScript
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default About;
