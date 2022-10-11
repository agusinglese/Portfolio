import { Box, Button, ButtonGroup, Icon, Link } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <>
      <Box bgColor="#00739e" h="20vh" w="100%">
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
              h="3rem"
              w="3rem"
              _hover={{
                transform: "scale(1.5)",
              }}
              bgColor="whitesmoke"
            >
              <Icon as={FaLinkedinIn} h={6} w={6} color="#00739e" />
            </Button>
          </Link>
          <Link href="https://github.com/agusinglese" isExternal>
            <Button
              colorScheme={"pink"}
              borderRadius="0"
              h="3rem"
              w="3rem"
              ml="2rem"
              mr="2rem"
              bgColor="whitesmoke"
              _hover={{
                transform: "scale(1.5)",
              }}
            >
              <Icon as={AiFillGithub} h={6} w={6} color="#00739e" />
            </Button>
          </Link>

          <Link href="mailto: ingleseagustina@gmail.com" isExternal>
            <Button
              colorScheme={"pink"}
              borderRadius="0"
              h="3rem"
              w="3rem"
              mr="2rem"
              bgColor="whitesmoke"
              _hover={{
                transform: "scale(1.5)",
              }}
            >
              <Icon as={SiGmail} h={6} w={6} color="#00739e" />
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Footer;
