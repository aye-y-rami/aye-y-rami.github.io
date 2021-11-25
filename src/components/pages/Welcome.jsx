import React from "react";
import Page from "../general/Page";
import { Text, VStack } from "@chakra-ui/react";

const Welcome = () => {
	return (
		<Page isWelcome nextSection={{ name: "Primer beso", route: "primer-beso" }}>
			<Text fontSize="2xl" textAlign="center">
				Bienvenida a nuestra página
			</Text>
			<VStack spacing={5} mt="5">
				<Text>
					Si estás acá, supongo que ya sabrás por qué. En esta página voy a
					hacer el mejor intento en plasmar el amor que hemos desprendido
					durante ya más de 3 años. Es una tarea difícil desde ya, porque han
					pasado un millón de cosas en todo este tiempo y realmente hay mucho
					amor, ñoñadas, comedia y hasta tragedia que contar. Deseame suerte!
				</Text>
				<Text>
					Abajo de cada sección voy a dejar dos botones para volver a la sección
					anterior o ir a la siguiente. También podés tocar el ícono de bien
					arriba a la izquierda en la página con forma de hamburguesa para ver
					todas las secciones e ir a la que más te guste.
				</Text>
				<Text>
					También está la sección de galería, donde voy a subir todas las fotos
					de nuestro amor que sean aptas para todo público para verlas de una
					forma fácil y rápida cuando más gustes. Espero que disfrutes este
					proyecto que seguramente irá creciendo.
				</Text>
				<Text>
					Ah, y si no te gusta el color rosa ñoño que elegí podés cambiarlo
					desde el botón del pincelito.
				</Text>
				<Text textAlign="end" fontStyle="italic" w="100%">
					Con amor, Rami.
				</Text>
			</VStack>
		</Page>
	);
};

export default Welcome;
