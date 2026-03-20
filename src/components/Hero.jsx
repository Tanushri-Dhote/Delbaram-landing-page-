import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box id="home" py={{ base: 4, md: 8 }} px={{ base: 3, md: 4 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="900px"
        mx="auto"
        gap={{ base: 3, md: 3 }}
      >
        {/* LEFT CONTENT */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          spacing={2}
          flex={1}
        >
          <Heading
            size="lg"
            color="brand.500"
            lineHeight="short"
          >
            Find Your Perfect Match 💖
          </Heading>

          <Text fontSize="sm" color="gray.600" maxW="300px">
            Connect, chat, and meet amazing people around you.
          </Text>

          <HStack spacing={3}>
            {/* Android Button */}
            <Button
              as="a"
              href="https://play.google.com/store/apps/details?id=com.rssc.delbaram"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              leftIcon={<Icon as={FaGooglePlay} />}
              colorScheme="pink"
            >
              Android
            </Button>

            {/* iOS Button */}
            <Button
              as="a"
              href="https://apps.apple.com" // replace with your actual App Store link
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              leftIcon={<Icon as={FaApple} />}
              variant="outline"
              borderColor="pink.400"
              color="pink.500"
              _hover={{ bg: "pink.50" }}
            >
              iOS
            </Button>
          </HStack>
        </VStack>

        {/* RIGHT IMAGE */}
        <Box flex={1} display="flex" justifyContent="center">
          <Image
            src="/images/sticker.png"
            alt="Sticker"
            maxW={{ base: "200px", md: "300px" }}
            w="100%"
            objectFit="contain"
            sx={{
              filter: "drop-shadow(0px 6px 12px rgba(0,0,0,0.12))",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;