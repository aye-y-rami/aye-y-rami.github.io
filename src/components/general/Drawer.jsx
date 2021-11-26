import React from "react";
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Text,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { color1Atom } from "../../App";
import { Link } from "react-router-dom";

const DrawerSections = ({ isOpen, onClose }) => {
	const [color1] = useAtom(color1Atom);
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent bgColor={`${color1}.100`}>
				<DrawerCloseButton />
				<DrawerHeader>Secciones</DrawerHeader>

				<DrawerBody>
					<Link to="/primer-beso">
						<Button
							variant="ghost"
							w="100%"
							justifyContent="flex-start"
							onClick={onClose}
						>
							Primer beso
						</Button>
					</Link>
				</DrawerBody>
				<DrawerFooter>
					<Text fontStyle="italic">Creo que te amo demasiado...</Text>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerSections;
