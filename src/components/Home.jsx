import {
  Box,
  Center,
  Heading,
  Image,
  chakra,
  shouldForwardProp,
  Text,
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
        bgImage="linear-gradient(#00739e,#00739e,#003049)"
        display="flex"
        alignItems={"center"}
      >
        <Box w="50%" display="flex" flexDirection={"column"} alignItems="start">
          <ChakraBox
            ml="2rem"
            animate={{
              scale: [0, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Heading as="h3" fontSize="4xl" fontWeight={"medium"}>
              Hi! I'm
            </Heading>
            <Heading as="h2" fontSize="7xl" pb={"1rem"}>
              Agustina Inglese
            </Heading>
            <Text fontWeight={"medium"} letterSpacing="0.1rem" fontSize={"2xl"}>
              FullStack Web Developer | Industrial Engineer
            </Text>
          </ChakraBox>
        </Box>
        <ChakraBox
          display={"flex"}
          justifyContent="end"
          w="50%"
          animate={{
            scale: [0, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image src="https://user-images.githubusercontent.com/101023416/195164218-847d5785-f523-46f8-a445-ac062f3a8d3a.png" />
        </ChakraBox>
      </Center>
    </>
  );
}

export default Home;
