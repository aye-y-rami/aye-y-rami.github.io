import { Box, VStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import Page from "../general/Page";

const EstasViva = () => {
	return (
		<Page
			previousSection={{ name: "Te encontré", route: "te-encontre" }}
			imagePath="images/estas-viva-whatsapp.jpg"
			imageDescription="Ese mítico 1 de octubre..."
			title="¡Estás viva!"
		>
			<VStack spacing={5}>
				<Text>
					Un día desperté y me encontré con lo que venía esperando hacía una
					semana.
				</Text>
				<Text fontWeight="bold" w="100%">
					Un mensaje tuyo.
				</Text>
				<Text>
					Mi alivio fue enorme al saber que estabas bien y que finalmente iba a
					poder hablar con la mujer que me había hechizado esa noche de
					primavera, y afortunadamente esta vez en el lugar de actuar como
					autista se me prendió el foquito.
				</Text>
				<Text>
					En el secundario yo siempre era el que arreglaba los teléfonos, ¿cómo
					no iba a sacarle provecho a eso si sabía que por eso no me habías
					respondido? Así que te pregunté por eso, y yo no confié en el
					diagnóstico del estúpido técnico.
				</Text>
				<a
					href="images/arreglar-telefono-whatsapp.jpg"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="images/arreglar-telefono-whatsapp.jpg"
						borderRadius="10px"
						boxShadow="lg"
					/>
				</a>
				<Text>
					Finalmente tenía la excusa perfecta para volver a verte, y averiguar
					si podía llegar a gustarte tanto como te gusté esa noche en la que
					todo fluyó de forma impecable. De mi lado yo estaba seguro de que vos
					me gustabas... <strong>Mucho.</strong>
				</Text>
				<Box>
					<a
						href="images/me-caiste-bien-whatsapp.jpg"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="images/me-caiste-bien-whatsapp.jpg"
							float="left"
							w="65%"
							p="5px"
							borderRadius="10px"
							boxShadow="lg"
						/>
					</a>
					<Text>
						De hecho fui más allá y te dije que al día siguiente de vernos, nos
						viéramos de vuelta para devolverte el teléfono, y esta vez para
						comer algo. Me empezaste a tirar indicios de que yo no era
						simplemente algún boludo más, porque confiaste en darme tu teléfono
						y que me lo llevara a mi casa. En tus propias palabras, te caí bien.
						No puedo evitar sonreir al leer una conversación tan tierna e
						inocente de nuestra parte, pero así fue nuestro comienzo.
					</Text>
				</Box>
				<Text>
					Te vas a reir, pero me súper descolocaste cuando me dijiste{" "}
					<i>"nos juntemos en Tejas"</i>, porque nunca había escuchado ese
					nombre. Procedí a preguntarle rápido a mis amigos, quienes ya sabían
					que habías aparecido y que estaba hablando con vos. Uziel me tiró el
					dato de que seguro te referías al parque al lado de Ciudad
					Universitaria. Es tan solo uno de los ejemplos de la importancia que
					tuvo Uziel en nuestra relación.
				</Text>
				<Box>
					<a
						href="images/nos-vemos-whatsapp.jpg"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="images/nos-vemos-whatsapp.jpg"
							float="right"
							w="65%"
							p="5px"
							borderRadius="10px"
							boxShadow="lg"
						/>
					</a>
					<Text>
						Para terminar la conversación, te tiré un pícaro "Nos vemos" con un
						emoji tirando un beso, sólo para que supieras que{" "}
						<strong>no iba para ser tu amigo.</strong> Sabés que soy cabeza dura
						y yo iba a luchar por tu corazón que por momentos parecía el de un
						tierno gatito y por otros una fortaleza de hielo. Simplemente lo iba
						a hacer.
					</Text>
				</Box>
				<Text w="100%" fontWeight="bold">
					A las 13 íbamos a reencontrarnos.
				</Text>
			</VStack>
		</Page>
	);
};

export default EstasViva;
