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

  return (
    <Box
      p={4}  
      mx={3}
       mb={4} 
      bg={bg}
      borderRadius="xl"
      shadow="md"
      transition="0.3s"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
      }}
    >
      <VStack align="start" spacing={3}>  
        <HStack spacing={3} width="full">
          <Box
            p={2}  
            bg={iconBg}
            borderRadius="lg"
            color="pink.500"
          >
            <Icon as={IconComponent} boxSize={5} />
          </Box>
          <Heading size="sm" fontWeight="semibold" noOfLines={1}>
            {title}
          </Heading>
        </HStack>

        <Text color={textColor} fontSize="xs" noOfLines={2}>
          {description}
        </Text>
        <Button size="xs" colorScheme="pink" variant="ghost" px={0} height="auto" py={1}>
          View All →
        </Button>
      </VStack>
    </Box>
  );
};

const FeaturesSlider = () => {
  const sectionBg = useColorModeValue("#fff5f7", "gray.900");

  const featuresData = [
    {
      icon: FiUsers,
      title: "Online Users",
      description: "See who is online and ready to connect instantly.",
    },
    {
      icon: FiUserPlus,
      title: "New Members",
      description: "Discover newly joined members near you.",
    },
    {
      icon: FiEye,
      title: "They Viewed You",
      description: "Check who has visited your profile.",
    },
    {
      icon: FiHeart,
      title: "Your Likes",
      description: "People you liked and interacted with.",
    },
    {
      icon: FiStar,
      title: "Recommended Matches",
      description: "Smart suggestions based on your interests.",
    },
    {
      icon: FiMessageCircle,
      title: "Chat & Connect",
      description: "Start conversations and build connections.",
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
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      id="features"
      py={12}
      px={{ base: 4, md: 8 }}
      bg={sectionBg}
      sx={{
    ".slick-prev:before, .slick-next:before": {
      color: "#795481", // pink color for light mode
      fontSize: "20px",
    },
  }}
    >
      <VStack spacing={2} mb={8} textAlign="center">
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          bgGradient="linear(to-r, pink.500, purple.500)"
          bgClip="text"
        >
          Explore Features 💖
        </Heading>
        <Text fontSize="lg" color="gray.500" maxW="2xl">
          Discover all the amazing features we offer to enhance your experience
        </Text>
      </VStack>
      <Box maxW="1280px" mx="auto">
        <Slider {...settings}>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Slider>
      </Box>
      
    </Box>
  );
};

export default FeaturesSlider;