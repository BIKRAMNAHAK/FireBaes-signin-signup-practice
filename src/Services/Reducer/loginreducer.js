
import React from 'react'

const initialState = {
  user: null,
  error: null,
  isReg : false,
  isSuc : false,
  isLoading: false,
}

function loginreducer(state = initialState, action) {

  switch (action.type) {

    case "SIGNUPSUC":
      return {
        ...state,
        isLoading: true,
        err: null,
        isSuc: false,
        isReg : true,
        user: action.payload,
      }

    case "SIGNUPERR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isSuc : false,
        isReg : false,
      }

    case "LOGINSUC":
      return {
        ...state,
        isLoading: true,
        error: null,
        isSuc : true,
        isReg : false,
        user: action.payload,
      }
    case "LOGINERR":
      return {
        ...state,
        user : null,
        isLoading: false,
        isSuc : false,
        error: action.payload,
      }

    case "SIGNOUT" :
      return{
        ...state,
        user : null,
        isLoading: false,
        error : null,
        isSuc : false,
        isReg : false,
      }
    default:
      return state
  }

}

export default loginreducer
