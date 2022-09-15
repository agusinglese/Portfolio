import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

function Contact() {
  return (
    <>
      <Center h="100vh" bg="whitesmoke" flexDirection={"column"}>
        <Box>
          <Heading as="h3">CONTACT</Heading>
        </Box>
        <Box>
          <form
            action="mailto:ingleseagustina@gmail.com"
            method="post"
            name="formContact"
          >
            <FormControl>
              <Input name="name" type="text" placeholder="Your name" />
            </FormControl>
            <FormControl>
              <Input name="email" type="text" placeholder="Enter name" />
            </FormControl>
            <FormControl>
              <Textarea name="message" type="text" placeholder="Your message" />
            </FormControl>
            <Input value="Send" type="submit" />
          </form>
        </Box>
      </Center>
    </>
  );
}

export default Contact;
