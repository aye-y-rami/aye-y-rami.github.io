import React, { useEffect, useRef } from "react";
import { Box, Button, HStack, ScaleFade, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { color1Atom } from "../../App";
import Header from "./Header";
import PrincipalImage from "./PrincipalImage";
import TextBody from "./TextBody";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useAtom } from "jotai";
import Footer from "./Footer";

const Page = ({ children, imagePath, previousSection, nextSection, title }) => {
	const [color1] = useAtom(color1Atom);
	const fadeIn = useRef();
	useEffect(() => {
		window.scrollTo(0, 0);
		fadeIn.current = true;
		return () => {
			fadeIn.current = false;
		};
	}, []);
	return (
		<Box minH="100vh" bgColor={`${color1}.100`}>
			<Header />
			<ScaleFade in={fadeIn}>
				<Box paddingTop="80px">
					<Text fontSize="2xl" textAlign="center" fontWeight="bold">
						{title}
					</Text>
					{imagePath && <PrincipalImage imagePath={imagePath} />}
					<TextBody>{children}</TextBody>
				</Box>
				<HStack justifyContent="space-around" paddingBottom="60px">
					{previousSection && (
						<Link to={`/${previousSection.route}`}>
							<Button
								fontSize="sm"
								colorScheme={color1}
								textColor={color1 === "yellow" ? "black" : "white"}
								leftIcon={<ArrowBackIcon />}
							>
								{previousSection.name}
							</Button>
						</Link>
					)}
					{nextSection ? (
						<Link to={`/${nextSection.route}`}>
							<Button
								fontSize="sm"
								colorScheme={color1}
								textColor={color1 === "yellow" ? "black" : "white"}
								rightIcon={<ArrowForwardIcon />}
							>
								{nextSection.name}
							</Button>
						</Link>
					) : <Text>Eso es todo, por ahora...</Text>}
				</HStack>
			</ScaleFade>
			<Footer />
		</Box>
	);
};

export default Page;
