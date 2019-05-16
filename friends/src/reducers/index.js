
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
  } from "../actions";
  

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
    // Array characters, Boolean fetching, null error.
  };



  export const rootReducer =(state=initialState, action) => {
      switch(action.type) {
          case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
            case LOGIN_SUCCESS:
                return {
                ...state,
                loggingIn: false
            }
            case LOGIN_FAILURE: 
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
            case FETCH_FRIENDS_START:
                return {
                    ...state,
                    fetchingFriends: true,
                    error: ''
                }
            case FETCH_FRIENDS_SUCCESS:
                return {
                    ...state,
                    fetchingFriends: false,
                    friends: [...state.friends, action.payload]
                }
            case FETCH_FRIENDS_FAILURE: 
                return {
                    ...state,
                    fetchingFriends: false,
                    error: action.payload
                }
            
        default:
            return state;
      }
  }