import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUsers, FiUserPlus, FiEye, FiHeart, FiStar, FiMessageCircle } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureCard = ({ icon: IconComponent, title, description }) => {
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconBg = useColorModeValue("pink.50", "pink.900");
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      p={{ base: 5, md: 6 }}
      mx={{ base: 2, md: 3 }}
      mb={4}
      bg={bg}
      borderRadius="xl"
      shadow="md"
      transition="all 0.3s ease"
      border="1px solid"
      borderColor={borderColor}
      height="100%"
      _hover={{
        transform: { md: "translateY(-4px)" },
        shadow: "lg",
        borderColor: "pink.200",
      }}
    >
      <VStack align="start" spacing={{ base: 4, md: 3 }} height="100%">
        <HStack spacing={3} width="full" alignItems="center">
          <Box
            p={2.5}
            bg={iconBg}
            borderRadius="lg"
            color="pink.500"
            transition="0.2s"
            flexShrink={0}
          >
            <Icon as={IconComponent} boxSize={{ base: 5, md: 5 }} />
          </Box>
          <Heading 
            size={{ base: "sm", md: "sm" }} 
            fontWeight="semibold" 
            fontSize={{ base: "15px", md: "18px" }}
            lineHeight="1.4"
            flex={1}
          >
            {title}
          </Heading>
        </HStack>

        <Text 
          color={textColor} 
          fontSize={{ base: "13px", md: "15px" }}
          lineHeight="1.5"
          noOfLines={{ base: 3, md: 2 }}
          flex="1"
        >
          {description}
        </Text>
        
        <Button 
          size="xs" 
          colorScheme="pink" 
          variant="ghost" 
          px={0} 
          height="auto" 
          py={2}
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="medium"
          _hover={{ transform: "translateX(4px)" }}
          transition="0.2s"
          alignSelf="flex-start"
        >
          View All →
        </Button>
      </VStack>
    </Box>
  );
};

const FeaturesSlider = () => {
  const sectionBg = useColorModeValue("#fff5f7", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");

  const featuresData = [
    {
      icon: FiUsers,
      title: "Online Users",
      description: "See who is online and ready to connect instantly with real-time updates.",
    },
    {
      icon: FiUserPlus,
      title: "New Members",
      description: "Discover newly joined members near you and expand your network.",
    },
    {
      icon: FiEye,
      title: "They Viewed You",
      description: "Check who has visited your profile and shown interest in you.",
    },
    {
      icon: FiHeart,
      title: "Your Likes",
      description: "Track people you liked and those who liked you back.",
    },
    {
      icon: FiStar,
      title: "Recommended Matches",
      description: "Smart suggestions based on your interests and preferences.",
    },
    {
      icon: FiMessageCircle,
      title: "Chat & Connect",
      description: "Start conversations and build meaningful connections.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      id="features"
      py={{ base: 12, md: 20 }}
      px={{ base: 3, md: 8 }}
      bg={sectionBg}
      sx={{
        ".slick-prev, .slick-next": {
          zIndex: 1,
          width: "40px",
          height: "40px",
          borderRadius: "full",
          bg: useColorModeValue("white", "gray.800"),
          boxShadow: "md",
          display: { base: "none", md: "flex" },
          "&:hover": {
            bg: useColorModeValue("gray.50", "gray.700"),
          },
        },
        ".slick-prev": {
          left: { base: "-5px", md: "-15px" },
        },
        ".slick-next": {
          right: { base: "-5px", md: "-15px" },
        },
        ".slick-prev:before, .slick-next:before": {
          color: "#795481",
          fontSize: "20px",
          opacity: 1,
        },
        ".slick-dots": {
          bottom: "-35px",
          "li button:before": {
            fontSize: "10px",
            color: "#795481",
            opacity: 0.3,
          },
          "li.slick-active button:before": {
            opacity: 1,
            color: "#795481",
          },
        },
        ".slick-track": {
          display: "flex",
          alignItems: "stretch",
        },
        ".slick-slide": {
          height: "auto",
          "& > div": {
            height: "100%",
          },
        },
      }}
    >
      <VStack spacing={4} mb={{ base: 8, md: 16 }} textAlign="center">
        <Heading
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          fontWeight="bold"
          bgGradient="linear(to-r, pink.500, purple.500)"
          bgClip="text"
          lineHeight="1.2"
          letterSpacing="tight"
          px={{ base: 2, md: 0 }}
        >
          Explore Features 💖
        </Heading>
        <Text 
          fontSize={{ base: "15px", md: "18px" }}
          color={textColor}
          maxW="2xl"
          lineHeight="1.6"
          px={{ base: 4, md: 0 }}
        >
          Discover all the amazing features we offer to enhance your experience
          and help you build meaningful connections.
        </Text>
      </VStack>
      
      <Box maxW="1280px" mx="auto" px={{ base: 1, md: 4 }}>
        <Slider {...settings}>
          {featuresData.map((feature, index) => (
            <Box key={index} px={{ base: 1, md: 1 }} height="100%">
              <FeatureCard {...feature} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default FeaturesSlider;