import { HomeFbService } from "./home-fb.service";
import { UsersFbService } from "./users-fb.service";
import { PostsFbService } from "./posts-fb.service";
import { TodosFbService } from "./todos-fb.service";
//import { InitFbService } from "./init-fb.service";

export const FB_SERVICES = [
    HomeFbService,
    UsersFbService,
    PostsFbService,
    TodosFbService
//    InitFbService
]

export { HomeFbService } from "./home-fb.service";
export { UsersFbService } from "./users-fb.service";
export { PostsFbService } from "./posts-fb.service";
export { TodosFbService } from "./todos-fb.service";
