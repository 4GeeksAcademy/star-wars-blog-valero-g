import { element } from "prop-types";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { Card } from "../components/Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const MAX_CHARACTERS = 82;
	const MAX_PLANETS = 60;
	const MAX_VEHICLES = 39;

	useEffect(() => {
		if (store.characters.length < 80) {
			for (let i = 1; i < 82; i++) {
				get_character(i);
			}
		}
		if (store.planets.length < 50) {
			for (let i = 1; i < 55; i++) {
				get_planet(i);
			}
		}
		if (store.vehicles.length < 10) {
			for (let i = 1; i < 35; i++) {
				get_vehicle(i);
			}
		}

	}, [])

	useEffect(() => {
		localStorage.setItem("store", JSON.stringify(store));
	}, [store]);


	const get_character = async (id) => {
		const response = await fetch(`https://www.swapi.tech/api/people/${id}`)

		if (response.ok) {
			const data = await response.json();
			if (data.message == "ok") {
				await dispatch({ type: "ADD_CHARACTER", payload: { uid: id, name: data.result.properties.name, hair_color: data.result.properties.hair_color, eye_color: data.result.properties.eye_color } });
			}
			else {
				console.log(`Character ${id} does not exist`)
				console.log('error: ', response.status, response.statusText);
			}
		}
	};

	const get_planet = async (id) => {
		const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)

		if (response.ok) {
			const data = await response.json();
			if (data.message == "ok") {
				await dispatch({ type: "ADD_PLANET", payload: { uid: id, name: data.result.properties.name, population: data.result.properties.population, terrain: data.result.properties.terrain } });
			}
			else {
				console.log(`Planet ${id} does not exist`)
				console.log('error: ', response.status, response.statusText);
			}
		}
	};

	const get_vehicle = async (id) => {
		const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)

		if (response.ok) {
			const data = await response.json();
			if (data.message == "ok") {
				await dispatch({ type: "ADD_VEHICLE", payload: { uid: id, name: data.result.properties.name, model: data.result.properties.model, manufacturer: data.result.properties.manufacturer } });
			}
			else {
				console.log(`Vehicle ${id} does not exist`)
				console.log('error: ', response.status, response.statusText);
			}
		}
	};

	return (
		<div>
			<div className="text-center mt-5">
				<h2>Characters</h2>
				<div className="container">
					<div id="carouselCharacter" className="carousel carousel-dark slide m-3">
						<div className="carousel-inner p-5">

							{store.characters.map((character, index) => {
								return (
									<div className={`carousel-item ${index === 0 ? "active" : ""} `} key={index}>
										<div className="d-flex justify-content-center">
											<Card key={index} uid={character.uid} type="people" name={character.name} hair_color={character.hair_color} eye_color={character.eye_color} />
										</div>
									</div>
								)
							})}

						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselCharacter" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselCharacter" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>


			</div>

			<div className="text-center mt-5">
				<h2>Planets</h2>
				<div className="container">
					<div id="carouselPlanet" className="carousel carousel-dark slide m-3">
						<div className="carousel-inner p-5">

							{store.planets.map((planet, index) => {
								return (
									<div className={`carousel-item ${index === 0 ? "active" : ""} `} key={index}>
										<div className="d-flex justify-content-center">
											<Card key={index} uid={planet.uid} type="planet" name={planet.name} population={planet.population} terrain={planet.terrain} />
										</div>
									</div>
								)
							})}

						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselPlanet" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselPlanet" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
			<div className="text-center mt-5">
				<h2>Vehicles</h2>
				<div className="container">
					<div id="carouselVehicle" className="carousel carousel-dark slide m-3">
						<div className="carousel-inner p-5">

							{store.vehicles.map((vehicle, index) => {
								return (
									<div className={`carousel-item ${index === 0 ? "active" : ""} `} key={index}>
										<div className="d-flex justify-content-center">
											<Card key={index} uid={vehicle.uid} type="vehicle" name={vehicle.name} model={vehicle.model} manufacturer={vehicle.manufacturer} />
										</div>
									</div>
								)
							})}

						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselVehicle" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselVehicle" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}; 