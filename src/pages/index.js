import { Box, Flex } from "@chakra-ui/layout";

import { Banner } from "components/banner";
import BannerImage1 from "assert/images/banner.jpeg";
import BannerImage2 from "assert/images/banner2.jpeg";
import { baseUrl, fetchApi } from "utils/fetchApi";
import { Property } from "components/property";

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, Villas, Homes"
        description2="and mpre"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={BannerImage1}
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & OWn Your"
        title2="Dream Home"
        description1="Explore Apartments, Villas, Homes"
        description2="and mpre"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl={BannerImage2}
      />
      {/* {propertyForSale.map((property) => <Property property={property} key={property.id} />)} */}
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
