import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
  SimpleGrid,
  Container,
  Divider,
  Avatar,
  AvatarGroup,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaCommentDots,
  FaLock,
  FaSmile,
  FaGlobe,
  FaQuoteRight,
  FaCheckCircle,
  FaComments,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bgGradient = useColorModeValue(
    "linear(to-b, pink.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const quoteBg = useColorModeValue("pink.50", "gray.700");

  const features = [
    {
      icon: FaComments,
      title: "Real-Time Chatting",
      description: "Smooth and fast messaging for uninterrupted conversations",
      color: "blue.400",
    },
    {
      icon: FaLock,
      title: "User Privacy First",
      description: "Strong privacy controls and secure communication",
      color: "green.400",
    },
    {
      icon: FaSmile,
      title: "Simple & Friendly Interface",
      description: "Easy to use for everyone, intuitive design",
      color: "purple.400",
    },
    {
      icon: FaShieldAlt,
      title: "Safe Community",
      description: "Moderation and smart systems to maintain respectful interactions",
      color: "red.400",
    },
    {
      icon: FaGlobe,
      title: "24/7 Connectivity",
      description: "Talk anytime, anywhere across the globe",
      color: "orange.400",
    },
    {
      icon: FaHeart,
      title: "Meaningful Connections",
      description: "Build relationships that last beyond just chat",
      color: "pink.400",
    },
  ];

  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const totalSlides = Math.ceil(features.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box bg={bgGradient} minH="100vh">
      <Container maxW="1100px" py={16} px={6}>
        {/* About Delbaram */}
        <VStack 
          spacing={6} 
          align="flex-start" 
          mb={16}
          sx={{
            animation: "fadeInLeft 0.8s ease-out",
            "@keyframes fadeInLeft": {
              "0%": { transform: "translateX(-30px)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <Heading size="2xl" color={accentColor}>
            About Delbaram
          </Heading>
          <Text fontSize="xl" color={textColor} lineHeight="tall">
            Delbaram is more than just an online chatting platform—it's a space where real conversations begin, 
            meaningful connections grow, and people feel truly heard.
          </Text>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            In today's fast-paced digital world, finding genuine communication can be difficult. Delbaram was created 
            with a simple yet powerful vision: to bring people closer through safe, engaging, and authentic conversations.
          </Text>
        </VStack>

        {/* Mission & Vision - Now in one line */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          gap={4} 
          mb={16}
          sx={{
            animation: "fadeInRight 0.8s ease-out",
            "@keyframes fadeInRight": {
              "0%": { transform: "translateX(30px)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <Box
            flex={1}
            bg={cardBg}
            p={6}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor={borderColor}
            _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
            transition="all 0.3s"
            sx={{
              animation: "pulseGlow 3s ease-in-out infinite",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
                "50%": { boxShadow: "0 8px 20px rgba(236,72,153,0.2)" },
                "100%": { boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
              },
            }}
          >
            <HStack spacing={4} mb={3}>
              <Icon as={FaRocket} boxSize={8} color={accentColor} />
              <Heading size="md">
                Our Mission
              </Heading>
            </HStack>
            <Text fontSize="sm" color={textColor} lineHeight="tall">
              Create a secure environment where users can chat freely and connect without barriers.
            </Text>
          </Box>

          <Box
            flex={1}
            bg={cardBg}
            p={6}
            borderRadius="2xl"
            boxShadow="lg"
            border="1px solid"
            borderColor={borderColor}
            _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
            transition="all 0.3s"
            sx={{
              animation: "pulseGlow 3s ease-in-out infinite 0.5s",
            }}
          >
            <HStack spacing={4} mb={3}>
              <Icon as={FaGlobe} boxSize={8} color={accentColor} />
              <Heading size="md">
                Our Vision
              </Heading>
            </HStack>
            <Text fontSize="sm" color={textColor} lineHeight="tall">
              A global platform where conversations are honest, respectful, and every voice is valued.
            </Text>
          </Box>
        </Flex>

        {/* What Makes Delbaram Special - Slider/Carousel */}
        <Box mb={16}>
          <VStack spacing={4} textAlign="center" mb={10}>
            <Heading 
              size="2xl" 
              color={accentColor}
              sx={{
                animation: "fadeInDown 0.8s ease-out",
                "@keyframes fadeInDown": {
                  "0%": { transform: "translateY(-30px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              What Makes Delbaram Special?
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="600px">
              Features designed to make your chatting experience extraordinary
            </Text>
          </VStack>

          <Box position="relative">
            {/* Slider Navigation */}
            <HStack justify="space-between" position="absolute" top="50%" w="100%" transform="translateY(-50%)" zIndex={2}>
              <Button
                onClick={prevSlide}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bg: accentColor, color: "white" }}
                size="sm"
                ml={-3}
              >
                <Icon as={FaArrowLeft} />
              </Button>
              <Button
                onClick={nextSlide}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bg: accentColor, color: "white" }}
                size="sm"
                mr={-3}
              >
                <Icon as={FaArrowRight} />
              </Button>
            </HStack>

            {/* Slider Content */}
            <Box overflow="hidden" borderRadius="xl">
              <Flex
                transition="transform 0.5s ease-in-out"
                transform={`translateX(-${currentSlide * 100}%)`}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <Flex
                    key={slideIndex}
                    minW="100%"
                    gap={6}
                    p={2}
                  >
                    {features
                      .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                      .map((feature, index) => (
                        <Box
                          key={index}
                          flex={1}
                          bg={cardBg}
                          p={6}
                          borderRadius="xl"
                          boxShadow="md"
                          border="1px solid"
                          borderColor={borderColor}
                          _hover={{
                            transform: "translateY(-5px) scale(1.02)",
                            boxShadow: "xl",
                            borderColor: accentColor,
                          }}
                          transition="all 0.3s"
                          sx={{
                            animation: `slideIn 0.5s ease-out ${index * 0.1}s`,
                            "@keyframes slideIn": {
                              "0%": { opacity: 0, transform: "translateY(20px)" },
                              "100%": { opacity: 1, transform: "translateY(0)" },
                            },
                          }}
                        >
                          <Flex
                            w="50px"
                            h="50px"
                            bg={feature.color}
                            borderRadius="lg"
                            align="center"
                            justify="center"
                            mb={4}
                            sx={{
                              animation: "rotateIn 0.6s ease-out",
                              "@keyframes rotateIn": {
                                "0%": { transform: "rotate(-180deg) scale(0)" },
                                "100%": { transform: "rotate(0) scale(1)" },
                              },
                            }}
                          >
                            <Icon as={feature.icon} boxSize={6} color="white" />
                          </Flex>
                          <Heading size="md" mb={2}>
                            {feature.title}
                          </Heading>
                          <Text fontSize="sm" color={textColor}>
                            {feature.description}
                          </Text>
                        </Box>
                      ))}
                  </Flex>
                ))}
              </Flex>
            </Box>

            {/* Slider Dots */}
            <HStack justify="center" mt={6} spacing={2}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Box
                  key={index}
                  w={currentSlide === index ? "24px" : "8px"}
                  h="8px"
                  borderRadius="full"
                  bg={currentSlide === index ? accentColor : borderColor}
                  cursor="pointer"
                  onClick={() => setCurrentSlide(index)}
                  transition="all 0.3s"
                />
              ))}
            </HStack>
          </Box>
        </Box>

        {/* Join Community Section */}
        <Box
          bg={quoteBg}
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          position="relative"
          mb={8}
          sx={{
            animation: "zoomIn 0.8s ease-out",
            "@keyframes zoomIn": {
              "0%": { transform: "scale(0.9)", opacity: 0 },
              "100%": { transform: "scale(1)", opacity: 1 },
            },
          }}
        >
          <Icon
            as={FaQuoteRight}
            position="absolute"
            top={6}
            right={6}
            boxSize={16}
            color={accentColor}
            opacity={0.1}
            sx={{
              animation: "spinSlow 20s linear infinite",
              "@keyframes spinSlow": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          />
          
          <VStack spacing={6} align="flex-start" maxW="800px">
            <Heading size="xl" color={accentColor}>
              Join the Delbaram Community
            </Heading>
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              At Delbaram, we believe conversations have the power to change moods, build relationships, 
              and create lasting bonds.
            </Text>
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              We're constantly improving our platform to make your chatting experience smoother, safer, 
              and more enjoyable.
            </Text>
            
            <Divider borderColor={borderColor} />
            
            <VStack align="flex-start" spacing={3}>
              <Heading size="md">Why join us?</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} w="100%">
                {[
                  "Real conversations with real people",
                  "Safe and moderated environment",
                  "No judgment, just genuine connections",
                  "Available 24/7 worldwide",
                ].map((reason, i) => (
                  <HStack 
                    key={i} 
                    spacing={2}
                    sx={{
                      animation: `fadeInRight 0.5s ease-out ${i * 0.1}s both`,
                    }}
                  >
                    <Icon as={FaCheckCircle} color="green.400" boxSize={4} />
                    <Text fontSize="sm" color={textColor}>
                      {reason}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>

            <HStack spacing={4} mt={4}>
              <Button
                size="lg"
                bg="pink.500"
                color="white"
                _hover={{ bg: "pink.600", transform: "scale(1.05)" }}
                borderRadius="full"
                px={8}
                leftIcon={<FaCommentDots />}
                sx={{
                  animation: "bounceIn 0.8s ease-out",
                  "@keyframes bounceIn": {
                    "0%": { transform: "scale(0.3)", opacity: 0 },
                    "50%": { transform: "scale(1.05)", opacity: 0.9 },
                    "70%": { transform: "scale(0.95)", opacity: 1 },
                    "100%": { transform: "scale(1)", opacity: 1 },
                  },
                }}
              >
                Start Chatting
              </Button>
              <Button
                size="lg"
                variant="ghost"
                color={accentColor}
                _hover={{ bg: "whiteAlpha.200" }}
              >
                Learn More
              </Button>
            </HStack>

            <Text fontSize="sm" color={textColor} fontStyle="italic">
              Start chatting. Start connecting. Welcome to Delbaram.
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default About;