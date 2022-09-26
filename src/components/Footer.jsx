import { Box, Button, ButtonGroup, Icon, Link } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <>
      <Box bgColor="#2C5282" h="20vh" w="100%">
        <ButtonGroup
          h="100%"
          justifyContent={"center"}
          alignItems="center"
          display="flex"
        >
          <Link href="https://www.linkedin.com/in/agustina-inglese/" isExternal>
            <Button
              colorScheme={"pink"}
              borderRadius="0"
              h="2rem"
              w="2rem"
              _hover={{
                transform: "scale(1.5)",
              }}
            >
              <Icon as={FaLinkedinIn} h={4} w={4} />
            </Button>
          </Link>
          <Link href="https://github.com/agusinglese" isExternal>
            <Button
              colorScheme={"pink"}
              borderRadius="0"
              h="2rem"
              w="2rem"
              ml="2rem"
              mr="2rem"
              _hover={{
                transform: "scale(1.5)",
              }}
            >
              <Icon as={AiFillGithub} h={4} w={4} />
            </Button>
          </Link>

          <Button
            colorScheme={"pink"}
            borderRadius="0"
            h="2rem"
            w="2rem"
            m="2rem"
            _hover={{
              transform: "scale(1.5)",
            }}
          >
            <Icon as={SiGmail} h={4} w={4} />
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Footer;
