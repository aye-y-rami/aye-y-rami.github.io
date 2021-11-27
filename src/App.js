import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import { atomWithStorage } from "jotai/utils";

import Bienvenida from "./components/pages/Bienvenida";
import PrimerBeso from "./components/pages/PrimerBeso";
import TeEncontre from "./components/pages/TeEncontre";
import EstasViva from "./components/pages/EstasViva";
import PrimeraCita from "./components/pages/PrimeraCita";
import SegundoBeso from "./components/pages/SegundoBeso";

export const color1Atom = atomWithStorage("color1", "cyan");

function App() {
	return (
		<ChakraProvider>
			<Routes>
				<Route path="/" element={<Bienvenida />} />
				<Route path="/primer-beso" element={<PrimerBeso />} />
				<Route path="/te-encontre" element={<TeEncontre />} />
				<Route path="/estas-viva" element={<EstasViva />} />
				<Route path="/primera-cita" element={<PrimeraCita />} />
				<Route path="/segundo-beso" element={<SegundoBeso />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
