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
          <Link href="#home">
            <Button variant="ghost">HOME</Button>
          </Link>
          <Link href="#about">
            <Button variant="ghost">ABOUT</Button>
          </Link>
          <Link href="#projects">
            <Button variant="ghost">PROJECTS</Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost">CONTACT</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default NavBar;
