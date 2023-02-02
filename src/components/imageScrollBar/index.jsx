import { useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="3xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="3xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

export function ImageScrollBar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          width="1170px"
          itemID={item.id}
          overflow="hidden"
          p="1"
          key={item.id}
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            alt="property"
            style={{ borderRadius: "20px", margin: "auto" }}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
