import Image from "next/image";
import Link from "next/link";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export function Banner({
  imageUrl,
  purpose,
  title1,
  title2,
  description1,
  buttonText,
  linkName,
  description2,
}) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner-image" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">
          {description1} <br />
          {description2}
        </Text>
        <Button fontSize="xl" className="secondary-color" p="10">
          <Link
            href={linkName}
            style={{ textDecoration: "none", color: "white" }}
          >
            {buttonText}
          </Link>
        </Button>
      </Box>
    </Flex>
  );
}
