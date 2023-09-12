import React from 'react'
import allVehiclesContext from './allVehiclesContext'
import { useDispatch } from 'react-redux';
import { addvehiclesData } from '../../../States/action-creators';
import url from '../../../url';
export default function AllvehiclesState(props) {
  const dispatch = useDispatch();
  const getVehicleData = async () => {
    await fetch(`${url}/api/listings/getData`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res =>
      res.json()).then(response => {
        console.log(response);
        dispatch(addvehiclesData(response))
      }
      );
  }
  return (
    <allVehiclesContext.Provider value={{ getVehicleData }}>
      {props.children}
    </allVehiclesContext.Provider>
  )
}
