import { Box, Button, ButtonGroup } from "@chakra-ui/react";

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
          <Button variant="ghost">HOME</Button>
          <Button variant="ghost">ABOUT</Button>
          <Button variant="ghost">PROJECTS</Button>
          <Button variant="ghost">CONTACT</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default NavBar;
