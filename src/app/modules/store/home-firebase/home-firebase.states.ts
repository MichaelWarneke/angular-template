import { User } from "app/models/user";
import { Post } from "app/models/post";
import { Todo } from "app/models/todo";

export interface State {
  users: User[];
  posts: Post[];
  todos: Todo[];
  selectedUserPosts: User;
  selectedUserTodos: User;
  loadingUsers: boolean;
  loadingPosts: boolean;
  loadingTodos: boolean;
}

export const initialState: State = {
  users: [],
  posts: [],
  todos: [],
  selectedUserPosts: null,
  selectedUserTodos: null,
  loadingUsers: false,
  loadingPosts: false,
  loadingTodos: false,
};