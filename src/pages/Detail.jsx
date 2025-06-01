import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export const Detail = () =>{
    const {type,id} = useParams();
    //use state de type y id



    //Character properties
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [skinColor, setSkinColor] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [height, setHeight] = useState("");
    const [eyeColor, setEyeColor] = useState("");
    const [mass, setMass] = useState(0);
    const [birthYear, setBirthYear] = useState("");
    //Planet properties
    const [climate,setClimate] = useState("");
    const [surfaceWater, setSurfaceWater] = useState("");
    const [diameter, setDiameter] = useState(0);
    const [rotationPeriod, setRotationPeriod] = useState(0);
    const [terrain, setTerrain] = useState("");
    const [gravity, setGravity] = useState("");
    const [orbitalPeriod, setOrbitalPeriod] = useState(0);
    const [population,setPopulation] = useState(0);
    //Vehicle properties
    const [cargoCapacity, setCargoCapacity] = useState(0);
    const [consumables, setConsumables] = useState("");
    const [costInCredits, setCostInCredits] = useState(0);
    const [crew, setCrew] = useState(0);
    const [length, setLength] = useState(0.0);
    const [manufacturer,setManufacturer] = useState("");
    const [maxAtmopheringSpeed, setMaxAtmospheringSpeed] = useState("");
    const [model, setModel] = useState("");
    const [passengers, setPassengers] = useState("");


    useEffect( ()=> {
        switch (type){
            case "people":
                getDetailsCharacter ();
                break;
            case "planet":
                getDetailsPlanet();
                break;
            case "vehicle":
                getDetailsVehicle();
                break;                
        }       

    } ,[])

    useEffect( ()=> {
        
        switch (type){
            case "people":
                getDetailsCharacter ();
                break;
            case "planet":
                getDetailsPlanet();
                break;
            case "vehicle":
                getDetailsVehicle();
                break;                
        }       

    } ,[type, id])

  async function  getDetailsCharacter () {
        
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`)

		if (response.ok) {
			const data = await response.json();
			if (data.message == "ok") {
                setName(data.result.properties.name);
                setGender(data.result.properties.gender);
                setSkinColor(data.result.properties.skin_color);
                setHairColor(data.result.properties.hair_color);
                setHeight(data.result.properties.height);
                setEyeColor(data.result.properties.eye_color);
                setMass(data.result.properties.mass);
                setBirthYear(data.result.properties.birth_year);
			}
			else {
				console.log(`Character ${id} does not exist`)
				console.log('error: ', response.status, response.statusText);
			}
		}
    }
  async function  getDetailsPlanet() {
        
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)

		if (response.ok) {
			const data = await response.json();
			if (data.message == "ok") {
                setName(data.result.properties.name);
                setClimate(data.result.properties.climate);
                setSurfaceWater(data.result.properties.surfaceWater);
                setDiameter(data.result.properties.diameter);
                setRotationPeriod(data.result.properties.rotationPeriod);
                setTerrain(data.result.properties.terrain);
                setGravity(data.result.properties.gravity);
                setOrbitalPeriod(data.result.properties.orbitalPeriod);
                setPopulation(data.result.properties.population);
                
			}
			else {
				console.log(`Planet ${id} does not exist`)
				console.log('error: ', response.status, response.statusText);
			}
		}
    }

  async function  getDetailsVehicle () {
        
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)

		if (response.ok) {
			const data = await response.json();
			if (data.message == "ok") {
                setName(data.result.properties.name);
                setCargoCapacity(data.result.properties.cargo_capacity);
                setConsumables(data.result.properties.consumables);
                setCostInCredits(data.result.properties.cost_in_credits);
                setCrew(data.result.properties.crew);
                setLength(data.result.properties.length);
                setManufacturer(data.result.properties.manufacturer);
                setMaxAtmospheringSpeed(data.result.properties.max_atmosphering_speed);
                setModel(data.result.properties.model);
                setPassengers(data.result.properties.passengers);
			}
			else {
				console.log(`Vehicle ${id} does not exist`)
				console.log('error: ', response.status, response.statusText);
			}
		}
    }


    return (
        <div className="container mt-5">
            <div className="card mb-3" style={{Width: "75%", background: "rgb(209, 191, 152)", boxShadow:"5px 5px 5px  grey"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={type=="people" ? "/src/assets/img/darth-vader.jpg" : type == "planet" ? "/src/assets/img/Tatooine.jfif" : type == "vehicle" ? "/src/assets/img/X-Wing.jpeg" : ""} className="img-fluid rounded-start" alt="Image"/>
                </div>
                <div className="col-md-4">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                        <p className="card-text"> {type =="people" ? `Gender: ${gender}`: type =="planet" ? `Climate: ${climate}` : type =="vehicle" ? `Cargo Capacity: ${cargoCapacity}` : ""}</p>
                        <p className="card-text"> {type =="people" ? `Skin-Color: ${skinColor}` : type =="planet" ? `Surface Water : ${surfaceWater}` : type =="vehicle" ? `Consumables : ${consumables}`: ""}</p>
                        <p className="card-text"> {type =="people" ? `Hair-Color: ${hairColor}`: type == "planet" ? `Diameter: ${diameter}` : type =="vehicle" ? `Cost in Credits: ${costInCredits}`: ""}</p>
                        <p className="card-text"> {type =="people" ? `Height: ${height}`: type == "planet" ? `Rotation period : ${rotationPeriod}`: type =="vehicle" ? `Crew : ${crew}` : ""}</p>
                        <p className="card-text"> {type =="people" ? `Eye-color: ${eyeColor}` : type == "planet" ? `Terrain : ${terrain}`:  type =="vehicle" ? `Length : ${length  }`: ""}</p>
                        <p className="card-text"> {type =="people" ? `Mass: ${mass}`: type == "planet" ? `Gravity : ${gravity}` : type =="vehicle" ? `Manufacturer : ${manufacturer}` : ""}</p>
                        <p className="card-text"> {type =="people" ? `Birth-year: ${birthYear}`: type =="planet" ? `Orbital Period : ${orbitalPeriod}` : type =="vehicle" ? `Max Atmosphering Speed: ${maxAtmopheringSpeed}` :  ""}</p>
                        <p className="card-text"> {type =="planet" ? `Population: ${population}`: type =="vehicle" ? `Model: ${model}` : ""}</p>
                        <p className="card-text"> {type =="vehicle" ? `Passengers: ${passengers}`: ""}</p>
                </div>
                </div>
                <div className="col-md-4 p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit dolore corporis a error enim officia porro velit voluptates non tempore praesentium, eum vero, autem ducimus fugit sed, in cumque.</p>
                </div>
            </div>
</div>
        </div>

    )
}