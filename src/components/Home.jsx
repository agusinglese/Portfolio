import {
  Box,
  Center,
  Heading,
  Icon,
  Link,
  chakra,
  shouldForwardProp,
  Text,
  Spacer,
} from "@chakra-ui/react";

import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function Home() {
  return (
    <>
      <Center
        h="100vh"
        bgImage="linear-gradient(#2C5282,#3182CE,#2C5282)"
        display="flex"
        alignItems={"center"}
      >
        <Box display="flex" flexDirection={"column"} alignItems="center">
          {" "}
          <ChakraBox
            animate={{
              scale: [0, 1],
              translateX: [3000, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Heading as="h1" m="1rem" fontSize="6xl">
              Hi! I'm
            </Heading>
          </ChakraBox>
          <ChakraBox
            animate={{
              scale: [0, 1],
              translateX: [-2000, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            display="flex"
            flexDirection={"column"}
          >
            <Heading as="h1" fontSize="7xl">
              Agustina Inglese
            </Heading>
          </ChakraBox>
          <ChakraBox
            animate={{
              scale: [0, 1],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
            }}
            display="flex"
            flexDirection={"column"}
          >
            <Text
              textAlign={"center"}
              m="1rem"
              fontWeight={"thin"}
              letterSpacing="wider"
              fontSize={"3xl"}
            >
              FullStack Web Developer | Industrial Engineer
            </Text>
          </ChakraBox>
        </Box>
      </Center>
    </>
  );
}

export default Home;
