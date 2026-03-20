import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ConnectedStepItem = ({ number, title, description, isLast = false, index = 0 }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const border = useColorModeValue('gray.200', 'gray.700');
    const lineColor = useColorModeValue('pink.300', 'gray.500');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const headingColor = useColorModeValue('pink.600', 'pink.300');
    const circleBg = useColorModeValue('pink.100', 'gray.700');
    const circleColor = useColorModeValue('pink.600', 'gray.300');
    const circleBorder = useColorModeValue('pink.300', 'gray.500');

    return (
        <Flex
            position="relative"
            width="100%"
            animation={`fadeInUp 0.5s ease-out ${index * 0.15}s both`}
            sx={{
                '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                }
            }}
        >
            {/* Left section with circle and connecting line */}
            <Flex direction="column" align="center" mr={4} position="relative">
                {/* Circle with pulse animation */}
                <Flex
                    bg={circleBg}
                    w="32px"
                    h="32px"
                    fontSize="md"
                    borderRadius="full"
                    align="center"
                    justify="center"
                    fontWeight="bold"
                    color={circleColor}
                    border="2px solid"
                    borderColor={circleBorder}
                    zIndex={2}
                    position="relative"
                    transition="all 0.3s ease"
                    _hover={{
                        transform: 'scale(1.1)',
                        bg: useColorModeValue('pink.200', 'gray.600'),
                        borderColor: useColorModeValue('pink.400', 'gray.400'),
                        boxShadow: useColorModeValue(
                            '0 0 15px rgba(236, 72, 153, 0.4)',
                            '0 0 15px rgba(156, 163, 175, 0.4)'
                        )
                    }}
                >
                    {number}
                </Flex>

                {/* Dotted connecting line with animation (not for last item) */}
                {!isLast && (
                    <Box
                        position="absolute"
                        top="40px"
                        width="2px"
                        height="calc(100% - 16px)"
                        borderLeft="2px dotted"
                        borderColor={lineColor}
                        zIndex={1}
                        sx={{
                            animation: 'flowDown 2s linear infinite',
                            '@keyframes flowDown': {
                                '0%': { opacity: 0.5 },
                                '50%': { opacity: 1 },
                                '100%': { opacity: 0.5 }
                            }
                        }}
                    />
                )}
            </Flex>

            {/* Content card with hover animation */}
            <Box flex={1} mb={!isLast ? 2 : 0}>
                <Box
                    bg={bg}
                    border="1px solid"
                    borderColor={border}
                    borderRadius="xl"
                    p={3}
                    boxShadow="md"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                        shadow: 'xl',
                        transform: 'translateX(8px) scale(1.02)',
                        borderColor: useColorModeValue('pink.300', 'gray.500')
                    }}
                    sx={{
                        animation: 'glowPulse 2s ease-in-out infinite',
                        '@keyframes glowPulse': {
                            '0%': { boxShadow: useColorModeValue('0 4px 6px rgba(0, 0, 0, 0.1)', '0 4px 6px rgba(0, 0, 0, 0.3)') },
                            '50%': { boxShadow: useColorModeValue('0 8px 15px rgba(236, 72, 153, 0.2)', '0 8px 15px rgba(156, 163, 175, 0.3)') },
                            '100%': { boxShadow: useColorModeValue('0 4px 6px rgba(0, 0, 0, 0.1)', '0 4px 6px rgba(0, 0, 0, 0.3)') }
                        }
                    }}
                >
                    <Heading
                        as="h4"
                        size="sm"
                        mb={2}
                        color={headingColor}
                        transition="all 0.2s"
                        _hover={{ color: useColorModeValue('pink.700', 'pink.200'), transform: 'translateX(5px)' }}
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize="sm"
                        color={textColor}
                        transition="all 0.2s"
                        _hover={{ color: useColorModeValue('gray.800', 'white') }}
                    >
                        {description}
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

