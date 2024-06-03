import { Box, Flex, Text, VStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaChartBar, FaCog, FaHome } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Flex height="100vh" flexDirection="column">
      {/* Navigation Bar */}
      <Flex as="nav" bg={bg} color={color} p={4} justifyContent="space-between" alignItems="center" boxShadow="md">
        <Text fontSize="xl" fontWeight="bold">Dashboard App</Text>
        <IconButton
          aria-label="Toggle Color Mode"
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          onClick={toggleColorMode}
        />
      </Flex>

      <Flex flex="1">
        {/* Sidebar */}
        <Box as="aside" width="250px" bg={bg} p={4} boxShadow="md">
          <VStack spacing={4} align="stretch">
            <IconButton aria-label="Home" icon={<FaHome />} />
            <IconButton aria-label="Analytics" icon={<FaChartBar />} />
            <IconButton aria-label="Settings" icon={<FaCog />} />
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box as="main" flex="1" p={4} bg={useColorModeValue("white", "gray.800")} color={color}>
          <Text fontSize="2xl" mb={4}>Welcome to your Dashboard</Text>
          <Text>This is where your widgets and data visualizations will appear.</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;