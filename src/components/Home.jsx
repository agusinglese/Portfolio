import {
  Box,
  Center,
  Heading,
  Icon,
  Link,
  chakra,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import { AiFillCaretUp } from "react-icons/ai";
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
      <Center h="100vh" bgImage="linear-gradient(blue,pink)">
        <ChakraBox
          animate={{
            scale: [0, 1],
            rotate: [-45, -45],

            borderRadius: ["4rem", "4rem"],
          }}
          // @ts-ignore no problem in operation, although type error appears.
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
        <Box
          h="5rem"
          w="15rem"
          borderRadius="4rem"
          bgColor="red"
          position={"absolute"}
          left={0}
          top={0}
        ></Box>
        <Box
          h="5rem"
          w="15rem"
          borderRadius="4rem"
          bgColor="red"
          position={"absolute"}
        ></Box>
        <Box display="flex" flexDirection={"column"} bgColor="#ffffff80">
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
