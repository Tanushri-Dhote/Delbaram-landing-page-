import {
  Box,
  Heading,
  Button,
  VStack,
  Text,
  useColorModeValue,
  Avatar,
  Flex,
} from "@chakra-ui/react";

const CTA = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, pink.400, pink.600)",
    "linear(to-r, gray.700, gray.900)"
  );

  const buttonBg = useColorModeValue("white", "gray.800");
  const buttonColor = useColorModeValue("pink.500", "pink.300");
  const textColor = useColorModeValue("white", "gray.200");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      py={{ base: 6, md: 10 }}
      px={{ base: 4, md: 8 }}
      bgGradient={bgGradient}
      borderRadius="2xl"
      mx={4}
      my={10}
      sx={{
        animation: "fadeInScale 0.8s ease-out",
        "@keyframes fadeInScale": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1000px"
        mx="auto"
        gap={10}
      >
        {/* LEFT: Avatar Cluster */}
        <Box
          position="relative"
          w={{ base: "240px", md: "340px" }}
          h={{ base: "240px", md: "280px" }}
          sx={{
            animation: "floatContainer 4s ease-in-out infinite",
            "@keyframes floatContainer": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-10px)" },
              "100%": { transform: "translateY(0px)" },
            },
          }}
        >
          {/* BIG CENTER AVATAR */}
          <Avatar
            src="/images/logo.jpeg"
            size="2xl"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            border="5px solid white"
            boxShadow="2xl"
            zIndex={2}
            sx={{
              animation: "pulseGlow 3s ease-in-out infinite",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 0 0 0 rgba(255,255,255,0.4)" },
                "50%": { boxShadow: "0 0 20px 10px rgba(255,255,255,0.6)" },
                "100%": { boxShadow: "0 0 0 0 rgba(255,255,255,0.4)" },
              },
            }}
          />

          {/* Top */}
          <Avatar
            src="/images/sticker4.png"
            position="absolute"
            boxSize={{ base: "55px", md: "70px" }}
            top={{ base: "-5px", md: "0" }}
            left="50%"
            transform="translateX(-50%)"
            border="4px solid white"
            sx={{
              animation: "float1 5s ease-in-out infinite",
              "@keyframes float1": {
                "0%": { transform: "translateX(-50%) translateY(0px)" },
                "50%": { transform: "translateX(-50%) translateY(-12px)" },
                "100%": { transform: "translateX(-50%) translateY(0px)" },
              },
            }}
          />

          {/* Left Top */}
          <Avatar
            src="/images/sticker5.png"
            position="absolute"
            boxSize={{ base: "70px", md: "90px" }}
            top={{ base: "10%", md: "20%" }}
            left={{ base: "-5px", md: "0" }}
            border="4px solid white"
            sx={{
              animation: "float2 4.5s ease-in-out infinite 0.3s",
              "@keyframes float2": {
                "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
                "33%": { transform: "translate(-5px, -8px) rotate(-3deg)" },
                "66%": { transform: "translate(5px, -4px) rotate(3deg)" },
                "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
              },
            }}
          />

          {/* Right Top */}
          <Avatar
            src="/images/sticker2.png"
            position="absolute"
            boxSize={{ base: "70px", md: "90px" }}
            top={{ base: "10%", md: "20%" }}
            right={{ base: "-5px", md: "0" }}
            border="4px solid white"
            sx={{
              animation: "float3 5s ease-in-out infinite 0.5s",
              "@keyframes float3": {
                "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
                "33%": { transform: "translate(5px, -10px) rotate(3deg)" },
                "66%": { transform: "translate(-5px, -3px) rotate(-3deg)" },
                "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
              },
            }}
          />

          {/* Bottom Left */}
          <Avatar
            src="/images/sticker3.png"
            position="absolute"
            boxSize={{ base: "70px", md: "90px" }}
            bottom={{ base: "-5px", md: "0" }}
            left={{ base: "5%", md: "10%" }}
            border="4px solid white"
            sx={{
              animation: "float4 4.8s ease-in-out infinite 0.2s",
              "@keyframes float4": {
                "0%": { transform: "translate(0px, 0px) scale(1)" },
                "50%": { transform: "translate(-8px, -6px) scale(1.05)" },
                "100%": { transform: "translate(0px, 0px) scale(1)" },
              },
            }}
          />

          {/* Bottom Right */}
          <Avatar
            src="/images/sticker1.png"
            position="absolute"
            boxSize={{ base: "70px", md: "90px" }}
            bottom={{ base: "-5px", md: "0" }}
            right={{ base: "5%", md: "10%" }}
            border="4px solid white"
            sx={{
              animation: "float5 5.2s ease-in-out infinite 0.7s",
              "@keyframes float5": {
                "0%": { transform: "translate(0px, 0px) scale(1)" },
                "50%": { transform: "translate(8px, -8px) scale(1.03)" },
                "100%": { transform: "translate(0px, 0px) scale(1)" },
              },
            }}
          />
        </Box>

        {/* RIGHT: Content */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          spacing={5}
          flex={1}
          ml={{ base: 0, md: 14 }}
          sx={{
            animation: "slideInRight 0.8s ease-out",
            "@keyframes slideInRight": {
              "0%": { opacity: 0, transform: "translateX(30px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          {/* Heading */}
          <Heading
            color={textColor}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            lineHeight="short"
            sx={{
              animation: "fadeInUp 0.6s ease-out 0.3s both",
              "@keyframes fadeInUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Who is Delbaram?
          </Heading>

          {/* Subtitle */}
          <Text
            color={textColor}
            opacity={0.85}
            fontSize={{ base: "sm", md: "md" }}
            maxW="400px"
            sx={{
              animation: "fadeInUp 0.6s ease-out 0.5s both",
            }}
          >
            Connecting people, sparking conversations, and building real relationships in a smarter way.
          </Text>

          {/* Stats - upgraded */}
          <Flex
            gap={{ base: 4, md: 6 }}
            wrap="wrap"
            justify={{ base: "center", md: "flex-start" }}
            ml={{ base: 0, md: 14 }}
          >
            {[
              { value: "600+", label: "Connect" },
              { value: "50+", label: "Chat" },
              { value: "1k+", label: "Followers" },
            ].map((item, i) => (
              <Box
                key={i}
                px={5}
                py={3}
                bg="whiteAlpha.200"
                borderRadius="lg"
                backdropFilter="blur(10px)"
                textAlign="center"
                minW="80px"
                sx={{
                  animation: `fadeInScale 0.5s ease-out ${0.7 + i * 0.15}s both`,
                  "@keyframes fadeInScale": {
                    "0%": { opacity: 0, transform: "scale(0.8)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                  },
                  transition: "all 0.3s ease",
                  _hover: {
                    transform: "translateY(-8px) scale(1.05)",
                    bg: "whiteAlpha.300",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <Text
                  color={textColor}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                >
                  {item.value}
                </Text>
                <Text color={textColor} fontSize="xs" opacity={0.9}>
                  {item.label}
                </Text>
              </Box>
            ))}
          </Flex>

          {/* Button - premium style */}
          <Button
            size="lg"
            bg={buttonBg}
            color={buttonColor}
            px={6}
            borderRadius="full"
            fontWeight="bold"
            mt={3}
            boxShadow="lg"
            ml={{ base: 0, md: 14 }}
            sx={{
              animation: "bounceIn 0.8s ease-out 1.2s both",
              "@keyframes bounceIn": {
                "0%": { transform: "scale(0.3)", opacity: 0 },
                "50%": { transform: "scale(1.05)", opacity: 0.9 },
                "70%": { transform: "scale(0.95)", opacity: 1 },
                "100%": { transform: "scale(1)", opacity: 1 },
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              _hover: {
                transform: "scale(1.08) translateY(-3px)",
                boxShadow: "2xl",
                bg: hoverBg,
              },
            }}
          >
            Sign Up →
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CTA;