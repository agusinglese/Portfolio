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
        alignItems={{
          base: "start",
          sm: "start",
          md: "start",
          lg: "center",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
          }}
          display="flex"
          flexDirection={"column"}
          alignItems="start"
        >
          <ChakraBox
            ml="2rem"
            animate={{
              scale: [0, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            mt={{ base: "4rem", sm: "10rem", md: "10rem", lg: "0" }}
          >
            <Heading as="h3" fontSize="4xl" fontWeight={"medium"}>
              Hi! I'm
            </Heading>
            <Heading as="h2" fontSize={{ base: "5xl", md: "7xl" }} pb={"1rem"}>
              Agustina Inglese
            </Heading>
            <Text
              fontWeight={"medium"}
              letterSpacing="0.1rem"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              FullStack Web Developer | Industrial Engineer
            </Text>
          </ChakraBox>
        </Box>
        <ChakraBox
          display={"flex"}
          mt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "end",
            xl: "end",
          }}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
          }}
          animate={{
            scale: [0, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image
            zIndex={"-1"}
            src="https://user-images.githubusercontent.com/101023416/195164218-847d5785-f523-46f8-a445-ac062f3a8d3a.png"
          />
        </ChakraBox>
      </Center>
    </>
  );
}

export default Home;
