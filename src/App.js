import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Welcome from "./components/pages/Welcome";
import PrimerBeso from "./components/pages/PrimerBeso";
import { atomWithStorage } from 'jotai/utils'

export const color1Atom = atomWithStorage("color1", "teal");

function App() {
	return (
		<ChakraProvider>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/primer-beso" element={<PrimerBeso />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
