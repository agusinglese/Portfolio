import { Box, Button, ButtonGroup, Link } from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Box
        h="10vh"
        w="100%"
        position={"fixed"}
        top="0"
        display={"flex"}
        flexDirection={"row"}
        justifyContent="end"
        alignItems="center"
        border={"1px solid red"}
      >
        <ButtonGroup border={"1px solid red"} mr="1rem">
          <Link href="#home" textDecoration={"none"}>
            <Button colorScheme={"pink"} variant="ghost">
              HOME
            </Button>
          </Link>
          <Link href="#about" textDecoration={"none"}>
            <Button
              textDecorationLine={"none"}
              colorScheme={"pink"}
              variant="ghost"
            >
              ABOUT
            </Button>
          </Link>
          <Link href="#projects" textDecoration={"none"}>
            <Button colorScheme={"pink"} variant="ghost">
              PROJECTS
            </Button>
          </Link>
          <Link href="#contact" textDecoration={"none"}>
            <Button colorScheme={"pink"} variant="ghost">
              CONTACT
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default NavBar;