const LegalConnectedSteppers = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/terms") {
            const el = document.getElementById("terms");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }

        if (location.pathname === "/privacy") {
            const el = document.getElementById("privacy");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    const outerBg = useColorModeValue(
        'rgba(252, 232, 242, 0.8)',  // light mode pink
        'gray.900'                    // dark mode dark grey/black
    );
    const boxBg = useColorModeValue(
        'rgba(255, 255, 255, 0.4)',   // light mode transparent white
        'rgba(31, 41, 55, 0.7)'       // dark mode transparent dark grey
    );
    const headingColor = useColorModeValue('pink.600', 'pink.300');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const borderColorPink = useColorModeValue(
        'rgba(236, 72, 153, 0.2)',
        'rgba(75, 85, 99, 0.5)'       // dark mode grey border
    );
    const hoverBorderColor = useColorModeValue('pink.300', 'gray.500');
    const boxShadowHover = useColorModeValue(
        '0 20px 25px -5px rgba(236, 72, 153, 0.2), 0 10px 10px -5px rgba(236, 72, 153, 0.1)',
        '0 20px 25px -5px rgba(75, 85, 99, 0.3), 0 10px 10px -5px rgba(75, 85, 99, 0.2)'
    );

    return (
        <Box
            bg={outerBg}
            py={6}
            px={{ base: 4, md: 6 }}
            borderRadius="3xl"
            boxShadow="lg"
            sx={{
                animation: 'fadeIn 0.8s ease-out',
                '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            }}
        >
            {/* Two column layout */}
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                gap={8}
                maxW="1200px"
                mx="auto"
            >
                {/* Left Box - Terms & Conditions */}
                <Box
                    id="terms"
                    flex={1}
                    bg={boxBg}
                    backdropFilter="blur(8px)"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={borderColorPink}
                    p={4}
                    boxShadow="md"
                    sx={{
                        animation: 'slideInLeft 0.6s ease-out',
                        '@keyframes slideInLeft': {
                            '0%': { opacity: 0, transform: 'translateX(-30px)' },
                            '100%': { opacity: 1, transform: 'translateX(0)' }
                        },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: boxShadowHover,
                            borderColor: hoverBorderColor
                        }
                    }}
                >
                    <Box mb={5} textAlign="center">
                        <Heading
                            size="lg"
                            color={headingColor}
                            mb={2}
                            sx={{
                                animation: 'bounceIn 0.8s ease-out',
                                '@keyframes bounceIn': {
                                    '0%': { transform: 'scale(0.3)', opacity: 0 },
                                    '50%': { transform: 'scale(1.05)', opacity: 0.8 },
                                    '70%': { transform: 'scale(0.9)', opacity: 0.9 },
                                    '100%': { transform: 'scale(1)', opacity: 1 }
                                }
                            }}
                        >
                            Terms & Conditions
                        </Heading>
                        <Text
                            fontSize="sm"
                            color={textColor}
                            sx={{
                                animation: 'fadeIn 1s ease-out 0.3s both'
                            }}
                        >
                            Please review our terms carefully
                        </Text>
                    </Box>

                    {/* Vertical connected stepper */}
                    <Box maxW="400px" mx="auto">
                        <ConnectedStepItem
                            number="01"
                            title="Acceptance of Terms"
                            description={
                                <>
                                    By creating an account or using{" "}
                                    <Text
                                        as="span"
                                        bgGradient="linear(to-r, green.400, purple.500)"
                                        bgClip="text"
                                        fontWeight="bold"
                                    >
                                        Delbaram
                                    </Text>

                                    , you confirm that you have read, understood, and agreed to these Terms & Conditions.
                                </>
                            } index={0}
                        />
                        <ConnectedStepItem
                            number="02"
                            title="Eligibility"
                            description={
                                <>
                                    You must be at least 18 years old to use{" "}
                                    <Text
                                        as="span"
                                        bgGradient="linear(to-r, green.400, purple.500)"
                                        bgClip="text"
                                        fontWeight="bold"
                                    >
                                        Delbaram
                                    </Text>
                                    . By using the platform, you confirm that you meet this age requirement.
                                </>
                            }
                            index={1}
                        />
                        <ConnectedStepItem
                            number="03"
                            title="User Account"
                            description={
                                <>
                                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.{" "}
                                    <Text
                                        as="span"
                                        bgGradient="linear(to-r, green.400, purple.500)"
                                        bgClip="text"
                                        fontWeight="bold"
                                    >
                                        Delbaram
                                    </Text>
                                    is not responsible for unauthorized access caused by user negligence.
                                </>
                            }
                            index={2}
                        />
                        <ConnectedStepItem
                            number="04"
                            title="User Conduct"
                            description="Users agree not to"
                            isLast={true}
                            index={3}
                        />
                    </Box>
                </Box>

                {/* Right Box - Privacy Policy */}
                <Box id="privacy" flex={1}
                    bg={boxBg}
                    backdropFilter="blur(8px)"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={borderColorPink}
                    p={4}
                    boxShadow="md"
                    sx={{
                        animation: 'slideInRight 0.6s ease-out',
                        '@keyframes slideInRight': {
                            '0%': { opacity: 0, transform: 'translateX(30px)' },
                            '100%': { opacity: 1, transform: 'translateX(0)' }
                        },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: boxShadowHover,
                            borderColor: hoverBorderColor
                        }
                    }}
                >
                    <Box mb={5} textAlign="center">
                        <Heading
                            size="lg"
                            color={headingColor}
                            mb={2}
                            sx={{
                                animation: 'bounceIn 0.8s ease-out 0.1s both',
                                '@keyframes bounceIn': {
                                    '0%': { transform: 'scale(0.3)', opacity: 0 },
                                    '50%': { transform: 'scale(1.05)', opacity: 0.8 },
                                    '70%': { transform: 'scale(0.9)', opacity: 0.9 },
                                    '100%': { transform: 'scale(1)', opacity: 1 }
                                }
                            }}
                        >
                            Privacy Policy
                        </Heading>
                        <Text
                            fontSize="sm"
                            color={textColor}
                            sx={{
                                animation: 'fadeIn 1s ease-out 0.4s both'
                            }}
                        >
                            How we protect your information
                        </Text>
                    </Box>

                    {/* Vertical connected stepper */}
                    <Box maxW="400px" mx="auto">
                        <ConnectedStepItem
                            number="01"
                            title="Policy Overview"
                            description={
                                <>
                                    At{" "}
                                    <Text
                                        as="span"
                                        bgGradient="linear(to-r, green.400, purple.500)"
                                        bgClip="text"
                                        fontWeight="bold"
                                    >
                                        Delbaram
                                    </Text>
                                    , your privacy is very important to us. This Privacy Policy explains how we collect, use, protect, and handle your information when you use our online chatting platform.
                                </>
                            }
                            index={0}
                        />
                        <ConnectedStepItem
                            number="02"
                            title="Our Commitment to Your Privacy"
                            description={
                                <>
                                    By using{" "}
                                    <Text
                                        as="span"
                                        bgGradient="linear(to-r, green.400, purple.500)"
                                        bgClip="text"
                                        fontWeight="bold"
                                    >
                                        Delbaram
                                    </Text>
                                    , you agree to the practices described in this policy.
                                </>
                            }
                            index={1}
                        />
                        <ConnectedStepItem
                            number="03"
                            title="Personal Information We Collect"
                            description={
                                <>
                                    <Text>• Name or username</Text>
                                    <Text>• Email address or phone number</Text>
                                    <Text>• Profile information provided by you</Text>
                                    <Text>• Profile photo (if uploaded)</Text>
                                </>
                            }
                            index={2}
                        />
                        <ConnectedStepItem
                            number="04"
                            title="Chat & Usage Information We Collect"
                            description={
                                <>
                                    <Text>• Messages sent and received on the platform</Text>
                                    <Text>• App usage data (features used, time spent, interactions)</Text>
                                    <Text>• Device information (device type, OS version, app version)</Text>
                                </>
                            }
                            isLast={true}
                            index={3}
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default LegalConnectedSteppers;