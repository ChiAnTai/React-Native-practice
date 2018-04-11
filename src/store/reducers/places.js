import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};
const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_PLACE:
      return {
        ...state,
        places:state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://cdn0-techbang.pixfs.net/system/excerpt_images/7191/inpage/123c75d334a959384f782977bfba3c4c.png?1317865368"
          }

        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place=>{
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place =>{
          return place.key === action.key;
        })
      };
    case DESELECT_PLACE:
      retun {
        ...state,
        selectedPlace: null
      };
    default:
          return state;
  }

};
export default reducer;
