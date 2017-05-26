import { HomeDbService } from "./home-db.service";
import { UsersDbService } from "./users-db.service";
import { PostsDbService } from "./posts-db.service";
import { TodosDbService } from "./todos-db.service";

export const DB_SERVICES = [
    HomeDbService,
    UsersDbService,
    PostsDbService,
    TodosDbService
]