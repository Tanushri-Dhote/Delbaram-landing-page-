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
} from "@chakra-ui/react";
import {
  FaQuestionCircle,
  FaSearch,
  FaShieldAlt,
  FaLock,
  FaUser,
  FaComments,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaExclamationTriangle,
  FaMobile,
  FaDownload,
} from "react-icons/fa";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const FAQ = () => {
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

  const faqCategories = [
    {
      category: "General",
      icon: FaHeart,
      questions: [
        { q: "What is Delbaram?", a: "Delbaram is an online chatting platform where users can connect, chat in real time, and build meaningful conversations in a safe environment." },
        { q: "Is Delbaram free to use?", a: "Yes, Delbaram is free to use. Some premium features may be added in the future." },
      ],
    },
    {
      category: "Account & Login",
      icon: FaUser,
      questions: [
        { q: "How do I create an account?", a: "Download the Delbaram app, sign up using your phone number or email, verify your account, and start chatting." },
        { q: "I forgot my password. What should I do?", a: "Use the \"Forgot Password\" option on the login screen and follow the steps to reset it." },
        { q: "Can I change my profile details?", a: "Yes, you can update your profile information anytime from Profile Settings." },
        { q: "How do I delete my account?", a: "You can request account deletion from the app settings or contact support." },
      ],
    },
    {
      category: "Chat & Messaging",
      icon: FaComments,
      questions: [
        { q: "Are my chats private?", a: "Yes. Your chats are private and protected. Delbaram respects your privacy." },
        { q: "Why are my messages not sending?", a: "Please check your internet connection and ensure you are using the latest version of the app." },
        { q: "Can I block or report someone?", a: "Yes. You can block or report a user directly from the chat screen." },
      ],
    },
    {
      category: "Safety & Privacy",
      icon: FaShieldAlt,
      questions: [
        { q: "How does Delbaram keep users safe?", a: "We use moderation tools, reporting systems, and privacy controls to ensure a safe community." },
        { q: "What should I do if someone misbehaves?", a: "Block and report the user immediately. Our team reviews all reports seriously." },
      ],
    },
    {
      category: "Technical Issues",
      icon: FaMobile,
      questions: [
        { 
          q: "App not working / crashing?", 
          a: "If the app is not opening or crashing, restart your device, update the app, clear cache (Android), or reinstall the app." 
        },
      ],
    },
  ];

  // Flatten all FAQs for search
  const allFAQs = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.category }))
  );

  const filteredFAQs = allFAQs.filter(
    faq =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box bg={bgGradient} minH="100vh">
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("pink.500", "pink.600")}
        color="white"
        py={{ base: 12, md: 16 }}
        px={6}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="-50px"
          right="-50px"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="whiteAlpha.200"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="-30px"
          left="-30px"
          w="150px"
          h="150px"
          borderRadius="full"
          bg="whiteAlpha.100"
          zIndex={0}
        />

        <VStack spacing={4} maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <Badge
            bg="whiteAlpha.300"
            color="white"
            fontSize="md"
            px={4}
            py={1}
            borderRadius="full"
            mb={2}
          >
            Got Questions?
          </Badge>
          <Heading
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Frequently Asked Questions
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9} maxW="600px">
            Find answers to common questions about Delbaram
          </Text>

          {/* Search Bar */}
          <InputGroup maxW="500px" mt={6} size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="whiteAlpha.700" />
            </InputLeftElement>
            <Input
              placeholder="Search your question..."
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
        </VStack>
      </Box>

      <Container maxW="1100px" py={12} px={6}>
        {/* Category Pills */}
        <Flex wrap="wrap" gap={3} justify="center" mb={10}>
          {faqCategories.map((cat, idx) => (
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
                bg: accentColor,
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

        {/* Search Results or FAQ Categories */}
        {searchTerm ? (
          <Box mb={12}>
            <Heading size="lg" mb={6} color={accentColor}>
              Search Results ({filteredFAQs.length})
            </Heading>
            {filteredFAQs.length > 0 ? (
              <VStack spacing={4} align="stretch">
                {filteredFAQs.map((faq, idx) => (
                  <Box
                    key={idx}
                    bg={cardBg}
                    p={6}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={borderColor}
                  >
                    <Badge mb={3} colorScheme="pink">
                      {faq.category}
                    </Badge>
                    <Heading size="sm" mb={2}>
                      {faq.q}
                    </Heading>
                    <Text fontSize="sm" color={textColor}>
                      {faq.a}
                    </Text>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Box textAlign="center" py={10}>
                <Icon as={FaQuestionCircle} boxSize={16} color={borderColor} mb={4} />
                <Text fontSize="lg" color={textColor}>
                  No questions found matching "{searchTerm}"
                </Text>
              </Box>
            )}
          </Box>
        ) : (
          /* FAQ Categories with Accordion */
          faqCategories.map((category, catIdx) => (
            <Box
              key={catIdx}
              id={`category-${catIdx}`}
              mb={8}
              scrollMarginTop="20px"
            >
              <HStack spacing={3} mb={4}>
                <Flex
                  w="40px"
                  h="40px"
                  bg={accentColor}
                  borderRadius="lg"
                  align="center"
                  justify="center"
                >
                  <Icon as={category.icon} boxSize={5} color="white" />
                </Flex>
                <Heading size="lg" color={accentColor}>
                  {category.category}
                </Heading>
              </HStack>

              <Accordion allowToggle borderColor={borderColor}>
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="lg"
                    mb={3}
                    bg={cardBg}
                    _hover={{ borderColor: accentColor }}
                  >
                    <h3>
                      <AccordionButton
                        py={4}
                        _expanded={{ bg: highlightBg, color: accentColor }}
                      >
                        <Box flex="1" textAlign="left" fontWeight="medium">
                          <HStack spacing={3}>
                            <Icon as={FaQuestionCircle} boxSize={4} color={accentColor} />
                            <Text>{faq.q}</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4} bg={useColorModeValue("gray.50", "gray.600")}>
                      <Text color={textColor}>{faq.a}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))
        )}

        {/* Technical Support Box */}
        <Box
          bg={highlightBg}
          borderRadius="2xl"
          p={8}
          mt={12}
          border="1px solid"
          borderColor={borderColor}
        >
          <VStack spacing={6} align="center" textAlign="center">
            <Icon as={FaExclamationTriangle} boxSize={12} color={accentColor} />
            <Heading size="lg" color={accentColor}>
              Technical Issues?
            </Heading>
            <Text fontSize="md" color={textColor} maxW="600px">
              If the app is not opening or crashing, restart your device, update the app, 
              clear cache (Android), or reinstall the app.
            </Text>
          </VStack>
        </Box>

        {/* Support & Contact */}
        <Box mt={12}>
          <Divider mb={8} borderColor={borderColor} />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              textAlign="center"
              border="1px solid"
              borderColor={borderColor}
            >
              <Flex
                w="50px"
                h="50px"
                bg="blue.100"
                borderRadius="full"
                align="center"
                justify="center"
                mx="auto"
                mb={4}
              >
                <Icon as={FaEnvelope} boxSize={6} color="blue.500" />
              </Flex>
              <Heading size="sm" mb={2}>
                Email Support
              </Heading>
              <Link
                href="mailto:help@delbaram.com"
                color={accentColor}
                fontWeight="medium"
              >
                help@delbaram.com
              </Link>
            </Box>

            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              textAlign="center"
              border="1px solid"
              borderColor={borderColor}
            >
              <Flex
                w="50px"
                h="50px"
                bg="green.100"
                borderRadius="full"
                align="center"
                justify="center"
                mx="auto"
                mb={4}
              >
                <Icon as={FaPhone} boxSize={6} color="green.500" />
              </Flex>
              <Heading size="sm" mb={2}>
                In-App Support
              </Heading>
              <Text fontSize="sm" color={textColor}>
                Help & Support section
              </Text>
            </Box>

            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              textAlign="center"
              border="1px solid"
              borderColor={borderColor}
            >
              <Flex
                w="50px"
                h="50px"
                bg="purple.100"
                borderRadius="full"
                align="center"
                justify="center"
                mx="auto"
                mb={4}
              >
                <Icon as={FaDownload} boxSize={6} color="purple.500" />
              </Flex>
              <Heading size="sm" mb={2}>
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
        </Box>

        {/* Still have questions? */}
        <Box
          mt={12}
          p={8}
          bg={accentColor}
          color="white"
          borderRadius="2xl"
          textAlign="center"
        >
          <Heading size="lg" mb={3}>
            Still have questions?
          </Heading>
          <Text mb={6} opacity={0.9}>
            Can't find the answer you're looking for? Please reach out to our support team.
          </Text>
          <HStack spacing={4} justify="center">
            <Button
              as={RouterLink}
              to="/help"
              size="lg"
              bg="white"
              color={accentColor}
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="full"
              px={8}
              leftIcon={<FaEnvelope />}
            >
              Contact Support
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;