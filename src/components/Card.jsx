import React from "react"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";





export const Card = ({ uid, type, name, eye_color, hair_color, population, terrain, model, manufacturer }) => {

    const id = useRef(uid);
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/${type}/${uid}`)

    }

    const addFavorite = () => {
        dispatch({ type: "ADD_FAVORITE", payload: { uid: uid, name: name, type: type } });
    }


    return (
        <div className="card ms-5" style={{ minWidth: "400px", width: "40%", background: "beige", boxShadow: "5px 5px 5px grey" }}>
            <img src={type == "people" ? "/src/assets/img/darth-vader.jpg" : type == "planet" ? "/src/assets/img/Tatooine.jfif" : type == "vehicle" ? "/src/assets/img/X-Wing.jpeg" : ""} className="card-img-top" alt="Star Wars image" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {(type == "people") ?
                    <div>
                        <p className="card-text">Hair-color: {hair_color}</p>
                        <p className="card-text">Eye-color: {eye_color}</p>
                    </div>
                    : (type == "planet") ?
                        <div>
                            <p className="card-text">Population: {population}</p>
                            <p className="card-text">Terrain: {terrain}</p>
                        </div>
                        : (type == "vehicle") ?
                            <div>
                                <p className="card-text">Model: {model}</p>
                                <p className="card-text">Manufacturer: {manufacturer}</p>
                            </div>
                            : ""}
                <div className="buttons d-flex justify-content-between mt-5">
                    <a onClick={handleDetail} className="btn btn-primary ms-5">Learn more</a>
                    <a data-bs-toggle="modal" data-bs-target="#favoriteModal" onClick={addFavorite} className="btn btn-warning me-5"><i className="fa-solid fa-heart"></i></a>
                </div>
            </div>

            <div className="modal fade" id="favoriteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4" id="exampleModalLabel">Star wars blog</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Added to Favorites!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}