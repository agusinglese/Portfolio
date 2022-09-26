import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_tgh7sxu",
        "template_z8tq6lv",
        form.current,
        "-n_rrn-bKOvRUdQOn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Center h="100vh" flexDirection={"column"}>
        <Box>
          <Heading as="h3" mb="5rem">
            CONTACT
          </Heading>
        </Box>
        <Box>
          <form ref={form} onSubmit={sendEmail} name="form">
            <FormControl isRequired>
              <Input
                bgColor="white"
                name="name"
                type="text"
                placeholder="Your name"
                m={2}
                w={{
                  base: "80vw",
                  sm: "80vw",
                  md: "50vw",
                  lg: "30vh",
                  xl: "30vw",
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                bgColor="white"
                w={{
                  base: "80vw",
                  sm: "80vw",
                  md: "50vw",
                  lg: "30vh",
                  xl: "30vw",
                }}
                m={2}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormControl isRequired>
              <Textarea
                bgColor="white"
                w={{
                  base: "80vw",
                  sm: "80vw",
                  md: "50vw",
                  lg: "30vh",
                  xl: "30vw",
                }}
                m={2}
                name="message"
                type="text"
                placeholder="Your message"
              />
            </FormControl>
            <Box display={"flex"} flexDirection="column" alignItems={"center"}>
              <Button
                w="8rem"
                m={2}
                isLoading={sending}
                loadingText="Loading"
                colorScheme="pink"
                spinnerPlacement="start"
                value="Send"
                type="submit"
              >
                Send
              </Button>
              {sent && <Text color="green.400">Message sent!</Text>}
            </Box>
          </form>
        </Box>
      </Center>
    </>
  );
}

export default Contact;
