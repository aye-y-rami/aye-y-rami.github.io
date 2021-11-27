import React from "react";
import Page from "../general/Page";

const PrimeraCita = () => {
	return (
		<Page
			title="Primera cita"
			previousSection={{ name: "¡Estás viva!", route: "estas-viva" }}
            imagePath="images/tejas.jpg"
            imageDescription="No saqué fotos de ese día asi que me tomé la libertad de hacer esta maravilla..."
		></Page>
	);
};

export default PrimeraCita;
