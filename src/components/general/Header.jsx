import React from "react";
import {
	Box,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { color1Atom } from "../../App";
import Drawer from "./Drawer";
import { useAtom } from "jotai";
import { FaPaintBrush } from "react-icons/fa";

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [color1, setColor1] = useAtom(color1Atom);

	const handleChangeColor = (color) => {
		setColor1(color);
	};
	return (
		<>
			<HStack
				position="fixed"
				bgColor={`${color1}.400`}
				h="60px"
				w="100%"
				textColor="white"
				px={5}
				justifyContent="space-between"
			>
				<HamburgerIcon cursor="pointer" onClick={onOpen} />
				<Menu>
					<MenuButton marginTop="4px !important">
						<Icon as={FaPaintBrush} />
					</MenuButton>
					<MenuList minW="0" w={"70px"}>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("cyan")}
						>
							<Box bgColor="cyan.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("blue")}
						>
							<Box bgColor="blue.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("gray")}
						>
							<Box bgColor="gray.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("red")}
						>
							<Box bgColor="red.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("pink")}
						>
							<Box bgColor="pink.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("purple")}
						>
							<Box bgColor="purple.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("orange")}
						>
							<Box bgColor="orange.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("yellow")}
						>
							<Box bgColor="yellow.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
						<MenuItem
							display="flex"
							justifyContent="center"
							onClick={() => handleChangeColor("green")}
						>
							<Box bgColor="green.300" h="35px" w="35px" borderRadius="50%" />
						</MenuItem>
					</MenuList>
				</Menu>
			</HStack>
			<Drawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default Header;
