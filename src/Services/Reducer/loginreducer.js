
import React from 'react'

const initialState = {
  user: null,
  error: null,
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
        isSuc: true,
        user: action.payload,
      }

    case "SIGNUPERR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isSuc : false,
      }

    case "LOGINSUC":
      return {
        ...state,
        isLoading: true,
        error: null,
        isSuc : true,
        user: action.payload,
      }
    case "LOGINERR":
      return {
        ...state,
        user : null,
        isLoading: false,
        error: action.payload,
        isSuc : false,
      }

    case "SIGNOUT" :
      return{
        ...state,
        user : null,
        isLoading: false,
        error : null,
        isSuc : false,
      }
    default:
      return state
  }

}

export default loginreducer
