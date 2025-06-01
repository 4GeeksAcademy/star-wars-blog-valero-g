export const initialStore=()=>{

  const savedStore = localStorage.getItem("store");
  return savedStore ? JSON.parse(savedStore) :
    {
      characters: [],
      planets :[],
      vehicles:[],
      favorites:[]
    }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'ADD_CHARACTER':

      //const { payload_uid, payload_name, payload_hair_color, payload_eye_color } = action.payload
      //console.log(payload_uid);
      let foundCharacter = store.characters.find(element => element.uid == action.payload.uid);
				if (foundCharacter == undefined){
          return {...store, characters: [...store.characters,{uid: action.payload.uid, name: action.payload.name, hair_color: action.payload.hair_color, eye_color: action.payload.eye_color} ]};
        } else{
          console.log("Character already present in store Characters array");
          return store;
        }
    case 'ADD_PLANET':
      let foundPlanet = store.planets.find(element => element.uid == action.payload.uid);
      if (foundPlanet == undefined){
        return{...store,planets:[...store.planets, {uid:action.payload.uid, name: action.payload.name, population : action.payload.population, terrain: action.payload.terrain}]}
      } else{
        console.log("Planet already present in the store Planets array");
        return store;
      }
    case 'ADD_VEHICLE':
      let foundVehicle = store.vehicles.find(element => element.uid== action.payload.uid);
      if (foundVehicle == undefined){
        return {...store, vehicles :[...store.vehicles, {uid: action.payload.uid, name: action.payload.name, model: action.payload.model, manufacturer: action.payload.manufacturer}]}
      }else{
        console.log("Vehicle already present in the store Vehicles array");
        return store;
      }
    case 'ADD_FAVORITE':
      let foundFavorite = store.favorites.find(element=> element.uid == action.payload.uid);
      if (foundFavorite == undefined){
        return {...store, favorites:[...store.favorites, {uid:action.payload.uid, name: action.payload.name, type:action.payload.type}]}
      }else{
        console.log("Favorite already present in store");
        return store;
      }
    case 'DELETE_FAVORITE':
      return{...store,favorites:store.favorites.filter( (item) => item.uid != action.payload.uid && item.name != action.payload.name)}  

    default:
        console.warn(`Unknown action: ${action.type}`);
        return store;
  }    
}
