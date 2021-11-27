import { Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const PrincipalImage = ({ imagePath, imageDescription }) => {
	return (
		<Center w="100vw" my="20px">
			<Center
				maxW="80%"
				rounded="lg"
				boxShadow="dark-lg"
				overflow="hidden"
				flexDirection="column"
			>
				<a href={imagePath} target="_blank" rel="noreferrer">
					<Image src={imagePath} maxW="100%" />
				</a>
				{imageDescription && (
					<Text fontSize="sm" fontStyle="italic">
						{imageDescription}
					</Text>
				)}
			</Center>
		</Center>
	);
};

export default PrincipalImage;
