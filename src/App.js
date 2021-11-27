import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import { atomWithStorage } from "jotai/utils";

import Bienvenida from "./components/pages/Bienvenida";
import PrimerBeso from "./components/pages/PrimerBeso";
import TeEncontre from "./components/pages/TeEncontre";
import EstasViva from "./components/pages/EstasViva";

export const color1Atom = atomWithStorage("color1", "cyan");

function App() {
	return (
		<ChakraProvider>
			<Routes>
				<Route path="/" element={<Bienvenida />} />
				<Route path="/primer-beso" element={<PrimerBeso />} />
				<Route path="/te-encontre" element={<TeEncontre />} />
				<Route path="/estas-viva" element={<EstasViva />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
