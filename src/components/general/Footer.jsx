import { Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import { color1Atom } from "../../App";

const Footer = () => {
	const [color1] = useAtom(color1Atom);
	return (
		<Flex
			position="absolute"
			bottom="0"
			w="100vw"
			color="white"
            fontSize="sm"
			bgColor={`${color1}.500`}
			h="35px"
			alignItems="flex-end"
			justifyContent="flex-end"
            fontStyle="italic"
		>
			<Text p="5px">No quiero soñar mil veces las mismas cosas...</Text>
		</Flex>
	);
};

export default Footer;
