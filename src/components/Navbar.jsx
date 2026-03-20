import {
  Flex,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Avatar,
  Box,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClose(); // close menu after click
    }
  };

  return (
    <Box position="sticky" top="0" zIndex="1000">
      {/* 🔥 Navbar */}
      <Flex
        px={4}
        py={2}
        justify="space-between"
        align="center"
        bg={bg}
        color={textColor}
        shadow="sm"
      >
        {/* Logo */}
         <Flex align="center" gap={2}>
        <Avatar
          size="md"
          src="/images/logo.jpeg"
          name="Delbaram Logo"
          border="2px solid pink.400"
           boxSize="84px"
          borderColor="pink.400"
          ml={12}
          boxShadow="lg"
        />
      </Flex>

        {/* 🔥 Desktop Menu */}
        <Flex gap={4} align="center" display={{ base: "none", md: "flex" }}>
          <Button variant="ghost" onClick={() => scrollToSection("home")}>
            Home
          </Button>

          <Button variant="ghost" onClick={() => scrollToSection("features")}>
            Features
          </Button>

          {/* 🌙 Toggle */}
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>

        {/* 🔥 Mobile Right Side */}
        <Flex align="center" gap={2} display={{ base: "flex", md: "none" }}>
          
          {/* 🌙 ALWAYS VISIBLE */}
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />

          {/* ☰ Hamburger */}
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
             size="lg" 
          />
        </Flex>
      </Flex>

      {/* 🔥 Mobile Menu */}
      {isOpen && (
        <VStack
          bg={bg}
          spacing={4}
          py={4}
          shadow="md"
          display={{ base: "flex", md: "none" }}
        >
          <Button
            variant="ghost"
            w="full"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Button>

          <Button
            variant="ghost"
            w="full"
            onClick={() => scrollToSection("features")}
          >
            Features
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;