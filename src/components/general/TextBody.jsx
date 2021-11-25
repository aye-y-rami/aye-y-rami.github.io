import React from "react";
import { Box, Center } from "@chakra-ui/react";

const TextBody = ({ children }) => {
	return (
		<Center py="20px">
			<Box w="90%">
				{children}
			</Box>
		</Center>
	);
};

export default TextBody;
