import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import Image from "next/image";

import { SearchFilter } from "components/searchFilter";
import { Property } from "components/property";
import noResult from "assert/images/noResult.svg";
import { baseUrl, fetchApi } from "utils/fetchApi";

export default function Search({ properties }) {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  return (
    <Box maxWidth="1280px" m="auto">
      <Flex
        cursor="pointer"
        bg="#4e4e50"
        p="2"
        fontWeight="bold"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        marginTop="10"
        borderRadius="10px"
        onClick={() => setSearchFilter((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingleft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilter && <SearchFilter />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap" gap="5">
        {properties?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties?.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noResult} />
          <Text fontSize="2xl" marginTop="3" color="gray.500">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
