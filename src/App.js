import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import Header from "./components/general/Header";
import PrincipalImage from "./components/general/PrincipalImage";
import TextBody from "./components/general/TextBody";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Welcome from "./components/pages/Welcome";
import PrimerBeso from "./components/pages/PrimerBeso";

export let color1 = localStorage.getItem("color1") || "pink";

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
