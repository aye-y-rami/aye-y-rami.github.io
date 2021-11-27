import React from "react";
import { Box, Center } from "@chakra-ui/react";

const TextBody = ({ children }) => {
	return (
		<Center py="20px">
			<Box maxW="90%" w="500px">
				{children}
			</Box>
		</Center>
	);
};

export default TextBody;
