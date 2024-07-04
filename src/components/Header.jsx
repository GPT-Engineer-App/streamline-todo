import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="blue.500" w="100%" p={4} color="white">
      <Flex align="center" justify="center">
        <Icon as={FaTasks} w={6} h={6} mr={2} />
        <Heading as="h1" size="lg">
          TodoApp
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;