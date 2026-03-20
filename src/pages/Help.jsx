import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Link,
  SimpleGrid,
  Container,
  Divider,
  Button,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import {
  FaQuestionCircle,
  FaSearch,
  FaShieldAlt,
  FaUser,
  FaComments,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaExclamationTriangle,
  FaMobile,
  FaDownload,
  FaRocket,
  FaLock,
  FaSmile,
  FaGlobe,
  FaCheckCircle,
  FaCommentDots,
  FaStar,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const HelpSupport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const bgGradient = useColorModeValue(
    "linear(to-b, pink.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const highlightBg = useColorModeValue("pink.50", "gray.600");

  const helpCategories = [
    {
      category: "Getting Started",
      icon: FaRocket,
      color: "blue.400",
      questions: [
        { q: "How do I create an account?", a: "Download the Delbaram app, sign up using your phone number or email, verify your account, and start chatting instantly." },
        { q: "Is Delbaram free to use?", a: "Yes, Delbaram offers free chatting features. Some advanced features may be introduced in the future." },
      ],
    },
    {
      category: "Account & Profile",
      icon: FaUser,
      color: "green.400",
      questions: [
        { q: "Forgot password?", a: "Use the \"Forgot Password\" option on the login screen and follow the instructions." },
        { q: "How can I update my profile?", a: "Go to Profile Settings and edit your personal details." },
        { q: "How do I delete my account?", a: "You can request account deletion from app settings or by contacting support." },
      ],
    },
    {
      category: "Chat & Messaging",
      icon: FaComments,
      color: "purple.400",
      questions: [
        { q: "Are my chats private?", a: "Yes, all chats are private and protected." },
        { q: "Messages not sending?", a: "Check your internet connection and ensure the app is updated to the latest version." },
        { q: "Block or report users", a: "You can block or report users directly from the chat screen." },
      ],
    },
    {
      category: "Safety & Privacy",
      icon: FaShieldAlt,
      color: "red.400",
      questions: [
        { 
          q: "How does Delbaram keep users safe?", 
          a: "We use moderation and reporting systems to maintain a respectful and safe environment for all users." 
        },
      ],
    },
    {
      category: "Technical Support",
      icon: FaMobile,
      color: "orange.400",
      questions: [
        { 
          q: "App crashes or won't open?", 
          a: "If the app crashes or does not open, try restarting your device, updating the app, or reinstalling it." 
        },
      ],
    },
  ];

  // Flatten all help items for search
  const allHelpItems = helpCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.category }))
  );

  const filteredHelpItems = allHelpItems.filter(
    item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box bg={bgGradient} minH="100vh">
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("pink.500", "pink.600")}
        color="white"
        py={{ base: 16, md: 20 }}
        px={6}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="-80px"
          right="-80px"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="whiteAlpha.200"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="-50px"
          left="-50px"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="whiteAlpha.100"
          zIndex={0}
        />
        <Box
          position="absolute"
          top="50%"
          left="20%"
          w="100px"
          h="100px"
          borderRadius="full"
          bg="whiteAlpha.150"
          zIndex={0}
        />

        <VStack spacing={5} maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <Badge
            bg="whiteAlpha.300"
            color="white"
            fontSize="md"
            px={4}
            py={2}
            borderRadius="full"
            mb={2}
          >
            <HStack spacing={2}>
              <Icon as={FaHeadset} />
              <Text>24/7 Support Available</Text>
            </HStack>
          </Badge>
          
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Help & Support
          </Heading>
          
          <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9} maxW="600px">
            We're here to make your chatting experience smooth, safe, and enjoyable.
          </Text>

          {/* Search Bar */}
          <InputGroup maxW="600px" mt={6} size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="whiteAlpha.700" />
            </InputLeftElement>
            <Input
              placeholder="Search for help..."
              borderRadius="full"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "whiteAlpha.600" }}
              _focus={{ bg: "whiteAlpha.300", boxShadow: "none" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          {/* Quick Tags */}
          <Flex wrap="wrap" gap={2} justify="center" mt={4}>
            {["Account", "Password", "Chat", "Privacy", "Technical"].map((tag, idx) => (
              <Tag
                key={idx}
                size="md"
                borderRadius="full"
                variant="solid"
                bg="whiteAlpha.200"
                cursor="pointer"
                _hover={{ bg: "whiteAlpha.300" }}
                onClick={() => setSearchTerm(tag)}
              >
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </Flex>
        </VStack>
      </Box>

      <Container maxW="1100px" py={12} px={6}>
        {/* Welcome Message */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          p={8}
          mb={10}
          border="1px solid"
          borderColor={borderColor}
          boxShadow="lg"
        >
          <VStack spacing={4} align="center" textAlign="center">
            <Icon as={FaHeart} boxSize={12} color={accentColor} />
            <Heading size="lg" color={accentColor}>
              Welcome to Delbaram Help & Support
            </Heading>
            <Text fontSize="md" color={textColor} maxW="700px">
              We're here to make your chatting experience smooth, safe, and enjoyable. 
              If you need assistance, please review the information below or contact our support team.
            </Text>
          </VStack>
        </Box>

        {/* Category Pills */}
        <Flex wrap="wrap" gap={3} justify="center" mb={10}>
          {helpCategories.map((cat, idx) => (
            <Box
              key={idx}
              px={4}
              py={2}
              bg={cardBg}
              borderRadius="full"
              border="1px solid"
              borderColor={borderColor}
              cursor="pointer"
              _hover={{
                bg: cat.color,
                color: "white",
                transform: "scale(1.05)",
              }}
              transition="all 0.3s"
              onClick={() => {
                const element = document.getElementById(`category-${idx}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <HStack spacing={2}>
                <Icon as={cat.icon} boxSize={4} />
                <Text fontSize="sm" fontWeight="medium">
                  {cat.category}
                </Text>
              </HStack>
            </Box>
          ))}
        </Flex>

        {/* Search Results or Help Categories */}
        {searchTerm ? (
          <Box mb={12}>
            <Heading size="lg" mb={6} color={accentColor}>
              Search Results ({filteredHelpItems.length})
            </Heading>
            {filteredHelpItems.length > 0 ? (
              <VStack spacing={4} align="stretch">
                {filteredHelpItems.map((item, idx) => (
                  <Box
                    key={idx}
                    bg={cardBg}
                    p={6}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={borderColor}
                    _hover={{ borderColor: accentColor, transform: "translateY(-2px)" }}
                    transition="all 0.3s"
                  >
                    <Badge mb={3} colorScheme="pink">
                      {item.category}
                    </Badge>
                    <Heading size="sm" mb={2}>
                      {item.q}
                    </Heading>
                    <Text fontSize="sm" color={textColor}>
                      {item.a}
                    </Text>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Box textAlign="center" py={10}>
                <Icon as={FaQuestionCircle} boxSize={16} color={borderColor} mb={4} />
                <Text fontSize="lg" color={textColor}>
                  No results found for "{searchTerm}"
                </Text>
                <Button
                  mt={4}
                  colorScheme="pink"
                  variant="outline"
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </Button>
              </Box>
            )}
          </Box>
        ) : (
          /* Help Categories with Accordion */
          helpCategories.map((category, catIdx) => (
            <Box
              key={catIdx}
              id={`category-${catIdx}`}
              mb={8}
              scrollMarginTop="20px"
            >
              <HStack spacing={3} mb={4}>
                <Flex
                  w="50px"
                  h="50px"
                  bg={category.color}
                  borderRadius="lg"
                  align="center"
                  justify="center"
                  boxShadow="md"
                >
                  <Icon as={category.icon} boxSize={6} color="white" />
                </Flex>
                <Heading size="lg" color={category.color}>
                  {category.category}
                </Heading>
              </HStack>

              <Accordion allowToggle borderColor={borderColor}>
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="lg"
                    mb={3}
                    bg={cardBg}
                    _hover={{ borderColor: category.color }}
                  >
                    <h3>
                      <AccordionButton
                        py={4}
                        _expanded={{ bg: highlightBg, color: category.color }}
                      >
                        <Box flex="1" textAlign="left" fontWeight="medium">
                          <HStack spacing={3}>
                            <Icon as={FaQuestionCircle} boxSize={4} color={category.color} />
                            <Text>{item.q}</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4} bg={useColorModeValue("gray.50", "gray.600")}>
                      <Text color={textColor}>{item.a}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))
        )}

        {/* Quick Contact Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
          <Box
            bg={cardBg}
            p={6}
            borderRadius="xl"
            textAlign="center"
            border="1px solid"
            borderColor={borderColor}
            _hover={{ transform: "translateY(-5px)", borderColor: accentColor }}
            transition="all 0.3s"
          >
            <Flex
              w="60px"
              h="60px"
              bg="blue.100"
              borderRadius="full"
              align="center"
              justify="center"
              mx="auto"
              mb={4}
            >
              <Icon as={FaEnvelope} boxSize={8} color="blue.500" />
            </Flex>
            <Heading size="md" mb={2}>
              Email Support
            </Heading>
            <Text fontSize="sm" color={textColor} mb={3}>
              support@delbaram.com
            </Text>
            <Link
              href="mailto:support@delbaram.com"
              color={accentColor}
              fontWeight="medium"
            >
              Send Email <Icon as={FaArrowRight} boxSize={3} ml={1} />
            </Link>
          </Box>

          <Box
            bg={cardBg}
            p={6}
            borderRadius="xl"
            textAlign="center"
            border="1px solid"
            borderColor={borderColor}
            _hover={{ transform: "translateY(-5px)", borderColor: accentColor }}
            transition="all 0.3s"
          >
            <Flex
              w="60px"
              h="60px"
              bg="green.100"
              borderRadius="full"
              align="center"
              justify="center"
              mx="auto"
              mb={4}
            >
              <Icon as={FaHeadset} boxSize={8} color="green.500" />
            </Flex>
            <Heading size="md" mb={2}>
              In-App Support
            </Heading>
            <Text fontSize="sm" color={textColor} mb={3}>
              Available 24/7
            </Text>
            <Text color={accentColor} fontWeight="medium">
              Open App <Icon as={FaArrowRight} boxSize={3} ml={1} />
            </Text>
          </Box>

          <Box
            bg={cardBg}
            p={6}
            borderRadius="xl"
            textAlign="center"
            border="1px solid"
            borderColor={borderColor}
            _hover={{ transform: "translateY(-5px)", borderColor: accentColor }}
            transition="all 0.3s"
          >
            <Flex
              w="60px"
              h="60px"
              bg="purple.100"
              borderRadius="full"
              align="center"
              justify="center"
              mx="auto"
              mb={4}
            >
              <Icon as={FaDownload} boxSize={8} color="purple.500" />
            </Flex>
            <Heading size="md" mb={2}>
              Download App
            </Heading>
            <Link
              href="https://play.google.com/store/apps/details?id=com.rssc.delbaram"
              isExternal
              color={accentColor}
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Google Play Store
            </Link>
          </Box>
        </SimpleGrid>

        {/* Additional Info Box */}
        <Box
          mt={12}
          bg={highlightBg}
          borderRadius="2xl"
          p={8}
          border="1px solid"
          borderColor={borderColor}
        >
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={6}>
            <VStack align="flex-start" spacing={2}>
              <Heading size="md" color={accentColor}>
                Still need help?
              </Heading>
              <Text fontSize="sm" color={textColor}>
                Our support team is available 24/7 to assist you with any questions or concerns.
              </Text>
              <HStack spacing={4} mt={2}>
                <HStack>
                  <Icon as={FaEnvelope} color={accentColor} />
                  <Text fontSize="sm" fontWeight="medium">help@delbaram.com</Text>
                </HStack>
                <Text fontSize="sm" color={borderColor}>|</Text>
                <HStack>
                  <Icon as={FaDownload} color={accentColor} />
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.rssc.delbaram"
                    isExternal
                    fontSize="sm"
                    fontWeight="medium"
                    color={accentColor}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Download App
                  </Link>
                </HStack>
              </HStack>
              <Text fontSize="xs" color={textColor} mt={1}>
                Last Updated: January 2026
              </Text>
            </VStack>
            <Button
              as={RouterLink}
              to="/help"
              size="lg"
              bg={accentColor}
              color="white"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="full"
              px={8}
              leftIcon={<FaHeart />}
            >
             Thank You
            </Button>
          </Flex>
        </Box>

        {/* Footer Note */}
        <Text fontSize="sm" color={textColor} textAlign="center" mt={8} opacity={0.7}>
          Thank you for choosing Delbaram. We're here to help!
        </Text>
      </Container>
    </Box>
  );
};

export default HelpSupport;