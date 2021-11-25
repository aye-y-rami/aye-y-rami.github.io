import React, { useEffect, useRef } from "react";
import { Box, Button, HStack, ScaleFade } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { color1 } from "../../App";
import Header from "./Header";
import PrincipalImage from "./PrincipalImage";
import TextBody from "./TextBody";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Page = ({
	children,
	imagePath,
	isWelcome,
	previousSection,
	nextSection,
}) => {
    const fadeIn = useRef();
	useEffect(() => {
		fadeIn.current = true;
		return () => {
			fadeIn.current = false;
		};
	}, []);
	const navigate = useNavigate();
	return (
		<Box minH="100vh" bgColor={`${color1}.100`}>
			<Header />
			<ScaleFade in={fadeIn}>
				<Box paddingTop="60px">
					{!isWelcome && <PrincipalImage imagePath={imagePath} />}
					<TextBody>{children}</TextBody>
				</Box>
				<HStack justifyContent="space-around" paddingBottom="100px">
					{previousSection && (
						<Button
							fontSize="sm"
							colorScheme={color1}
							leftIcon={<ArrowBackIcon />}
							onClick={() => navigate(`/${previousSection.route}`)}
						>
							{previousSection.name}
						</Button>
					)}
					{nextSection && (
						<Button
							fontSize="sm"
							colorScheme={color1}
							rightIcon={<ArrowForwardIcon />}
							onClick={() => navigate(`/${nextSection.route}`)}
						>
							{nextSection.name}
						</Button>
					)}
				</HStack>
			</ScaleFade>
		</Box>
	);
};

export default Page;
