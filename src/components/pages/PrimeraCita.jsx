import { VStack, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import Page from "../general/Page";

const PrimeraCita = () => {
	return (
		<Page
			title="Primera cita"
			previousSection={{ name: "¡Estás viva!", route: "estas-viva" }}
			nextSection={{ name: "Segundo beso", route: "segundo-beso" }}
			imagePath="images/tejas.jpg"
			imageDescription="No saqué fotos de ese día asi que me tomé la libertad de hacer esta maravilla..."
		>
			<VStack spacing={5}>
				<Text>
					Ese día me levanté súper temprano y ansioso, y conociéndome deberías
					saber cuánto vale eso para mí. La idea era pasar a verte tipo 13,
					recoger tu teléfono, ir a trabajar, intentar arreglarlo y vernos más
					seriamente al día siguiente pero eso no fue exactamente lo que pasó.
				</Text>
				<Text>
					Mientras estaba en camino, me comentaste que estabas con tu hermana
					esperándome. Me puse 15 veces más nervioso... Estaba temblando, pero
					estaba decidido también. Recuerdo haber ido con mi típica vestimenta
					de buzito negro, jean azul y zapatillas negras (buzito que a Lis le
					terminó gustando).
				</Text>
				<VStack rounded="lg" boxShadow="lg" overflow="hidden" p="5px">
					<a
						href="images/mi-hermana-whatsapp.jpg"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="images/mi-hermana-whatsapp.jpg" rounded="lg" />
					</a>
					<Text fontSize="sm" fontStyle="italic" mx={2} pb={2}>
						Las dos misteriosas preguntas... ¿Recordás cuáles eran?
					</Text>
				</VStack>
				<Text>
					Me acerqué a la mesa en donde estaban sentadas, las saludé y me senté
					en uno de los dos asientos libres, con Lis frente a mí y vos a mi
					izquierda. Lo que me encontré en esa mesa creo que fue lo más tierno
					que vi en mi vida y por eso lo recuerdo tan vívidamente.
				</Text>
				<Box>
					<VStack
						rounded="lg"
						boxShadow="lg"
						overflow="hidden"
						w="60%"
						float="right"
						m={2}
						p="5px"
					>
						<a href="images/gato-timido.jpg" target="_blank" rel="noreferrer">
							<Image src="images/gato-timido.jpg" rounded="lg" />
						</a>
						<Text fontSize="sm" fontStyle="italic" mx={2} pb={2}>
							Vos en ese preciso momento.
						</Text>
					</VStack>
					<Text>
						Frente a mí estaba la hermana súper sociable, extrovertida y alta
						que no paraba de sacarme conversación. Del lado izquierdo, había una
						enana pomposa que se cubría la cara con su hermoso pelo largo, negro
						y lacio que brillaba como un eclipse solar y no decía ni una sola
						palabra mientras apuntaba su mirada al piso. Tu hermosura era
						exactamente como la recordaba aunque intentaras esconderla. A pesar
						de que Lis me preguntaba muchas cosas, no podía sacarte los ojos de
						encima. Increíblemente, estabas más tímida que yo, lo que me hizo
						ver que la situación era igual para vos en muchos sentidos.
					</Text>
				</Box>
				<Text>
					Despúes de un rato, cayó el en ese entonces novio de Lis, hablamos un
					rato y nos dejaron solos. Lis sí que quería hacernos la gamba esa
					tarde{" "}
					<i>
						(hasta me preguntó qué comida me gustaba para decirte que algún día
						me la podías hacer, solo para molestarte).
					</i>{" "}
					Podría haberme ido a trabajar, pero no me importaba en absoluto.
					Probablemente ni se me pasó por la cabeza. Solo quería descubrir qué
					había dentro de ese caparazón de timidez tan hermoso que me había
					encontrado, y para eso teníamos que caminar y hablar como hicimos el
					primer día. Y eso hicimos.
				</Text>
				<Text>
					Caminamos por toda Ciudad Universitaria y hablamos sobre todo. Te
					pregunté hasta tu posición política y religiosa, cosa que te habrá
					parecido rara, pero quería conocerte en la mayor profundidad posible
					ahora que tenía la oportunidad, y con cada palabra me pareciste una
					persona <strong>cada vez más interesante.</strong> Cada respuesta
					tenía pensamiento detrás, cosa que no se puede decir de cualquier
					persona aunque suene raro.
				</Text>
				<Text>
					En un momento recuerdo que nos sentamos en esa zona media escondida de
					Ciudad Universitaria, que parece una especie de ágora o aula al aire
					libre en desuso, donde hay muchos lugares de cemento para sentarse y
					un espacio adelante para que alguien hable y sea escuchado por todos
					en forma de círculo. Lo más mágico que recuerdo de ese momento fue
					cuando me dijiste que te parecía lindo, y te respondí que vos también
					me parecías muy linda... Y después hubo un silencio de unos segundos
					en donde los dos procesamos lo que acabábamos de decir... Y después
					seguimos charlando y caminando.
				</Text>
				<Box>
					<a
						href="images/gracias-original-whatsapp.jpg"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="images/gracias-original-whatsapp.jpg"
							float="left"
							boxShadow="lg"
							w="60%"
							borderRadius="10px"
							m={2}
							p="5px"
						/>
					</a>
					<Text>
						Finalmente tuviste que irte, pero la idea de vernos al día siguiente
						para comer quedó en la cabeza de los dos. Yo realmente la había
						pasado muy bien y quería hacértelo saber y agradecerte, y de ahí
						nació este mensaje que para mí es muy importante. Estaba muy
						agradecido de haberte conocido, y que me permitieras cada vez entrar{" "}
						<strong>más profundo en tu corazón.</strong> Fue también la primera
						vez que elegiste la palabra <i>"original"</i> para describirme, cosa
						que se repetiría mucho después.
					</Text>
				</Box>
				<Text w="100%">Siempre hemos sido una pareja muy original.</Text>
			</VStack>
		</Page>
	);
};

export default PrimeraCita;
