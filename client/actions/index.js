import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/'


export function addData(id,name, phone){
  return {type: types.ADD_DATA,id, name, phone}
}

export function deleteData(id){
  return {type: types.DELETE_DATA, id}
}

export function updateData(id,name,phone){
  return {type: types.UPDATE_DATA,id,name,phone}
}


export function loadData(){
  return {type:types.LOAD_DATA}
}

export function loadPhoneBooks(){
  return dispatch => {
    dispatch(loadData())
    return request
  .get(`${SERVER_URL}phonebooks`)
  .set('Accept','applications/json')
  .end((err,res)=>{
    if(err) {
      console.error(err)
      dispatch( loadPhoneBooksFailure())

    }else{
      dispatch(loadPhoneBooksSuccess(res.body))
    }

  })
  }
}


export function loadPhoneBooksSuccess(phonebooks){
    return {type: types.LOAD_PHONEBOOKS_SUCCESS,phonebooks}
}

export function loadPhoneBooksFailure(){
    return {type: types.LOAD_PHONEBOOKS_FAILURE}
}


export function addPhoneBook(name, phone){
  console.log(name);
  let id = Date.now()
  return dispatch => {
    dispatch(addData(id,name,phone))
    return request
    .post(`${SERVER_URL}phonebooks`)
    .type('form')
    .send({id:id})
    .send({name:name})
    .send({phone:phone})
    .end((err,res)=>{
      if(err){
        dispatch(addPhoneBookFailure())
        console.log("GAGAL");
      }else{
        console.log("GW MASUKIN YAH");
        dispatch(addPhoneBookSuccess(res.body))
      }
    })
  }


}



export function addPhoneBookFailure(){
    return {type: types.ADD_PHONEBOOK_FAILURE}
}

export function addPhoneBookSuccess(phonebook){
    return {type: types.ADD_PHONEBOOK_SUCCESS,phonebook}
}
