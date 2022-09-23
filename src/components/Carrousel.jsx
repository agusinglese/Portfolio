import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Carrousel({ img }) {
  const [currentIndexImg, setCurrentIndexImg] = useState(0);

  const handlePrev = () => {
    setCurrentIndexImg(currentIndexImg - 1);
  };

  const handleNext = () => {
    setCurrentIndexImg(currentIndexImg + 1);
  };

  return (
    <>
      <Box>
        <Image src={img[currentIndexImg]} borderTopRadius={7} />
        {currentIndexImg !== 0 && (
          <Button
            onClick={handlePrev}
            position="absolute"
            left="0"
            bottom="45%"
            bgColor="transparent"
            color="black"
            fontSize={"xl"}
          >
            <Icon as={BsChevronLeft} />
          </Button>
        )}
        {currentIndexImg < img.length - 1 && (
          <Button
            onClick={handleNext}
            position="absolute"
            right="0"
            bottom="45%"
            color="black"
            fontSize={"xl"}
            bgColor="transparent"
            _hover={{ bgColor: "#ffffff30" }}
          >
            <Icon as={BsChevronRight} />
          </Button>
        )}
      </Box>
    </>
  );
}

export default Carrousel;
