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
} from "@chakra-ui/react";

const DrawerSections = ({ isOpen, onClose }) => {
	return (
		<Drawer
			isOpen={isOpen}
			placement="left"
			onClose={onClose}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Secciones</DrawerHeader>

				<DrawerBody>
					<Button variant="ghost" w="100%">Primer beso</Button>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerSections;
