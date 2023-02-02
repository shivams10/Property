import { Box, Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { filterData, getFilterValues } from "utils/filterData";

export function SearchFilter() {
  const [filters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      query[item.name] = item.value;
    });
    router.push({ pathname: path, query });
  };

  return (
    <Flex
      bg="#4e4e50"
      p="4"
      justifyContent="center"
      flexWrap="wrap"
      borderBottomRadius="10px"
    >
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}
