import React, { useEffect, useRef } from "react";
import { Box, Button, HStack, ScaleFade } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
						<Link to={`/${previousSection.route}`}>
							<Button
								fontSize="sm"
								colorScheme={color1}
								leftIcon={<ArrowBackIcon />}
							>
								{previousSection.name}
							</Button>
						</Link>
					)}
					{nextSection && (
						<Link to={`/${previousSection.route}`}>
							<Button
								fontSize="sm"
								colorScheme={color1}
								rightIcon={<ArrowForwardIcon />}
							>
								{nextSection.name}
							</Button>
						</Link>
					)}
				</HStack>
			</ScaleFade>
		</Box>
	);
};

export default Page;
