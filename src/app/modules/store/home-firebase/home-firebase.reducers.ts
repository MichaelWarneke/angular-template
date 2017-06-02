import '@ngrx/core/add/operator/select';
import * as Actions from './home-firebase.actions';
import { initialState, State } from './home-firebase.states';

export function reducer(state = initialState, action: Actions.Actions): State {
  switch (action.type) {
    case Actions.FB_LOAD_USERS:
      return {
        ...state,
        loadingUsers: true
      };
    case Actions.FB_LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false
      };
    case Actions.FB_LOAD_USERS_FAILED:
      return {
        ...state,
        users: null,
        loadingUsers: false
      };

    case Actions.FB_LOAD_POSTS:
      return {
        ...state,
        loadingPosts: true
      };
    case Actions.FB_LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false
      };
    case Actions.FB_LOAD_POSTS_FAILED:
      return {
        ...state,
        posts: null,
        loadingPosts: false
      };

    case Actions.FB_LOAD_TODOS:
      return {
        ...state,
        loadingTodos: true
      };
    case Actions.FB_LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loadingTodos: false
      };
    case Actions.FB_LOAD_TODOS_FAILED:
      return {
        ...state,
        todos: null,
        loadingTodos: false
      };
    case Actions.FB_CHANGE_SELECTED_USER_POSTS_SUCCESS:
      return state;
    case Actions.FB_CHANGE_SELECTED_USER_POSTS_FAILED:
      return {
        ...state,
        selectedUserPosts: null
      };
    case Actions.FB_LOAD_SELECTED_USER_POSTS_SUCCESS:
      return {
        ...state,
        selectedUserPosts: action.payload
      };
    case Actions.FB_LOAD_SELECTED_USER_POSTS_FAILED:
      return {
        ...state,
        selectedUserPosts: null
      };
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
export const getPosts = (state: State) => state.posts;
export const getTodos = (state: State) => state.todos;

export const getselectedUserPosts = (state: State) => state.selectedUserPosts;
export const getselectedUserTodos = (state: State) => state.selectedUserTodos;

export const getLoadingUsers = (state: State) => state.loadingUsers;
export const getLoadingPosts = (state: State) => state.loadingPosts;
export const getLoadingTodos = (state: State) => state.loadingTodos;
