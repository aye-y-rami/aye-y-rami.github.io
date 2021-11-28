import { VStack, Text, Box, Image } from "@chakra-ui/react";
import React from "react";
import Page from "../general/Page";

const SegundoBeso = () => {
	return (
		<Page
			previousSection={{ name: "Primera cita", route: "primera-cita" }}
			imagePath="images/segundo-beso.jpg"
			imageDescription="Imágen puramente ilustrativa. Creo que en realidad no fue tan sexy."
			title="Segundo beso"
		>
			<VStack spacing={5}>
				<Text>
					Dudaba si nombrar esta sección segunda cita o segundo beso, pero creo
					que lo último es lo que más destacó lejos de aquel 3 de octubre. ¿Vos
					qué opinás? Estoy seguro de que recordás con cariño este día.
				</Text>
				<Text>
					Ese día volví a levantarme temprano, pero esta vez para ir a trabajar
					por la mañana y verte por la tarde, cosa que se volvería una rutina
					más adelante. ¿Sabés de qué más fue la primera vez? Fue la primera vez
					que pactamos Caseratto como punto de encuentro, ya que vos salías de
					la facu a la misma hora que yo salía del trabajo y el punto medio era
					esa zona de la Chacabuco.
				</Text>
				<Text>
					Y así tipo 13:30 salí del trabajo y empecé a caminar por Colón para
					doblar por Maipú que después se vuelve Chacabuco. En cada paso sentía
					la ansiedad por verte porque ese día quería ir un paso más allá en
					dejarte en claro que no quería ser tu amigo. Creo que me terminó
					saliendo bastante bien, ¿no?
				</Text>
				<Text>
					Finalmente llegué, me senté afuera y vos llegaste unos minutos
					después. Nos saludamos con un abrazo y pasamos adentro.
				</Text>
				<Text>
					Ya dentro de Caseratto me demostraste qué clase de mujer eras otra
					vez. Pedimos cada uno una copa bien golda, seguimos hablando de
					nuestros gustos y demás y al querer pagar como el sr. Rami caballeroso
					que soy me sacaste cagando. No me dejaste pagar de ninguna manera por
					lo que vos habías consumido{" "}
					<Text fontSize="sm" fontStyle="italic" as="span">
						(¿ya te dije que me quiero casar?)
					</Text>
				</Text>
				<Text>
					Y ganaste, vos pagaste lo tuyo como a vos te pareció justo a pesar de
					mi insistencia. Al salir hicimos lo que más nos gustaba hacer en
					nuestros comienzos: caminar. Otra vez encaramos para Ciudad
					Universitaria y caminamos y caminamos hasta que pasamos por ese lugar
					raro que no sé ni cómo definirlo pero estoy seguro de que sabés de qué
					lugar hablo. Tiene muchas escaleras y una hermosa vista arriba.
				</Text>
				<Text>
					Estando arriba, seguimos hablando de nosotros hasta que hubo un
					silencio. Un silencio no incómodo, sino más bien un silencio que pedía
					a gritos alguna acción de mi parte, y me puse rojo como un tomate.
					Recuerdo cuánto te reiste de mi cara, hasta que junté toda mi fuerza
					psicológica y te pregunté a mi manera lo que había ido a
					preguntarte... Fue algo así...
				</Text>
				<Box boxShadow="xl" rounded="lg">
					<Text fontStyle="italic" p={2}>
						Aye... ¿Sólo nos vamos a besar cuando tengamos litros de alcohol en
						sangre?
					</Text>
				</Box>
				<Box>
					<a href="images/timida.gif" target="_blank" rel="noreferrer">
						<Image
							src="images/timida.gif"
							borderRadius="10px"
							float="left"
							w="50%"
							boxShadow="lg"
							p="5px"
						/>
					</a>
					<Text>
						Tu reacción fue muy vos. También te sonrojaste, te tapaste la cara
						con el pelo, empezaste a mirar para los costados y pensaste un rato
						la respuesta. Estabas pensando seriamente si darme aquella
						confianza, hasta que finalmente me dijiste...
					</Text>
				</Box>
				<Box boxShadow="xl" rounded="lg" w="100%">
					<Text fontStyle="italic" w="100%" p={2}>
						Mmm, bueno...
					</Text>
				</Box>
				<Text>
					Y te agarré de la cintura, nos miramos fijamente y simplemente
					acercamos nuestros labios. Lo demás vino solo. Nos besamos un buen
					rato, y no podíamos parar a pesar de que el sol nos estaba matando
					allá arriba. Era demasiado hermoso momento para parar.
				</Text>
				<Text>
					¿Y por qué te habías tomado tu tiempo para decidir si besarme o no? La
					respuesta es simple: porque a partir de ahí{" "}
					<strong>no hubo vuelta atrás.</strong> Estábamos enamorados.
				</Text>
				<Text>
					Los momentos que le siguieron a eso fueron también hermosos. Ya no
					caminábamos cada uno por su cuenta, sino que tuviste la confianza de
					tomarme de la mano mientras bajábamos las escaleras. Esa mirada tan
					feliz que confiaba plenamente en mí no me la olvido jamás, porque fue
					la primera de muchas.
				</Text>
				<Box>
					<a
						href="images/gimnasio-whatsapp.jpg"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="images/gimnasio-whatsapp.jpg"
							borderRadius="10px"
							float="right"
							w="60%"
							boxShadow="lg"
							p="5px"
						/>
					</a>
					<Text>
						Tuvimos que separarnos de nuevo, principalmente porque en ese
						entonces tenía un estilo de vida muy organizado e iba todos los días
						al gimnasio con Mariano, y sólo por esa razón tuve que irme. Tengo
						esta captura en la que me puse muy triste porque Mariano me dijo que
						al final no íbamos, y vos me dijiste que podríamos haber estado más
						tiempo juntos...
					</Text>
				</Box>
				<Text>
					¿Qué mas evidencia podía pedir de que la habías pasado bien y de que
					querías estar más tiempo conmigo? Podríamos habernos besado por
					incluso más tiempo, hasta que el sol bajara. No paraba de pensar en
					eso, y cuando me mandaste esos mensajes supe que vos también.
				</Text>
				<Text>
					Finalmente había empezado a penetrar en serio tu corazón de hielo.
					Tenía tu afecto y tu confianza en mi vida, y quedamos en seguirnos
					viendo. Fui feliz... Muy feliz.
				</Text>
				<Text fontWeight="bold" w="100%">
					Gracias.
				</Text>
			</VStack>
		</Page>
	);
};

export default SegundoBeso;
