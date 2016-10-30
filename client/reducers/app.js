// logic utama nanganin gimana cara pengolahan datanya

import {ADD_DATA,DELETE_DATA,UPDATE_DATA,LOAD_DATA,LOAD_PHONEBOOKS_FAILURE,ADD_PHONEBOOK_SUCCESS,ADD_PHONEBOOK_FAILURE,LOAD_PHONEBOOKS_SUCCESS} from '../constants/ActionTypes'

const initialState = []


export default function data(state = initialState,action) {
  switch (action.type) {
    case LOAD_DATA:
    return []

    case LOAD_PHONEBOOKS_SUCCESS:
    return action.phonebooks

    case LOAD_PHONEBOOKS_FAILURE:
    return state

    default:
    return state



    case ADD_DATA:
    return [
      {
        id:action.id,
        name:action.name,
        phone:action.phone

      },
      ...state
    ]

    case ADD_PHONEBOOK_SUCCESS:
    let phonebooks = state
    let idObject = phonebooks.map(function(x){
        return x.id;
    }).indexOf(action.phonebook.id);
    if(idObject > -1) {
      return state
    }else {
      return [
        action.phonebook, ...state
      ]
    }

    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)

    case UPDATE_DATA:
    let dataBaru = state.map(function(eachData){
     if(action.id== eachData.id){
       eachData.name = action.name
       eachData.phone = action.phone
       return eachData
     } else {
       return eachData
      }
    })
   //console.log("dataBaru" ,dataBaru)
   return dataBaru

  }
}
