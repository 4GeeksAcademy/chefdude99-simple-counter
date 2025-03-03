import React from "react";

//include images into your bundle
import { Contador } from "./Contador";

//create your first component
const Home = ({ segundos }) => {
	let numbers = String(segundos).padStart(6, 0).split("")
	return (
		<div className="Principal">
			<Contador marcador=<i className="fa-solid fa-clock"> </i> />
			{
				numbers.map((value, index) => {
					return (
						<Contador marcador={value} key={index} />
					)
				})
			}


		</div>
	);
};

export default Home;
