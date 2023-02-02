import { Box, Avatar, Flex, Spacer, Text } from "@chakra-ui/react";
import { millify } from "millify";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

import { baseUrl, fetchApi } from "utils/fetchApi";
import { ImageScrollBar } from "components/imageScrollBar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    title,
    baths,
    rooms,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    photos,
    amenities,
  },
}) => (
  <Box
    margin="auto"
    p="4"
    width="1280px"
    backgroundColor="#4e4e50"
    marginTop="10"
    borderRadius="10px"
  >
    {photos && <ImageScrollBar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center">
        <Box paddingRight="3" color="green.200">
          {isVerified && <GoVerified />}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          AED {price} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
      </Flex>
      <Flex alignItems="center" p="1" justifyContent="space-between" w="250px">
        {rooms}
        <FaBed color="#9AE6B4" /> | {baths} <FaBath color="#9AE6B4" /> |{" "}
        {millify(area)} sqft <BsGridFill color="#9AE6B4" />
      </Flex>
    </Box>
    <Box marginTop="2">
      <Text fontSize="lg" marginBottom="2" fontWeight="bold">
        {title}
      </Text>
      <Text lineHeight="2" color="gray.100">
        {description}
      </Text>
    </Box>
    <Flex
      flexWrap="wrap"
      textTransform="uppercase"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
      >
        <Text>Type</Text>
        <Text fontWeight="bold">{type}</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
      >
        <Text>Purpose</Text>
        <Text fontWeight="bold">{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Furnishing Status</Text>
          <Text fontWeight="bold">{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities?.length && (
        <Text fontSize="2xl" fontWeight="black" marginTop="5">
          Facilites:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text
              key={amenity.text}
              fontWeight="bold"
              color="gray.600"
              fontSize="l"
              p="2"
              bg="white"
              m="1"
              borderRadius="5"
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  console.log("data");

  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
