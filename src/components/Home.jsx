import { Box, Center, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { AiFillCaretUp } from "react-icons/ai";
function Home() {
  return (
    <>
      <Center h="100vh" border="1px solid red">
        <Box
          display="flex"
          flexDirection={"column"}
          bgColor="#ffffff80"
          p="3rem"
        >
          <Heading as="h1" m="1rem">
            Hi! I'm Agustina Inglese
          </Heading>

          <Text
            textAlign={"center"}
            m="1rem"
            fontWeight={"thin"}
            letterSpacing="wider"
          >
            FullStack Web Developer | Industrial Engineer
          </Text>
        </Box>
        <Link href="#home">
          <Icon
            as={AiFillCaretUp}
            position="fixed"
            bottom="0"
            right="0"
            m="2rem"
            h={10}
            w={10}
            color="white"
            border="1px solid black"
            bgColor="black"
          />
        </Link>
      </Center>
    </>
  );
}

export default Home;
