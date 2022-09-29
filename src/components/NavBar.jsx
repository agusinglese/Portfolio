import { Box, Button, ButtonGroup, Link, Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

function NavBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  const scrollHeight = () => {
    let element = document.documentElement,
      ScrollTop = element.scrollTop || document.body.scrollTop,
      ScrollHeight = element.scrollHeight || document.body.scrollHeight;
    let percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;
    setWidth(percent);
  };

  return (
    <>
      <Box
        h="10vh"
        w="100%"
        position={"fixed"}
        top="0"
        display={"flex"}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="end"
        bgColor={"#2C5282"}
      >
        <ButtonGroup mr="1rem">
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Button colorScheme={"pink"} variant="ghost" color="pink.200">
              HOME
            </Button>
          </Link>
          <Link href="#about" _hover={{ textDecoration: "none" }}>
            <Button
              textDecorationLine={"none"}
              colorScheme={"pink"}
              variant="ghost"
              color="pink.200"
            >
              ABOUT
            </Button>
          </Link>
          <Link href="#projects" _hover={{ textDecoration: "none" }}>
            <Button colorScheme={"pink"} color="pink.200" variant="ghost">
              PROJECTS
            </Button>
          </Link>
          <Link href="#contact" _hover={{ textDecoration: "none" }}>
            <Button colorScheme={"pink"} color="pink.200" variant="ghost">
              CONTACT
            </Button>
          </Link>
        </ButtonGroup>
        <Box w="100%" h="7px" position="absolute" bottom="0">
          <Box bgColor="#ED64A6" w={`${width}%`} h="100%"></Box>
        </Box>
      </Box>
      {width !== 0 && (
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
            borderRadius={"3rem"}
            p={2}
            _hover={{ transform: "scale(1.3)" }}
          />
        </Link>
      )}
    </>
  );
}

export default NavBar;
