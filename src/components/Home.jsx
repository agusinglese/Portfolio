import { Box, Center, Heading, Spacer, Text } from "@chakra-ui/react";

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

          <Text textAlign={"center"} m="1rem">
            FullStack Web Developer | Industrial Engineer
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default Home;
