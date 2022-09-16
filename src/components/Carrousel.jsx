import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Carrousel() {
  let imgPrueba = [
    "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    "https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628&width=1024",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHI0gvOBMUyhxMQ0aeg8GeXB8sQ8w1vuEx15FI88e&s",
  ];
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
        <Image src={imgPrueba[currentIndexImg]} h="300px" borderTopRadius={7} />
        {currentIndexImg !== 0 && (
          <Button
            onClick={handlePrev}
            position="absolute"
            left="0"
            bottom="45%"
            bgColor="transparent"
            color="white"
            fontSize={"xl"}
          >
            <Icon as={BsChevronLeft} />
          </Button>
        )}
        {currentIndexImg < imgPrueba.length - 1 && (
          <Button
            onClick={handleNext}
            position="absolute"
            right="0"
            bottom="45%"
            color="white"
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
