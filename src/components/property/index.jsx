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
    <Link
      href={`/property/${externalId}`}
      passHref
      style={{ textDecoration: "none" }}
    >
      <Flex
        flexWrap="wrap"
        w="420px"
        padding="10"
        paddingTop="20"
        margin="10"
        justifyContent="center"
        cursor="pointer"
        className="background-box"
        borderRadius="10px"
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto?.url : DefaultImage}
            alt="house"
            width="400"
            height="260"
          />
        </Box>
        <Box w="full" color="white">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3">{isVerified && <GoVerified />}</Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar
                width="120px"
                height="50px"
                src={agency?.logo?.url}
              ></Avatar>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} | sqft{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title?.length > 30 ? `${title?.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
