import Link from "next/link";
import Image from "next/image";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { millify } from "millify";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

import DefaultImage from "assert/images/banner2.jpeg";

export const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex
        flexWrap="wrap"
        w="410px"
        padding="5"
        cursor="pointer"
        justifyContent="flex-start"
        className="background-box"
        borderRadius="10px"
      >
        <Box height="290">
          <Image
            src={coverPhoto ? coverPhoto?.url : DefaultImage}
            alt="house"
            width="400"
            height="260"
            className="card-image"
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.200">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                ₹ {millify(price)} {rentFrequency && `/ ${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
          >
            {rooms} <FaBed color="#9AE6B4" /> | {baths}{" "}
            <FaBath color="#9AE6B4" /> |{millify(area)} | sqft{" "}
            <BsGridFill color="#9AE6B4" />
          </Flex>
          <Text fontSize="lg" color="whiteAlpha.800">
            {title?.length > 30 ? `${title?.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
