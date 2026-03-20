import {
  Box,
  Text,
  Flex,
  Grid,
  Link,
  Image,
  useColorModeValue,
  Icon,
  HStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import {
  FaHeart,
  FaFileAlt,
  FaShieldAlt,
  FaInfoCircle,
  FaQuestionCircle,
  FaEnvelope,
  FaUsers,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // ✅ FIXED (inside component)

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const linkHoverColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const inputBg = useColorModeValue("gray.50", "gray.700");

  const quickLinks = [
    { name: "Terms & Conditions", icon: FaFileAlt, path: "/terms" },
    { name: "Privacy Policy", icon: FaShieldAlt, path: "/privacy" },
    { name: "About Us", icon: FaInfoCircle, path: "/about" },
    { name: "Help", icon: FaQuestionCircle, path: "/help" },
    { name: "FAQ's", icon: FaUsers, path: "/faq" },
    { name: "Contact Us", icon: FaEnvelope, path: "/contact" },
  ];

  return (
    <Box
      bg={bg}
      color={textColor}
      py={{ base: 6, md: 7 }}
      px={5}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Flex
        maxW="1100px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        gap={{ base: 5, md: 6 }}
      >
        {/* LEFT */}
        <Box flex={1}>
          <HStack
            spacing={3}
            mb={2}
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            <Image
              src="/images/logo.jpeg"
              boxSize="60px"
              borderRadius="full"
              border="2px solid"
              borderColor="pink.300"
            />
            <Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, green.400, purple.500)"
                bgClip="text"
              >
                DELBARAM
              </Text>
              <Text fontSize="xs">Find your perfect match</Text>
            </Box>
          </HStack>

          <Text fontSize="sm" lineHeight="1.6" maxW="280px">
            Connecting hearts and helping you find your perfect match.
          </Text>
        </Box>

        {/* QUICK LINKS */}
        <Box flex={1}>
          <Text fontSize="md" fontWeight="bold" color={headingColor} mb={3}>
            Quick Links
          </Text>

          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            {quickLinks.map((item, i) => (
              <Link
                key={i}
                fontSize="sm"
                display="flex"
                alignItems="center"
                gap={1.5}
                _hover={{
                  color: linkHoverColor,
                  transform: "translateX(3px)",
                }}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  } else if (item.section) {
                    navigate("/", { state: { scrollTo: item.section } });
                  }
                }}
                transition="0.2s"
              >
                <Icon as={item.icon} boxSize={3} color={linkHoverColor} />
                {item.name}
              </Link>
            ))}
          </Grid>
        </Box>

        {/* NEWSLETTER */}
        <Box flex={1}>
          <Text fontSize="md" fontWeight="bold" color={headingColor} mb={3}>
            Stay Updated
          </Text>

          <InputGroup size="sm" mb={2}>
            <Input
              placeholder="Email"
              borderRadius="full"
              bg={inputBg}
              borderColor={borderColor}
            />
            <InputRightElement width="3rem">
              <Button
                size="xs"
                borderRadius="full"
                bg="pink.400"
                color="white"
                p={0}
                minW="auto"
                h="1.6rem"
                w="1.6rem"
              >
                <Icon as={FaHeart} boxSize={3} />
              </Button>
            </InputRightElement>
          </InputGroup>

          <Text fontSize="xs" opacity={0.7}>
            Subscribe for updates
          </Text>

          {/* Secure + Trusted */}
          <HStack spacing={2} mt={3}>
            <HStack spacing={1}>
              <Icon as={FaLock} boxSize={3} color="green.400" />
              <Text fontSize="xs">Secure</Text>
            </HStack>

            <Text fontSize="xs">•</Text>

            <HStack spacing={1}>
              <Icon as={FaCheckCircle} boxSize={3} color="green.400" />
              <Text fontSize="xs">Trusted</Text>
            </HStack>
          </HStack>
        </Box>
      </Flex>

      {/* BOTTOM */}
      <Box mt={5} pt={3} borderTop="1px solid" borderColor={borderColor}>
        <Text fontSize="xs" textAlign="center">
          © 2026{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, green.400, purple.500)"
            bgClip="text"
            fontWeight="bold"
          >
            DELBARAM
          </Text>{" "}
          . All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;