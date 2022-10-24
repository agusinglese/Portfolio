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
        h={{ base: "13vh", lg: "10vh" }}
        w="100%"
        position={"fixed"}
        top="0"
        display={"flex"}
        flexDirection={"column"}
        justifyContent="center"
        alignItems={{ base: "center", lg: "end" }}
        bgColor="#00739e"
        zIndex={"1"}
      >
        <ButtonGroup
          mr={{ base: "0", sm: "0", lg: "1rem", xl: "1rem" }}
          flexWrap="wrap"
          justifyContent={{ base: "center" }}
        >
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Button
              colorScheme={"pink"}
              variant="ghost"
              color="pink.200"
              border="1px solid red"
              pr={{ base: "0.5rem", lg: "1rem" }}
              pl={{ base: "0.5rem", lg: "1rem" }}
            >
              HOME
            </Button>
          </Link>
          <Link href="#about" _hover={{ textDecoration: "none" }}>
            <Button
              textDecorationLine={"none"}
              colorScheme={"pink"}
              variant="ghost"
              color="pink.200"
              pr={{ base: "0.5rem", lg: "1rem" }}
              pl={{ base: "0.5rem", lg: "1rem" }}
            >
              ABOUT
            </Button>
          </Link>
          <Link href="#projects" _hover={{ textDecoration: "none" }}>
            <Button
              colorScheme={"pink"}
              color="pink.200"
              variant="ghost"
              pr={{ base: "0.5rem", lg: "1rem" }}
              pl={{ base: "0.5rem", lg: "1rem" }}
            >
              PROJECTS
            </Button>
          </Link>
          <Link href="#contact" _hover={{ textDecoration: "none" }}>
            <Button
              colorScheme={"pink"}
              color="pink.200"
              variant="ghost"
              pr={{ base: "0.5rem", lg: "1rem" }}
              pl={{ base: "0.5rem", lg: "1rem" }}
            >
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
            zIndex="1"
          />
        </Link>
      )}
    </>
  );
}

export default NavBar;
