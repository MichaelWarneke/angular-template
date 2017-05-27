import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { AngularFireDatabase } from "angularfire2/database";

import { Observable } from "rxjs/Observable";

import { PostsDbService } from "app/modules/db/services/posts-db.service";
import { Post } from "app/models/post";
import { UsersDbService } from "app/modules/db/services/users-db.service";
import { TodosDbService } from "app/modules/db/services/todos-db.service";
import { Todo } from "app/models/todo";
import { User } from "app/models/user";

class UserId {
  constructor(
    public key: string,
    public id: string
  ){
    this.key = key;
    this.id = id;
  }
}

@Injectable()
export class InitFbService {
  Sub;

  constructor(private http: Http,
              private db: AngularFireDatabase,
              private postHttpService: PostsDbService,
              private todoHttpService: TodosDbService,
              private userHttpService: UsersDbService) {
  }

  loadDataFromHtml() {
    let posts = this.postHttpService.getPosts();
    let todos = this.todoHttpService.getTodos();
    let users = this.userHttpService.getUsers();

    this.Sub = Observable.forkJoin([posts,todos,users]).subscribe(res =>
      this.transferCallBack(res[0],res[1], res[2])
    )
  }


  transferCallBack(posts: Array<Post>, todos: Array<Todo>, users: Array<User>) {
    console.log("Delete Data on Firebase")
    this.db.list('/users').remove();
    this.db.list('/posts').remove();
    this.db.list('/todos').remove();
    console.log("Transfer Data")
    let userIds: Array<UserId> = new Array();
    for(let user of users) {
      let key = this.db.list('/users').push({id: user.id, name: user.name, username: user.username, email: user.email, address: user.address, phone: user.phone, website: user.website, company: user.company }).key;
      userIds.push(new UserId(key, user.id));
    }
    for(let post of posts) {
      let userId = userIds.find(userId => userId.id == post.userId);
      this.db.list('/posts').push({id: post.id, userId: userId.key,title: post.title, body: post.body});
    }
    for(let todo of todos) {
      let userId = userIds.find(userId => userId.id == todo.userId);
      this.db.list('/todos').push({id: todo.id, userId: userId.key,title: todo.title,completed: todo.completed});
    }
    this.Sub.unsubscribe();
  }
}
