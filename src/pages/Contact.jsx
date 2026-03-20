import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Container,
  Divider,
  Link,
  Badge,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaHeart,
  FaHeadset,
  FaCheckCircle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgGradient = useColorModeValue(
    "linear(to-b, pink.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const inputBg = useColorModeValue("gray.50", "gray.600");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["support@delbaram.com", "help@delbaram.com"],
      color: "blue.400",
      bg: "blue.50",
      action: "mailto:support@delbaram.com",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "green.400",
      bg: "green.50",
      action: "tel:+15551234567",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: ["123 Love Street", "New York, NY 10001"],
      color: "purple.400",
      bg: "purple.50",
      action: "https://maps.google.com",
    },
  ];

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
              <Icon as={FaHeart} />
              <Text>We'd Love to Hear From You</Text>
            </HStack>
          </Badge>
          
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Contact Us
          </Heading>
          
          <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9} maxW="600px">
            Have questions? We're here to help. Reach out to us anytime!
          </Text>
        </VStack>
      </Box>

      <Container maxW="1200px" py={12} px={6}>
        {/* Contact Info Cards - Now only 3 cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={12}>
          {contactInfo.map((info, idx) => (
            <Box
              key={idx}
              bg={cardBg}
              p={6}
              borderRadius="xl"
              border="1px solid"
              borderColor={borderColor}
              _hover={{
                transform: "translateY(-5px)",
                borderColor: info.color,
                boxShadow: "xl",
              }}
              transition="all 0.3s"
            >
              <VStack spacing={3}>
                <Flex
                  w="60px"
                  h="60px"
                  bg={info.bg}
                  borderRadius="full"
                  align="center"
                  justify="center"
                >
                  <Icon as={info.icon} boxSize={6} color={info.color} />
                </Flex>
                <Heading size="md" color={info.color}>
                  {info.title}
                </Heading>
                <VStack spacing={1}>
                  {info.details.map((detail, i) => (
                    <Text key={i} fontSize="sm" color={textColor} textAlign="center">
                      {detail}
                    </Text>
                  ))}
                </VStack>
                {info.action && (
                  <Link
                    href={info.action}
                    isExternal={info.action.startsWith("http")}
                    color={accentColor}
                    fontSize="sm"
                    fontWeight="medium"
                    mt={2}
                  >
                    {info.title === "Email Us" ? "Send Email" : 
                     info.title === "Call Us" ? "Call Now" : 
                     info.title === "Visit Us" ? "Get Directions" : ""}
                  </Link>
                )}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Main Contact Form Section */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          bg={cardBg}
          borderRadius="2xl"
          border="1px solid"
          borderColor={borderColor}
          overflow="hidden"
          boxShadow="xl"
          mb={12}
        >
          {/* Left Side - Form */}
          <Box flex={1.5} p={{ base: 6, md: 8 }}>
            <VStack align="flex-start" spacing={6}>
              <Box>
                <Heading size="xl" color={accentColor} mb={2}>
                  Send Us a Message
                </Heading>
                <Text fontSize="md" color={textColor}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </Text>
              </Box>

              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <VStack spacing={5} w="100%">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="100%">
                    <FormControl isRequired>
                      <FormLabel fontSize="sm" color={textColor}>
                        Your Name
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <Icon as={FaUser} color={accentColor} />
                        </InputLeftElement>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          bg={inputBg}
                          border="1px solid"
                          borderColor={borderColor}
                          _focus={{ borderColor: accentColor }}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontSize="sm" color={textColor}>
                        Email Address
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <Icon as={FaEnvelope} color={accentColor} />
                        </InputLeftElement>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          bg={inputBg}
                          border="1px solid"
                          borderColor={borderColor}
                          _focus={{ borderColor: accentColor }}
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color={textColor}>
                      Subject
                    </FormLabel>
                    <Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Select a subject"
                      bg={inputBg}
                      border="1px solid"
                      borderColor={borderColor}
                      _focus={{ borderColor: accentColor }}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="account">Account Issues</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color={textColor}>
                      Message
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <Icon as={FaComment} color={accentColor} />
                      </InputLeftElement>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        rows={6}
                        bg={inputBg}
                        border="1px solid"
                        borderColor={borderColor}
                        _focus={{ borderColor: accentColor }}
                        pl={10}
                      />
                    </InputGroup>
                  </FormControl>

                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bg={accentColor}
                    color="white"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    _hover={{ transform: "scale(1.02)", bg: "pink.600" }}
                    leftIcon={<FaPaperPlane />}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </VStack>
          </Box>

          {/* Right Side - Support Info */}
          <Box
            flex={1}
            bg={useColorModeValue("pink.50", "gray.600")}
            p={{ base: 6, md: 8 }}
          >
            <VStack spacing={6} align="flex-start" h="full">
              <Box>
                <Heading size="lg" color={accentColor} mb={2}>
                  Quick Support
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  Get instant help from our support team
                </Text>
              </Box>

              <VStack spacing={4} w="full">
                <Flex
                  w="full"
                  p={4}
                  bg={cardBg}
                  borderRadius="lg"
                  align="center"
                  gap={4}
                >
                  <Avatar
                    src="https://bit.ly/dan-abramov"
                    name="Support Agent"
                    size="md"
                  />
                  <Box flex={1}>
                    <Text fontWeight="bold" fontSize="sm">
                      Live Chat Support
                    </Text>
                    <Text fontSize="xs" color={textColor}>
                      Available 24/7
                    </Text>
                  </Box>
                  <Button size="sm" colorScheme="pink" borderRadius="full">
                    Chat Now
                  </Button>
                </Flex>

                <Flex
                  w="full"
                  p={4}
                  bg={cardBg}
                  borderRadius="lg"
                  align="center"
                  gap={4}
                >
                  <Icon as={FaHeadset} boxSize={8} color={accentColor} />
                  <Box flex={1}>
                    <Text fontWeight="bold" fontSize="sm">
                      Call Support
                    </Text>
                    <Text fontSize="xs" color={textColor}>
                      +1 (555) 123-4567
                    </Text>
                  </Box>
                  <Button size="sm" variant="outline" borderRadius="full">
                    Call
                  </Button>
                </Flex>

                <Divider borderColor={borderColor} my={2} />

                <Box w="full">
                  <Text fontWeight="bold" mb={3} fontSize="sm">
                    Frequently Asked
                  </Text>
                  <VStack spacing={2} align="flex-start">
                    {[
                      "How do I create an account?",
                      "Is Delbaram free to use?",
                      "How to reset password?",
                      "Privacy & Security",
                    ].map((faq, idx) => (
                      <Link
                        key={idx}
                        href="#"
                        fontSize="sm"
                        color={textColor}
                        _hover={{ color: accentColor, ml: 1 }}
                      >
                        • {faq}
                      </Link>
                    ))}
                  </VStack>
                </Box>

                <Divider borderColor={borderColor} my={2} />

                <Box w="full">
                  <Text fontWeight="bold" mb={3} fontSize="sm">
                    Connect With Us
                  </Text>
                  <HStack spacing={3}>
                    {[
                      { icon: FaFacebook, color: "#1877F2" },
                      { icon: FaTwitter, color: "#1DA1F2" },
                      { icon: FaInstagram, color: "#E4405F" },
                      { icon: FaLinkedin, color: "#0A66C2" },
                    ].map((social, idx) => (
                      <Link
                        key={idx}
                        href="#"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Flex
                          w="40px"
                          h="40px"
                          borderRadius="full"
                          bg={social.color}
                          align="center"
                          justify="center"
                          transition="all 0.3s"
                          _hover={{ transform: "translateY(-3px)" }}
                        >
                          <Icon as={social.icon} boxSize={5} color="white" />
                        </Flex>
                      </Link>
                    ))}
                  </HStack>
                </Box>
              </VStack>
            </VStack>
          </Box>
        </Flex>

        {/* Response Time Badge */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          bg={accentColor}
          color="white"
          borderRadius="xl"
          p={6}
        >
          <HStack spacing={4}>
            <Icon as={FaCheckCircle} boxSize={8} />
            <Box>
              <Heading size="md">24/7 Support Available</Heading>
              <Text fontSize="sm" opacity={0.9}>
                We typically respond within 2 hours
              </Text>
            </Box>
          </HStack>
          <Button
            size="lg"
            bg="white"
            color={accentColor}
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="full"
            px={8}
            mt={{ base: 4, md: 0 }}
            leftIcon={<FaHeadset />}
          >
            Live Chat Now
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;