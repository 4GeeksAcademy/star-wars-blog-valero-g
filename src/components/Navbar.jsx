import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const [textSearch, setTextSearch] = useState("");

	const deleteFavorite = (current_uid, current_name) => {
		dispatch({ type: "DELETE_FAVORITE", payload: { uid: current_uid, name: current_name } })
	}

	const navigate = useNavigate();

	const handleClick = (currentType, currentID) => {
		navigate(`/${currentType}/${currentID}`);
	}
	const handleSubmit = (e) =>{
		e.preventDefault();
		store.characters.map( (item,index) => {
			if (item.name.toLowerCase().includes(textSearch.toLowerCase())){
				navigate(`/people/${item.uid}`)
			}
		});
		store.planets.map( (item,index) => {
			if (item.name.toLowerCase().includes(textSearch.toLowerCase())){
				navigate(`/planet/${item.uid}`)
			}
		});
		store.vehicles.map( (item,index) => {
			if (item.name.toLowerCase().includes(textSearch.toLowerCase())){
				navigate(`/vehicle/${item.uid}`)
			}
		})				

	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
				</Link>
				<form className="d-flex ms-auto me-5" role="search" onSubmit={handleSubmit}>
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange = { (e) => setTextSearch(e.target.value) } value = {textSearch}  />
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
				<li className="nav-item dropdown btn btn-primary">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites ({store.favorites.length})
					</a>
					<ul className="dropdown-menu">
						{store.favorites.length == 0 ? <li><a className="dropdown-item ">No Favorites Yet</a></li>
							: store.favorites.map((item, index) => {
								return (
									<li key={index}><div className="dropdown-item d-flex"><span style={{ cursor: "pointer" }} onClick={() => handleClick(item.type, item.uid)}> {item.name}</span><button type="button" onClick={() => deleteFavorite(item.uid, item.name)} className="btn btn-light"><i className="fa-solid fa-trash"></i></button></div></li>
								)
							})}

					</ul>
				</li>
			</div>
		</nav>
	);
};