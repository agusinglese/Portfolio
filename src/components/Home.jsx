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
      <Center h="100vh" bgImage="linear-gradient(#2C5282,#3182CE,#2C5282)">
        <ChakraBox
          animate={{
            scale: [0, 1],
            rotate: [-45, -45],
            translate: [("-10px", "-10px"), ("10px", "10px")],

            borderRadius: ["4rem", "4rem"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          width="15rem"
          height="5rem"
          position={"absolute"}
          left={0}
        ></ChakraBox>

        <ChakraBox
          animate={{
            scale: [0, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          display="flex"
          flexDirection={"column"}
          bgColor="#ffffff80"
          p={"3rem"}
        >
          <Heading as="h1" m="1rem" fontSize="6xl">
            Hi! I'm
            <Spacer />
            Agustina Inglese
          </Heading>

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
      </Center>
    </>
  );
}

export default Home;
