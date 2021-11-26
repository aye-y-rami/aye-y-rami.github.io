import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import { atomWithStorage } from 'jotai/utils'

import Welcome from "./components/pages/Welcome";
import PrimerBeso from "./components/pages/PrimerBeso";
import TeEncontre from "./components/pages/TeEncontre";

export const color1Atom = atomWithStorage("color1", "teal");

function App() {
	return (
		<ChakraProvider>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/primer-beso" element={<PrimerBeso />} />
				<Route path="/te-encontre" element={<TeEncontre />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
