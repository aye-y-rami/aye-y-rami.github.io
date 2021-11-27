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
	Divider,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { color1Atom } from "../../App";
import { Link } from "react-router-dom";

const DrawerSections = ({ isOpen, onClose }) => {
	const [color1] = useAtom(color1Atom);
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent bgColor={`${color1}.100`} minW="0" w="250px !important">
				<DrawerCloseButton />
				<DrawerHeader>Secciones</DrawerHeader>

				<DrawerBody>
					<Link to="/">
						<Button
							variant="ghost"
							w="100%"
							justifyContent="flex-start"
							onClick={onClose}
						>
							Bienvenida
						</Button>
					</Link>
					<Divider borderColor="gray" />
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
					<Divider borderColor="gray" />
					<Link to="/te-encontre">
						<Button
							variant="ghost"
							w="100%"
							justifyContent="flex-start"
							onClick={onClose}
						>
							Te encontré
						</Button>
					</Link>
					<Divider borderColor="gray" />
					<Link to="/estas-viva">
						<Button
							variant="ghost"
							w="100%"
							justifyContent="flex-start"
							onClick={onClose}
						>
							¡Estás viva!
						</Button>
					</Link>
				</DrawerBody>
				<DrawerFooter>
					<Text fontStyle="italic" fontSize="sm">
						Creo que te amo demasiado...
					</Text>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerSections;
