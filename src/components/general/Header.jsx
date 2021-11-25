import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { color1 } from "../../App";
import Drawer from "./Drawer";

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<HStack
				position="fixed"
				bgColor={`${color1}.300`}
				h="60px"
				w="100%"
				textColor="white"
			>
				<Text onClick={onOpen}>Prueba</Text>
			</HStack>
			<Drawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default Header;
