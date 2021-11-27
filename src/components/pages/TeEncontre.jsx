import { Box, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import Page from "../general/Page";

const TeEncontre = () => {
	return (
		<Page
			previousSection={{ name: "Primer beso", route: "primer-beso" }}
			nextSection={{ name: "¡Estás viva!", route: "estas-viva" }}
			imagePath="images/te-encontre.jpg"
			title="Te encontré"
		>
			<VStack spacing={5}>
				<Text>
					Recuerdo haber dormido plácidamente en ese depto que estaba cuidando
					Uziel, y al volver a mi casa meditar sobre cómo contactarte. Habías
					soportado mi timidez una vez, ¿estabas dispuesta a soportarla de
					nuevo? ¿Y si me rechazabas? ¿Y si me habías dado un número inventado
					para deshacerte de mí?
				</Text>
				<Text>
					Todas esas estupideces pensé hasta que entré a WhatsApp a ver qué me
					encontraba en el contacto que tan tiernamente habías escrito mal.
				</Text>
				<Text>
					Vi que realmente tu nombre en la app era "Aye", y que tenías de estado
					una parte de una de mis canciones favoritas de Soda Stereo.
				</Text>
				<a href="images/estado-whatsapp.jpg" target="_blank" rel="noreferrer">
					<Image
						src="images/estado-whatsapp.jpg"
						borderRadius="10px"
						boxShadow="lg"
						p="5px"
					/>
				</a>
				<Text>
					<strong>
						<i>Algún día vas a ser mi esposa</i>
					</strong>{" "}
					se me pasó por la mente (pero no nos adelantemos tanto).
				</Text>
				<Box>
					<Image
						src="images/primeros-mensajes-whatsapp.jpg"
						float="right"
						w="60%"
						p="5px"
						borderRadius="10px"
						boxShadow="lg"
					/>
					<Text>
						Al finalmente escribirte, noté que el mensaje no te llegaba. Solo un
						tick. También recordé que me mostraste cómo tu teléfono estaba
						muerto la noche que nos conocimos, así que esperé un par de días.
					</Text>
				</Box>
				<Text>
					Y me preocupé. Más de lo normal para una chica que recién conocía.
				</Text>
				<Text>
					¿El teléfono seguía roto, habías cambiado de número o... Te había
					pasado algo?
				</Text>
				<Box>
					<a href="images/hacker-pepe.gif" target="_blank" rel="noreferrer">
						<Image
							src="images/hacker-pepe.gif"
							float="left"
							w="40%"
							p="5px"
							mx="5px"
							borderRadius="10px"
							boxShadow="lg"
						/>
					</a>
					<Text>
						Y así comenzó mi búsqueda. Como recursos solo tenía tu primer
						nombre, que estudiabas Fonoaudiología y que residías en Córdoba. Lo
						primero que hice fue buscar el padrón electoral de la Facultad de
						Ciencias Médicas y filtrar a todas las Ayelen pero al buscar sus
						nombres en Facebook no aparecía nada, o al menos no la hermosa
						morocha de lentes que había conocido.
					</Text>
				</Box>
				<Text>
					Como último recurso y ya casi rendido de todo mi inservible aparato de
					inteligencia, simplemente busqué "Ayelén" en Instagram mediante la
					cuenta falsa que habíamos creado Fer y yo en el secundario. Buenos
					tiempos.
				</Text>
				<Text w="100%">
					<strong>No podía creer que haya funcionado.</strong>
				</Text>
				<Box>
					<a href="images/instagram1.jpg" target="_blank" rel="noreferrer">
						<Image
							src="images/instagram1.jpg"
							float="right"
							w="55%"
							p="5px"
							mx="5px"
							borderRadius="10px"
							boxShadow="lg"
						/>
					</a>
					<Text w="100%">
						Ahí estabas entre los primeros resultados,{" "}
						<strong>con tus hermosos lentes y tus redondos cachetes.</strong>{" "}
						Resulta que la búsqueda de Instagram es súper inteligente y
						automáticamente muestra gente cerca y quién sabe qué cosas hace más
						de fondo pero me agrada mucho. Pude conocer a distancia a Park, a
						Lis e incluso a tu linda sobrinita en un acto patrio de la escuela.
					</Text>
				</Box>
				<Text>
					A partir de tu Instagram pude también encontrar tu Facebook, y pude
					corroborar que en ninguna de las redes te habías conectado desde que
					nos vimos. Significaba que no me habías dado un número viejo ni nada,
					pero me preocupé aún más y no hacía mas que repetirme a mí mismo que
					<strong> simplemente tu teléfono seguía descompuesto.</strong>
				</Text>
			</VStack>
		</Page>
	);
};

export default TeEncontre;
