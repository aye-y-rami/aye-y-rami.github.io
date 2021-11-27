import { Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import Page from "../general/Page";

const PrimerBeso = () => {
	return (
		<Page
			previousSection={{ name: "Bienvenida", route: "" }}
			nextSection={{ name: "Te encontré", route: "te-encontre" }}
			imagePath="images/primer-beso.jpg"
			title="Primer beso"
		>
			<VStack spacing={5}>
				<Text>
					Dicen que el amor a primera vista no existe, pero según testigos esa
					noche no paraba de buscarte. Te vi y simplemente me encantaste. Tu
					figura, tus gestos y tu presencia me cautivaron.
				</Text>
				<Text>
					Recuerdo que bailamos un rato y después te dije algo muy pero muy
					estúpido y tímido, y tu reacción en el lugar de pegar la vuelta como
					cualquier persona racional fue... Besarme. Nos besamos, mucho,
					mientras seguíamos bailando y nos reíamos como dos tortolitos aunque
					apenas nos conociéramos. Esta foto nació de ese mágico momento que la
					verdad no sé si duró 10 minutos o 2 horas. Creo que es difícil
					recordar el paso del tiempo cuando uno está{" "}
					<strong>muy feliz.</strong>
				</Text>
				<Text>
					Te pedí por favor que me anotaras tu número en mi teléfono y de
					vuelta, a diferencia de una persona racional, lo hiciste (aunque lo
					anotaste con <strong>ññ</strong> al final y jamás pienso cambiar ese
					nombre de contacto). Y así nos quedamos abrazados hasta que el boliche
					comenzó a cerrar y teníamos que irnos, si no probablemente nos
					hubieramos quedado un buen rato más.
				</Text>
				<Text>
					A la salida tuviste la confianza de dejar que te tome de la cintura
					porque confiaste en que te iba a tratar con respeto, lo cual jamás
					olvidé. De hecho vos misma pusiste mi mano ahí, para que lo supiera.
					Mientras Uziel discutía con la prima de Carla que la estaba
					sosteniendo toda moribunda, nosotros simplemente hablamos a unos
					metros de distancia de los demás.
				</Text>
				<Text w="100%" fontWeight="bold">
					Hablamos...
				</Text>
				<a href="images/caminando.jpg" target="_blank" rel="noreferrer">
					<Image
						src="images/caminando.jpg"
						borderRadius="10px"
						boxShadow="lg"
					/>
				</a>
				<Text>
					Hablamos de nuestros gustos, nuestros deseos, lo que nos era
					importante en la vida, qué queríamos de nuestro futuro, hasta incluso
					me diste consejos de vida en ese delicado momento en el que estaba por
					estudiar medicina...
				</Text>
				<Text>
					Finalmente llegamos a Plaza España en donde estaba Lis esperándote, y
					sí que caminamos para llegar hasta ahí a pesar de que no se sintió
					así. Recuerdo que no quería dejarte ir, simplemente quería que la
					noche durara para siempre y algo en tus ojos me hizo sentir que
					pensabas lo mismo, pero aún así era hora de decir...{" "}
					<strong>
						<i>Hasta pronto.</i>
					</strong>
				</Text>
				<Text>
					Después de ver que se fueran de forma segura, pegamos la vuelta los
					tres estúpidos mosqueteros y fuimos al depto que estaba cuidando
					Uziel. Yo estaba totalmente ido y no podía parar de pensar en vos. Mis
					amigos bromeaban con que me había enamorado y yo ni les respondía
					porque estaba ocupado planeando cómo iba a volver a verte.
				</Text>
				<Text w="100%">Ese fue nuestro comienzo.</Text>
			</VStack>
		</Page>
	);
};

export default PrimerBeso;
