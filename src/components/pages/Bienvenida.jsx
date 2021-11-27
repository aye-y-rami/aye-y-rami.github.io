import React from "react";
import Page from "../general/Page";
import { Text, VStack, Image } from "@chakra-ui/react";

const Welcome = () => {
	return (
		<Page
			nextSection={{ name: "Primer beso", route: "primer-beso" }}
			imagePath="images/bienvenida.jpg"
			title="Bienvenida a nuestra página"
		>
			<VStack spacing={5} mt="5">
				<Text>
					Si estás acá, supongo que ya sabrás por qué. En esta página voy a
					hacer el mejor intento en plasmar el amor que hemos desprendido
					durante ya más de 3 años. Es una tarea difícil desde ya, porque han
					pasado un millón de cosas en todo este tiempo y realmente hay mucho
					amor, ñoñadas, comedia y hasta tragedia que contar. Quizás hasta cosas
					que no sabías, contadas desde mi punto de vista. Tomalo como un altar
					creado para inmortalizar nuestro amol. Pase lo que pase, jamás voy a
					dar de baja esta página.
				</Text>
				<VStack>
					<VStack rounded="lg" boxShadow="lg" overflow="hidden" m={2} p="5px">
						<a href="images/up.gif" target="_blank" rel="noreferrer">
							<Image src="images/up.gif" />
						</a>
						<Text fontSize="sm" fontStyle="italic" mx={2} pb={2}>
							¿Y si lo vemos como nuestro libro de aventuras virtual?
						</Text>
					</VStack>
				</VStack>
				<Text>
					Abajo de cada sección voy a dejar dos botones para volver a la sección
					anterior o ir a la siguiente. También podés tocar el ícono de bien
					arriba a la izquierda en la página con forma de hamburguesa para ver
					todas las secciones e ir a la que más te guste.
				</Text>
				<Text>
					También voy a agregar más adelante la sección de galería, donde voy a
					subir todas las fotos de nuestro amor que sean aptas para todo público
					para verlas de una forma fácil y rápida cuando más gustes. Espero que
					disfrutes este proyecto que seguramente irá creciendo.
				</Text>
				<Text>
					Ah, y si el cian ya no es tu color favorito podés cambiarlo desde el
					botón del pincelito.
				</Text>
				<a href="images/ositos-abrazo.gif" target="_blank" rel="noreferrer">
					<Image
						rounded="lg"
						boxShadow="lg"
						src="images/ositos-abrazo.gif"
						p="5px"
					/>
				</a>
				<Text textAlign="end" fontStyle="italic" w="100%">
					Con amor, Rami.
				</Text>
			</VStack>
		</Page>
	);
};

export default Welcome;
