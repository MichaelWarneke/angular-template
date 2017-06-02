import '@ngrx/core/add/operator/select';
import * as Actions from './home.actions';
import { initialState, State } from './home.states';

export function reducer(state = initialState, action: Actions.Actions): State {
  switch (action.type) {
    case Actions.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case Actions.LOAD_USERS_FAILED:
      return {
        ...state,
        users: null
      }

    case Actions.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case Actions.LOAD_POSTS_FAILED:
      return {
        ...state,
        posts: null
      }

    case Actions.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload
      }
    case Actions.LOAD_TODOS_FAILED:
      return {
        ...state,
        todos: null
      }
    case Actions.CHANGE_SELECTED_USER_POSTS_SUCCESS:
      return state;
    case Actions.CHANGE_SELECTED_USER_POSTS_FAILED:
      return {
        ...state,
        selectedUserPosts: null
      }
    case Actions.LOAD_SELECTED_USER_POSTS_SUCCESS:
      return {
        ...state,
        selectedUserPosts: action.payload
      }
    case Actions.LOAD_SELECTED_USER_POSTS_FAILED:
      return {
        ...state,
        selectedUserPosts: null
      }
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
export const getPosts = (state: State) => state.posts;
export const getTodos = (state: State) => state.todos;

export const getselectedUserPosts = (state: State) => state.selectedUserPosts;
export const getselectedUserTodos = (state: State) => state.selectedUserTodos;
